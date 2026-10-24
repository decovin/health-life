import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';

const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8').replace(/\ninit\(\);\s*$/, '');
function environment(storage = {}, options = {}) {
  const elements = new Map();
  const element = () => ({ innerHTML: '', textContent: '', value: '', dataset: {}, style: {}, disabled: false,
    classList: { add() {}, remove() {}, toggle() {} }, querySelectorAll: () => [], querySelector: () => null,
    addEventListener() {}, setAttribute() {}, focus() {} });
  const localStorage = Object.assign(Object.create(null), storage);
  Object.defineProperties(localStorage, {
    getItem: { value: (key) => localStorage[key] ?? null },
    setItem: { value: (key, value) => { localStorage[key] = String(value); } },
    removeItem: { value: (key) => { delete localStorage[key]; } }
  });
  const context = vm.createContext({ localStorage, location: { hostname: options.hostname || 'localhost', search: '' },
    window: { location: { search: '', pathname: '/' }, FITNESS_CONFIG: { SUPABASE_URL: 'https://example.supabase.co', SUPABASE_ANON_KEY: 'test' }, supabase: { createClient() { if (options.client) return options.client; throw Error('Production client must not be created locally'); } } },
    document: { getElementById(id) { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); }, querySelectorAll: () => [], querySelector: () => null, body: element() },
    URL, URLSearchParams, console, structuredClone, setTimeout, clearTimeout, requestAnimationFrame() {}, confirm: () => true, alert(message) { throw Error(message); }, crypto: { randomUUID: () => 'new-id' }
  });
  return { run: (code) => vm.runInContext(code, context), storage: localStorage, elements };
}
function setup() {
  const env = environment(); env.run(source);
  env.run(`
    activeProfile = profiles.vinicius; profileId = 'vinicius'; meals = activeProfile.meals;
    const ex = (id, name, machine = '7') => ({id, name, series:'3', reps:'12', target:'3x12', defaultMachine:machine, defaultWeight:'10', defaultNotes:'Banco 2'});
    workoutPlans = [
      {id:'old', name:'Programa antigo', createdAt:'2026-10-20', workouts:[{id:'a',short:'A',label:'Pernas',exercises:[ex('e1','Leg press')]},{id:'b',short:'B',label:'Costas',exercises:[ex('e2','Remada')]}]},
      {id:'new', name:'Programa novo', createdAt:'2026-10-22', workouts:[{id:'c',short:'C',label:'Pernas',exercises:[ex('e3','Leg press','9')]}]}
    ];
    activeWorkoutPlanId='new'; applyViewedPlan('old'); currentWorkoutId='a'; selectedDate='2026-09-01';
  `);
  return env;
}

