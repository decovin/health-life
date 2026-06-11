const profileId = window.FITNESS_CONFIG?.PROFILE_ID || "vinicius";

const icons = {
  apple: '<svg viewBox="0 0 24 24"><path d="M12 6c1.7-2.6 4.2-2.9 5.5-2.5-.1 1.7-.9 3.1-2.2 4.1"/><path d="M12.2 7.6c1.1-.7 2.5-.8 3.8-.3 2.9 1.1 3.4 5.1 1.2 9-1.2 2.2-2.4 3.7-3.8 3.7-.9 0-1.3-.5-2.5-.5s-1.7.5-2.6.5c-1.4 0-2.6-1.5-3.8-3.7-2.1-3.9-1.7-7.8 1.2-9 1.3-.5 2.7-.4 3.8.3.7.4 1.9.4 2.7 0Z"/></svg>',
  bowl: '<svg viewBox="0 0 24 24"><path d="M4 12h16c-.4 4.5-3.6 7-8 7s-7.6-2.5-8-7Z"/><path d="M3 12h18"/><path d="M7 10c0-1.5 1.5-2.3 3-2.3s3 .8 3 2.3"/><path d="M11 8c.5-1.8 2.1-2.7 4-2.2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M7 2v4M17 2v4M4 8h16M5 4h14a1 1 0 0 1 1 1v15H4V5a1 1 0 0 1 1-1Z"/><path d="M8 12h2M12 12h2M16 12h2M8 16h2M12 16h2M16 16h2"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/><path d="M3 20h18"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24"><path d="M9 4h6l1 2h3v15H5V6h3l1-2Z"/><path d="M9 10h6M9 14h6M9 18h4"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24"><path d="M7 7v10M17 7v10M3 9v6M21 9v6M3 12h18"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 21c-4 0-7-2.8-7-6.7 0-2.9 1.8-5.1 4-7.3.1 2.2 1.2 3.5 2.7 4.4C11.5 8 13.1 5.1 16 3c.4 3.8 3 5.7 3 10.8 0 4.2-3 7.2-7 7.2Z"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3V11Z"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/><path d="M4 12H2M22 12h-2M12 4V2M12 22v-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  utensils: '<svg viewBox="0 0 24 24"><path d="M6 2v8M3 2v8c0 2 1.3 3 3 3s3-1 3-3V2M6 13v9"/><path d="M17 2v20M17 2c3 2.6 4 5.4 4 9h-4"/></svg>'
};

const meals = [
  {
    id: "desjejum",
    icon: "sun",
    time: "Manhã",
    title: "Desjejum",
    summary: "Omelete, pão de milho, fruta e café",
    detail: "Ovo, muçarela, pão de milho, maçã ou pera",
    items: ["1 ovo inteiro", "20 g de queijo muçarela", "1 fatia de pão de milho", "1 maçã ou 1 pera", "Café"]
  },
  {
    id: "lanche-manha",
    icon: "apple",
    time: "10:00",
    title: "Lanche da manhã",
    summary: "Iogurte grego zero",
    detail: "Opção rápida do meio da manhã",
    items: ["1 iogurte grego zero"]
  },
  {
    id: "almoco",
    icon: "bowl",
    time: "13:00",
    title: "Almoço",
    summary: "Proteína, carboidrato, legumes e folhas",
    detail: "130 g proteína, 100 g carbo, legumes e folhas",
    items: ["130 g de frango, tilápia, picanha suína ou carne bovina", "100 g de arroz branco, batata ou mandioca", "100 g de legumes", "Folhas verdes", "Suco de limão"]
  },
  {
    id: "cafe-tarde",
    icon: "utensils",
    time: "16:00",
    title: "Café da tarde",
    summary: "Pão integral com proteína, requeijão e fruta",
    detail: "Frango ou atum, requeijão, maçã ou pera",
    items: ["1 fatia de pão integral", "40 g de frango desfiado ou atum", "15 g de requeijão", "1 maçã ou 1 pera"]
  },
  {
    id: "janta",
    icon: "moon",
    time: "19:00",
    title: "Janta",
    summary: "Opção completa ou brioche com carne",
    detail: "Opção 1 completa ou opção 2 com brioche",
    items: ["Opção 1: 130 g de proteína, 100 g de arroz, batata ou mandioca, azeite e suco de limão", "Opção 2: 1 pão brioche com 80 g de carne bovina"]
  }
];