test('localhost is isolated even with valid production configuration', () => {
  const env = setup(); assert.equal(env.run('supabaseClient'), null);
});
test('name shares weight and machine across programs; same machine with another name does not', () => {
  const env = setup();
  env.run(`notesCache.e1={machine:'21'}; latestWeightsCache.e1={date:'2026-09-02',weight:'55'}; latestWeightsCache.e2={date:'2026-09-03',weight:'90'}; notesCache.e2={machine:'21'};`);
  assert.equal(env.run(`getExerciseFields(workoutPlans[1].workouts[0].exercises[0]).weight`), '55');
  assert.equal(env.run(`getExerciseFields(workoutPlans[1].workouts[0].exercises[0]).machine`), '21');
  assert.equal(env.run(`getExerciseFields(workoutPlans[0].workouts[1].exercises[0]).weight`), '90');
});
test('explicit daily values, including empty weight, override suggestions', () => {
  const env = setup(); env.run(`latestWeightsCache.e1={date:'2026-09-02',weight:'55'}; dailyLogsCache.e1={weight:'',machine:'4'};`);
  assert.equal(env.run(`getExerciseFields(findExercise('e1')).weight`), '');
  assert.equal(env.run(`getExerciseFields(findExercise('e1')).machine`), '4');
});
test('retroactive completion preserves an independent complete session and keeps later last-completion date', async () => {
  const env = setup();
  env.run(`dailyLogsCache.e1={weight:'42',machine:'18',notes:'Pés altos'}; checksCache.e1=true; workoutCompletionCache.a='2026-10-21'; localStorage.setItem(localKeys.checks(profileId,'2026-10-21'),JSON.stringify({'workout-done:a':true}));`);
  await env.run(`toggleWorkoutComplete('a')`);
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.fields.e1.weight`), '42');
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.fields.e1.machine`), '18');
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.fields.e1.notes`), 'Pés altos');
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.workout.exercises[0].reps`), '12');
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.completed`), true);
  assert.equal(env.run('workoutCompletionCache.a'), '2026-10-21');
  env.run(`workoutPlans[0].workouts[0].exercises[0].name='Mudou';`);
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.workout.exercises[0].name`), 'Leg press');
});
test('multiple completed workouts on one date remain independently accessible', async () => {
  const env = setup(); env.run('selectedDate=today'); await env.run(`toggleWorkoutComplete('a')`);
  env.run(`currentWorkoutId='b'`); await env.run(`toggleWorkoutComplete('b')`);
  assert.equal(env.run(`Object.keys(workoutSessions[selectedDate]).length`), 2);
  assert.equal(env.run(`timelineHistoryCache[selectedDate].length`), 2);
  env.run(`selectHistoricalWorkout('a')`);
  assert.equal(env.run(`findExercise('e1').name`), 'Leg press');
});
test('viewing and selecting a program does not change the active program or create a session', async () => {
  const env = setup(); await env.run(`saveWorkoutForDate('a')`);
  assert.equal(env.run('activeWorkoutPlanId'), 'new');
  assert.equal(env.run('Object.keys(workoutSessions).length'), 0);
});
test('deleting a program preserves session details and hides it from program choices after reload', async () => {
  const env = setup(); env.run(`dailyLogsCache.e1={weight:'42',machine:'18',notes:'Banco 3'};`);
  await env.run(`toggleWorkoutComplete('a')`); await env.run(`deleteViewedPlan()`);
  assert.equal(env.run('livePlans().length'), 1);
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.fields.e1.notes`), 'Banco 3');
  await env.run('loadWorkoutPlans()');
  env.run(`selectHistoricalWorkout('a')`);
  assert.equal(env.run(`historicalSession.workout.exercises[0].name`), 'Leg press');
  assert.equal(env.run('workouts.length'), 1);
  assert.equal(env.run(`getExerciseFields(findExercise('e1')).machine`), '18');
});
test('deleting the last program persists an empty live state rather than recreating defaults', async () => {
  const env = setup(); await env.run('deleteViewedPlan()'); await env.run('deleteViewedPlan()');
  assert.equal(env.run('livePlans().length'), 0);
  await env.run('loadWorkoutPlans()');
  assert.equal(env.run('livePlans().length'), 0); assert.equal(env.run('workouts.length'), 0);
  env.run('renderMeals(); renderWorkout(currentWorkoutId);');
  assert.match(env.elements.get('exerciseList').innerHTML, /Criar programa/);
});
test('legacy migration preserves checks and loads by exercise id, never by ambiguous machine', async () => {
  const env = setup(); env.run(`localStorage.setItem(localKeys.checks(profileId,'2026-08-12'),JSON.stringify({'workout-done:a':true,e1:true})); localStorage.setItem(dailyLogPrefix(profileId)+'2026-08-12',JSON.stringify({e1:{weight:'35'},'machine:7':{weight:'999'}}));`);
  await env.run('preserveLegacySessions(workoutPlans[0])');
  assert.equal(env.run(`workoutSessions['2026-08-12'].a.fields.e1.weight`), '35');
  assert.equal(env.run(`workoutSessions['2026-08-12'].a.checks.e1`), true);
  assert.equal(env.run(`workoutSessions['2026-08-12'].a.reconstructed`), true);
});
test('reorder survives reload and does not change another program', async () => {
  const env = setup(); env.run(`moveWorkout('b',0)`);
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`), 'b');
  assert.equal(env.run(`workoutPlans[1].workouts[0].id`), 'c');
  await env.run('loadWorkoutPlans()');
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`), 'b');
});
test('profiles keep plans, history and ordering in separate storage', async () => {
  const env = setup(); await env.run(`toggleWorkoutComplete('a')`);
  env.run(`persistWorkoutPlans(false); profileId='leticia'; activeProfile=profiles.leticia;`);
  await env.run('loadWorkoutPlans()');
  assert.equal(env.run(`Object.keys(workoutSessions).length`), 0);
  assert.equal(env.run(`workoutPlans[0].name`), 'Treino original');
  env.run(`profileId='vinicius'; activeProfile=profiles.vinicius;`); await env.run('loadWorkoutPlans()');
  assert.equal(env.run(`workoutSessions['2026-09-01'].a.completed`), true);
});
test('expanded chart preferences survive workout rerenders and multiple charts can stay open', () => {
  const env = setup(); env.run(`expandedCharts.add('e1'); expandedCharts.add('e2'); renderWorkout('a');`);
  assert.equal(env.run('expandedCharts.size'), 2);
  assert.match(env.elements.get('exerciseList').innerHTML, /aria-expanded="true"/);
});

test('unchecking the newest completion restores the true older date, beyond the 30-day strip', async () => {
  const env = setup();
  env.run(`selectedDate=today; localStorage.setItem(localKeys.checks(profileId,'2026-02-10'),JSON.stringify({'workout-done:a':true}));`);
  await env.run(`toggleWorkoutComplete('a')`); await env.run(`toggleWorkoutComplete('a')`);
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(env.run('workoutCompletionCache.a'), '2026-02-10');
});
test('unperformed exercises do not gain chart points just because another exercise was completed', async () => {
  const env = setup(); env.run(`workoutPlans[0].workouts[0].exercises.push({id:'untouched',name:'Elevação lateral',series:'3',reps:'12',defaultWeight:'15'}); checksCache.e1=true; captureSession('a');`);
  assert.equal(env.run(`workoutSessions[selectedDate].a.fields.untouched.recorded`), false);
  assert.equal(env.run(`getLatestNamedRecord(findExercise('untouched'))`), null);
  const history = await env.run(`loadExerciseHistory('untouched')`);
  assert.equal(history.length, 0);
});
test('an inline chart with zero or one measurement renders honestly', () => {
  const env = setup();
  assert.match(env.run('renderChart([])'), /Ainda não existe carga/);
  const chart = env.run(`renderChart([{date:'2026-09-01',weight:42}])`);
  assert.match(chart, /42 kg/); assert.match(chart, /cx="320"/); assert.doesNotMatch(chart, /NaN|Infinity/);
});
test('a deleted program is not restored when opening an unrelated date', async () => {
  const env = setup(); await env.run(`toggleWorkoutComplete('a')`); await env.run('deleteViewedPlan()');
  env.run(`selectHistoricalWorkout('a')`);
  await env.run(`selectDate('2026-10-15')`);
  assert.equal(env.run(`getViewedPlan().id`), 'new');
  assert.equal(env.run(`workouts[0].id`), 'c');
});
test('CSV import retains exercise names, order and prescriptions', () => {
  const env = setup();
  const csv = 'nome_treino;exercicio;series;repeticoes;observacoes\nA;Supino máquina;3;12;Banco 2\nB;Remada;4;10;Pegada neutra';
  const imported = env.run(`buildWorkoutPlanFromCsv(${JSON.stringify(csv)},'Ficha.csv')`);
  assert.equal(imported.workouts.length, 2);
  assert.equal(imported.workouts[0].exercises[0].name, 'Supino máquina');
  assert.equal(imported.workouts[1].exercises[0].reps, '10');
});

test('private LAN preview hosts are isolated from production too', () => {
  for (const hostname of ['192.168.1.5','10.0.0.2','172.16.0.3','fitness.local']) {
    const env = environment({}, {hostname}); env.run(source);
    assert.equal(env.run('supabaseClient'), null);
  }
});
test('remote settings writes are ordered and retain their original profile identity', async () => {
  const records = [];
  const client = { from(table) { assert.equal(table, 'profile_settings'); return { async upsert(record) {
    await new Promise((resolve) => setTimeout(resolve, records.length ? 0 : 10));
    records.push(record); return {error:null};
  } }; } };
  const env = environment({}, {hostname:'production.example', client}); env.run(source);
  env.run(`profileId='vinicius'; persistWorkoutPlans(); profileId='leticia'; persistWorkoutPlans();`);
  await env.run('settingsSyncQueue');
  assert.deepEqual(records.map((r) => r.profile_id), ['vinicius','leticia']);
  assert.equal(records[0].workout_names.__workout_plans.schemaVersion, 2);
});
test('remote legacy history is fetched beyond the first thousand rows', async () => {
  const rows = Array.from({length:1003}, (_,i) => ({log_date:'2026-01-01',exercise_id:`e${i}`,weight:'25'}));
  const ranges = [];
  const client = { from() { const query = {select(){return query;},eq(){return query;},order(){return query;},range(start,end){ranges.push([start,end]);return Promise.resolve({data:rows.slice(start,end+1),error:null});}}; return query; } };
  const env = environment({}, {hostname:'production.example', client}); env.run(source);
  const result = await env.run(`fetchAllProfileRows('daily_exercise_logs','log_date,exercise_id,weight','log_date')`);
  assert.equal(result.length,1003); assert.deepEqual(ranges,[[0,999],[1000,1999]]);
});
test('failed remote settings writes leave the complete local session recoverable', async () => {
  const client = {from(){return {upsert:async()=>({error:{message:'offline'}})};}};
  const env = environment({}, {hostname:'production.example',client}); env.run(source);
  env.run(`profileId='vinicius'; workoutSessions={'2026-10-22':{a:{completed:true}}}; persistWorkoutPlans();`);
  await assert.rejects(env.run('settingsSyncQueue'));
  assert.equal(JSON.parse(env.storage['fitness:vinicius:workout-plans']).sessions['2026-10-22'].a.completed,true);
});

test('holding a day creates a floating block and dropping it changes the persisted order', async () => {
  const env = setup();
  env.run(`
    const ghosts=[];
    document.body.append=(ghost)=>ghosts.push(ghost);
    const makeCard=(id,x)=>({dataset:{workoutButton:id},style:{},offsetWidth:112,title:'',handlers:{},
      setAttribute(){},setPointerCapture(){},classList:{add(){},remove(){},toggle(){}},
      getBoundingClientRect:()=>({left:x,right:x+112,top:0,bottom:80}),
      addEventListener(type,handler){this.handlers[type]=handler;},
      cloneNode(){return {style:{},classList:{add(){}},remove(){}};}});
    const cards=[makeCard('a',0),makeCard('b',122)];
    const container={dataset:{},querySelector:()=>null,insertBefore(card,ref){const i=cards.indexOf(card);if(i>=0)cards.splice(i,1);cards.splice(ref?cards.indexOf(ref):cards.length,0,card);},querySelectorAll:(selector)=>selector==='[data-workout-button]'?cards:[],getBoundingClientRect:()=>({left:0,right:300,top:0,bottom:80})};
    bindWorkoutReorder(container);
    cards[0].handlers.pointerdown({button:0,clientX:50,clientY:40,pointerId:1});
  `);
  await new Promise((resolve)=>setTimeout(resolve,420));
  assert.equal(env.run('ghosts.length'),1);
  env.run(`const sourceCard=cards[0]; sourceCard.handlers.pointermove({clientX:180,clientY:40,preventDefault(){}});`);
  assert.equal(env.run(`cards[0].dataset.workoutButton`),'b');
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`),'a');
  env.run(`sourceCard.handlers.pointerup();`);
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`),'b');
  assert.equal(JSON.parse(env.storage['fitness:vinicius:workout-plans']).plans[0].workouts[0].id,'b');
});

test('the canonical v2 column wins over stale program data written by an older tab', async () => {
  const canonical={schemaVersion:2,plans:[{id:'deleted',name:'Arquivo',deletedAt:'2026-10-23',workouts:[]}],sessions:{},activePlanId:'',updatedAt:'2026-10-23T12:00:00Z'};
  const client={from(){const query={select(){return query;},eq(){return query;},maybeSingle:async()=>({data:{workout_plans:canonical,workout_names:{__workout_plans:{plans:[{id:'resurrected'}]}}},error:null})};return query;}};
  const env=environment({}, {hostname:'production.example',client});env.run(source);
  env.run(`activeProfile=profiles.vinicius;profileId='vinicius';`);
  await env.run('loadWorkoutPlans()');
  assert.equal(env.run('livePlans().length'),0);
  assert.equal(env.run('workoutPlans[0].id'),'deleted');
});

test('reorder animates the displacement and respects reduced motion', () => {
  const env = setup();
  env.run(`
    const moves=[];
    const animatedCard={dataset:{workoutButton:'a'},getBoundingClientRect:()=>({left:122,top:0}),getAnimations:()=>[],animate:(frames,options)=>moves.push({frames,options})};
    const animatedContainer={querySelectorAll:()=>[animatedCard]};
    animateWorkoutPositions(animatedContainer,new Map([['a',{left:0,top:0}]]));
  `);
  assert.equal(env.run('moves.length'),1);
  assert.equal(env.run('moves[0].frames[0].transform'),'translate(-122px, 0px)');
  assert.equal(env.run('moves[0].options.duration'),220);
  env.run(`window.matchMedia=()=>({matches:true}); animateWorkoutPositions(animatedContainer,new Map([['a',{left:0,top:0}]]));`);
  assert.equal(env.run('moves.length'),1);
});

test('cancelling a drag restores the preview without persisting the tentative order', async () => {
  const env = setup();
  env.run(`
    const ghosts=[];
    document.body.append=(ghost)=>ghosts.push(ghost);
    const makeCard=(id,x)=>({dataset:{workoutButton:id},style:{},offsetWidth:112,title:'',handlers:{},
      setAttribute(){},setPointerCapture(){},classList:{add(){},remove(){},toggle(){}},
      getBoundingClientRect:()=>({left:x,right:x+112,top:0,bottom:80}),
      addEventListener(type,handler){this.handlers[type]=handler;},
      cloneNode(){return {style:{},classList:{add(){}},remove(){}};}});
    const cards=[makeCard('a',0),makeCard('b',122)];
    const container={dataset:{},querySelector:()=>null,insertBefore(card,ref){const i=cards.indexOf(card);if(i>=0)cards.splice(i,1);cards.splice(ref?cards.indexOf(ref):cards.length,0,card);},querySelectorAll:(selector)=>selector==='[data-workout-button]'?cards:[],getBoundingClientRect:()=>({left:0,right:300,top:0,bottom:80})};
    bindWorkoutReorder(container);
    cards[0].handlers.pointerdown({button:0,clientX:50,clientY:40,pointerId:1});
  `);
  await new Promise((resolve)=>setTimeout(resolve,420));
  assert.equal(env.run('ghosts.length'),1);
  env.run(`const sourceCard=cards[0]; sourceCard.handlers.pointermove({clientX:180,clientY:40,preventDefault(){}});`);
  assert.equal(env.run(`cards[0].dataset.workoutButton`),'b');
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`),'a');
  env.run(`sourceCard.handlers.pointercancel();`);
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`),'a');
  assert.equal(env.run(`cards[0].dataset.workoutButton`),'a');
  assert.equal(env.storage['fitness:vinicius:workout-plans'],undefined);
});

function touchDragEnvironment() {
  const env = setup();
  env.run(`
    const ghosts=[];
    let prevented=0, captures=0;
    document.body.append=(ghost)=>ghosts.push(ghost);
    const makeCard=(id,x)=>({dataset:{workoutButton:id},style:{},offsetWidth:112,handlers:{},options:{},
      setAttribute(){},setPointerCapture(){captures++;},classList:{add(){},remove(){},toggle(){}},
      getBoundingClientRect:()=>({left:x,right:x+112,top:0,bottom:80}),
      addEventListener(type,handler,options){this.handlers[type]=handler;this.options[type]=options;},
      cloneNode(){return {style:{},classList:{add(){}},remove(){this.removed=true;}};}});
    const cards=[makeCard('a',0),makeCard('b',122)];
    const sourceCard=cards[0];
    const container={dataset:{},scrollLeft:0,querySelector:()=>null,
      insertBefore(card,ref){const i=cards.indexOf(card);if(i>=0)cards.splice(i,1);cards.splice(ref?cards.indexOf(ref):cards.length,0,card);},
      querySelectorAll:()=>cards,getBoundingClientRect:()=>({left:0,right:300,top:0,bottom:80})};
    bindWorkoutReorder(container);
    const touch=(x,y=40)=>({identifier:7,clientX:x,clientY:y});
    const touchEvent=(x,y=40)=>({touches:[touch(x,y)],changedTouches:[touch(x,y)],cancelable:true,preventDefault(){prevented++;}});
  `);
  return env;
}

test('mobile long press keeps dragging after pointercancel and lost capture, then saves on touchend', async () => {
  const env = touchDragEnvironment();
  env.run(`sourceCard.handlers.pointerdown({pointerType:'touch',button:0,clientX:50,clientY:40,pointerId:1}); sourceCard.handlers.touchstart(touchEvent(50));`);
  await new Promise(resolve=>setTimeout(resolve,420));
  assert.equal(env.run('ghosts.length'),1);
  assert.equal(env.run('captures'),0);
  env.run(`sourceCard.handlers.pointercancel({pointerType:'touch'}); sourceCard.handlers.lostpointercapture(); sourceCard.handlers.touchmove(touchEvent(65,43));`);
  assert.equal(env.run('ghosts[0].removed'),undefined);
  assert.equal(env.run('prevented'),1);
  env.run(`sourceCard.handlers.touchmove(touchEvent(180));`);
  assert.equal(env.run(`cards[0].dataset.workoutButton`),'b');
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`),'a');
  env.run(`sourceCard.handlers.touchend(touchEvent(180));`);
  assert.equal(env.run(`workoutPlans[0].workouts[0].id`),'b');
  assert.equal(env.run('prevented'),3);
  assert.equal(env.run('sourceCard.options.touchmove.passive'),false);
});