const workouts = [
  {
    id: "treino-a",
    label: "Peito, Ombro e Tríceps",
    short: "Treino A",
    note: "Cardio pós-treino se possível: 30 minutos.",
    exercises: [
      ["supino-maquina", "Supino máquina", "3x12"],
      ["supino-inclinado-halteres", "Supino inclinado com halteres", "3x12"],
      ["crucifixo-maquina", "Crucifixo máquina", "3x15"],
      ["desenvolvimento-maquina", "Desenvolvimento máquina", "3x12"],
      ["elevacao-lateral", "Elevação lateral", "3x15"],
      ["triceps-pulley", "Tríceps pulley", "3x15"],
      ["triceps-corda", "Tríceps corda", "3x12"],
      ["prancha", "Prancha", "3x30 segundos"]
    ]
  },
  {
    id: "treino-b",
    label: "Cardio",
    short: "Treino B",
    note: "45 a 60 minutos.",
    exercises: [["cardio-b", "Cárdio", "45 a 60 min"]]
  },
  {
    id: "treino-c",
    label: "Pernas e Core",
    short: "Treino C",
    note: "",
    exercises: [
      ["leg-press-45", "Leg Press 45°", "3x12"],
      ["agachamento-goblet", "Agachamento Goblet", "3x12"],
      ["cadeira-extensora", "Cadeira Extensora", "3x15"],
      ["mesa-flexora", "Mesa Flexora", "3x15"],
      ["afundo-halteres", "Afundo com halteres", "3x10 cada perna"],
      ["panturrilha-leg-press", "Panturrilha no Leg Press", "3x20"],
      ["abdominal-crunch", "Abdominal Crunch", "3x20"],
      ["prancha-lateral", "Prancha lateral", "3x30 segundos cada lado"]
    ]
  },
  {
    id: "treino-d",
    label: "Cardio",
    short: "Treino D",
    note: "45 a 60 minutos.",
    exercises: [["cardio-d", "Cárdio", "45 a 60 min"]]
  },
  {
    id: "treino-e",
    label: "Costas e Bíceps",
    short: "Treino E",
    note: "30 minutos de cárdio.",
    exercises: [
      ["puxada-frontal", "Puxada frontal", "3x12"],
      ["remada-baixa-pronada", "Remada baixa pronada", "3x12"],
      ["remada-curvada-polia", "Remada curvada na polia", "3x12"],
      ["pulldown", "Pulldown", "3x15"],
      ["rosca-direta", "Rosca direta", "3x12"],
      ["rosca-alternada", "Rosca alternada", "3x12"],
      ["remada-alta-polia", "Remada alta na polia barra", "3x15"],
      ["abdominal-infra", "Abdominal infra", "3x15"]
    ]
  }
].map((workout) => ({
  ...workout,
  exercises: workout.exercises.map(([id, name, target]) => {
    const parsed = parseTarget(target);
    return { id, name, target, ...parsed };
  })
}));

const today = new Date().toISOString().slice(0, 10);
const localKeys = {
  notes: "fitness:workout-notes",
  checks: `fitness:daily-checks:${today}`,
  workout: "fitness:selected-workout"
};

const supabaseClient = createSupabaseClient();
let notesCache = {};
let checksCache = {};
let currentWorkoutId = localStorage.getItem(localKeys.workout) || "treino-e";

function parseTarget(target) {
  const match = target.match(/^(\d+)x(.+)$/i);
  if (!match) return { series: "-", reps: target };
  return { series: match[1], reps: match[2].trim() };
}

function createSupabaseClient() {
  const url = window.FITNESS_CONFIG?.SUPABASE_URL;
  const key = window.FITNESS_CONFIG?.SUPABASE_ANON_KEY;
  if (!url || !key || !window.supabase) return null;
  return window.supabase.createClient(url, key);
}

async function init() {
  hydrateIcons();
  renderDate();
  setSyncStatus("Carregando");
  notesCache = await loadNotes();
  checksCache = await loadChecks();
  renderMeals();
  renderWorkoutSelector();
  renderWorkout(currentWorkoutId);
  bindNavigation();
  setSyncStatus(supabaseClient ? "Supabase" : "Local");
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
}

function renderDate() {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  document.getElementById("todayLabel").textContent = formatter.format(new Date());
}

function setSyncStatus(text) {
  document.getElementById("syncStatus").textContent = text;
}

function bindNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((tab) => tab.classList.remove("is-active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
      button.classList.add("is-active");
      document.getElementById(`${button.dataset.view}View`).classList.add("is-active");
      if (button.dataset.view === "training") renderWorkout(currentWorkoutId);
    });
  });

  document.getElementById("resetMeals").addEventListener("click", async () => {
    checksCache = {};
    localStorage.removeItem(localKeys.checks);
    if (supabaseClient) {
      await supabaseClient.from("daily_checks").delete().eq("profile_id", profileId).eq("check_date", today);
    }
    renderMeals();
    renderWorkout(currentWorkoutId);
  });
}

function renderMeals() {
  const grid = document.getElementById("mealGrid");
  grid.innerHTML = meals.map((meal) => `
    <article class="meal-card ${checksCache[meal.id] ? "is-done" : ""}" data-meal-id="${meal.id}">
      <button class="meal-toggle" type="button" data-meal-toggle="${meal.id}" aria-label="Marcar ${meal.title}">
        <span data-icon="${meal.icon}"></span>
      </button>
      <div class="meal-content">
        <div class="meal-main">
          <span class="meal-time">${meal.time}</span>
          <div>
            <h3>${meal.title}</h3>
            <p>${meal.items.map((item) => `• ${item}`).join("<br>")}</p>
          </div>
        </div>
        <div class="meal-side">
          <strong>${checksCache[meal.id] ? "Feito" : "Plano"}</strong>
          <span>${meal.detail}</span>
        </div>
      </div>
    </article>
  `).join("");
  hydrateIcons(grid);

  document.getElementById("dailyTotal").innerHTML = `
    <span data-icon="flame"></span>
    <div><strong>${meals.length}</strong><small>refeições</small></div>
    <div><strong>130 g</strong><small>proteína base</small></div>
    <div><strong>100 g</strong><small>carbo base</small></div>
    <div><strong>2</strong><small>opções na janta</small></div>
  `;
  hydrateIcons(document.getElementById("dailyTotal"));

  document.querySelectorAll("[data-meal-toggle]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.mealToggle;
      checksCache[id] = !checksCache[id];
      await saveCheck(id, checksCache[id]);
      renderMeals();
    });
  });
}

function renderWorkoutSelector() {
  const select = document.getElementById("workoutSelect");
  select.innerHTML = workouts.map((workout) => `<option value="${workout.id}">${workout.label}</option>`).join("");
  select.value = currentWorkoutId;
  select.addEventListener("change", () => {
    currentWorkoutId = select.value;
    localStorage.setItem(localKeys.workout, currentWorkoutId);
    renderWorkout(currentWorkoutId);
  });
}