test('a normal mobile swipe before the hold threshold remains native scrolling', async () => {
  const env=touchDragEnvironment();
  env.run(`sourceCard.handlers.touchstart(touchEvent(50)); sourceCard.handlers.touchmove(touchEvent(75,60));`);
  await new Promise(resolve=>setTimeout(resolve,420));
  assert.equal(env.run('ghosts.length'),0);
  assert.equal(env.run('prevented'),0);
  env.run(`sourceCard.handlers.touchend(touchEvent(75,60));`);
  assert.equal(env.storage['fitness:vinicius:workout-plans'],undefined);
});

test('touch cancellation restores the original order without saving a partial drag', async () => {
  const env=touchDragEnvironment();
  env.run(`sourceCard.handlers.touchstart(touchEvent(50));`);
  await new Promise(resolve=>setTimeout(resolve,420));
  env.run(`sourceCard.handlers.touchmove(touchEvent(180)); sourceCard.handlers.touchcancel();`);
  assert.equal(env.run(`cards[0].dataset.workoutButton`),'a');
  assert.equal(env.run('ghosts[0].removed'),true);
  assert.equal(env.storage['fitness:vinicius:workout-plans'],undefined);
});

test('the day selector has no quick-add button while program editing stays available', () => {
  const env=setup();env.run('renderWorkoutSelector()');
  assert.doesNotMatch(env.elements.get('trainingWorkoutButtons').innerHTML,/data-quick-add-section|Adicionar treino|workout-segment-add/);
  assert.match(env.elements.get('trainingWorkoutButtons').innerHTML,/data-workout-button/);
});