function renderWorkout(workoutId) {
  const workout = workouts.find((item) => item.id === workoutId) || workouts[0];
  currentWorkoutId = workout.id;
  const selector = document.getElementById("workoutSelect");
  if (selector) selector.value = workout.id;

  document.getElementById("exerciseTable").innerHTML = workout.exercises.map((exercise, index) => {
    const saved = notesCache[exercise.id] || {};
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${exercise.name}</td>
        <td>${exercise.series}</td>
        <td>${exercise.reps}</td>
        <td><input class="table-input" inputmode="decimal" data-note="${exercise.id}" data-field="weight" value="${saved.weight || ""}" placeholder="--" /></td>
        <td><input class="table-input" data-note="${exercise.id}" data-field="machine" value="${saved.machine || ""}" placeholder="--" /></td>
      </tr>
    `;
  }).join("");

  document.getElementById("workoutMeta").innerHTML = `
    <strong>${workout.short}</strong>
    <span>${workout.label}</span>
    ${workout.note ? `<em>${workout.note}</em>` : ""}
  `;

  document.getElementById("exerciseList").innerHTML = workout.exercises.map((exercise) => {
    const saved = notesCache[exercise.id] || {};
    return `
      <article class="exercise-card">
        <div class="exercise-title">
          <div>
            <h3>${exercise.name}</h3>
            <p>${exercise.target}</p>
          </div>
          <label class="done-control">
            <input type="checkbox" data-exercise-done="${exercise.id}" ${checksCache[exercise.id] ? "checked" : ""} />
            <span>Feito</span>
          </label>
        </div>
        <div class="exercise-fields">
          <label>
            <span>Peso</span>
            <input inputmode="decimal" data-note="${exercise.id}" data-field="weight" value="${saved.weight || ""}" placeholder="kg" />
          </label>
          <label>
            <span>Máquina</span>
            <input data-note="${exercise.id}" data-field="machine" value="${saved.machine || ""}" placeholder="número" />
          </label>
        </div>
        <label class="notes-field">
          <span>Observação</span>
          <textarea data-note="${exercise.id}" data-field="notes" rows="2" placeholder="Ajuste de banco, pegada, ordem...">${saved.notes || ""}</textarea>
        </label>
      </article>
    `;
  }).join("");

  bindWorkoutFields();
}

function bindWorkoutFields() {
  document.querySelectorAll("[data-note]").forEach((field) => {
    field.addEventListener("change", () => saveExerciseField(field.dataset.note, field.dataset.field, field.value));
    field.addEventListener("blur", () => saveExerciseField(field.dataset.note, field.dataset.field, field.value));
  });

  document.querySelectorAll("[data-exercise-done]").forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      checksCache[checkbox.dataset.exerciseDone] = checkbox.checked;
      await saveCheck(checkbox.dataset.exerciseDone, checkbox.checked);
    });
  });
}

async function loadNotes() {
  const local = JSON.parse(localStorage.getItem(localKeys.notes) || "{}");
  if (!supabaseClient) return local;
  const { data, error } = await supabaseClient
    .from("workout_exercise_notes")
    .select("exercise_id, weight, machine, notes")
    .eq("profile_id", profileId);
  if (error) return local;
  return Object.fromEntries(data.map((item) => [item.exercise_id, item]));
}

async function loadChecks() {
  const local = JSON.parse(localStorage.getItem(localKeys.checks) || "{}");
  if (!supabaseClient) return local;
  const { data, error } = await supabaseClient
    .from("daily_checks")
    .select("item_id, completed")
    .eq("profile_id", profileId)
    .eq("check_date", today);
  if (error) return local;
  return Object.fromEntries(data.map((item) => [item.item_id, item.completed]));
}

async function saveExerciseField(exerciseId, field, value) {
  notesCache[exerciseId] = { ...(notesCache[exerciseId] || {}), [field]: value };
  localStorage.setItem(localKeys.notes, JSON.stringify(notesCache));

  document.querySelectorAll(`[data-note="${exerciseId}"][data-field="${field}"]`).forEach((input) => {
    if (input.value !== value) input.value = value;
  });

  if (!supabaseClient) return;
  await supabaseClient.from("workout_exercise_notes").upsert({
    profile_id: profileId,
    exercise_id: exerciseId,
    weight: notesCache[exerciseId].weight || "",
    machine: notesCache[exerciseId].machine || "",
    notes: notesCache[exerciseId].notes || "",
    updated_at: new Date().toISOString()
  });
}

async function saveCheck(itemId, completed) {
  localStorage.setItem(localKeys.checks, JSON.stringify(checksCache));
  if (!supabaseClient) return;
  await supabaseClient.from("daily_checks").upsert({
    profile_id: profileId,
    check_date: today,
    item_id: itemId,
    completed,
    updated_at: new Date().toISOString()
  });
}

init();
