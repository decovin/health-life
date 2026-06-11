const profileId = window.FITNESS_CONFIG?.PROFILE_ID || "vinicius";

const meals = [
  {
    id: "desjejum",
    time: "Manhã",
    title: "Desjejum",
    summary: "Omelete, pão de milho, fruta e café",
    items: ["1 ovo inteiro", "20 g de queijo muçarela", "1 fatia de pão de milho", "1 maçã ou 1 pera", "Café"]
  },
  {
    id: "lanche-manha",
    time: "10:00",
    title: "Lanche da manhã",
    summary: "Iogurte grego zero",
    items: ["1 iogurte grego zero"]
  },
  {
    id: "almoco",
    time: "13:00",
    title: "Almoço",
    summary: "Proteína, carboidrato, legumes e folhas",
    items: ["130 g de frango, tilápia, picanha suína ou carne bovina", "100 g de arroz branco, batata ou mandioca", "100 g de legumes", "Folhas verdes", "Suco de limão"]
  },
  {
    id: "cafe-tarde",
    time: "16:00",
    title: "Café da tarde",
    summary: "Pão integral com proteína, requeijão e fruta",
    items: ["1 fatia de pão integral", "40 g de frango desfiado ou atum", "15 g de requeijão", "1 maçã ou 1 pera"]
  },
  {
    id: "janta",
    time: "19:00",
    title: "Janta",
    summary: "Opção completa ou brioche com carne",
    items: ["Opção 1: 130 g de proteína, 100 g de arroz, batata ou mandioca, azeite e suco de limão", "Opção 2: 1 pão brioche com 80 g de carne bovina"]
  }
];

const workouts = [
  {
    id: "treino-a",
    label: "Treino A",
    title: "Peito, ombro e tríceps",
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
    label: "Treino B",
    title: "Cardio",
    note: "45 a 60 minutos.",
    exercises: [["cardio-b", "Cárdio", "45 a 60 min"]]
  },
  {
    id: "treino-c",
    label: "Treino C",
    title: "Pernas e core",
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
    label: "Treino D",
    title: "Cardio",
    note: "45 a 60 minutos.",
    exercises: [["cardio-d", "Cárdio", "45 a 60 min"]]
  },
  {
    id: "treino-e",
    label: "Treino E",
    title: "Costas e bíceps",
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
  exercises: workout.exercises.map(([id, name, target]) => ({ id, name, target }))
}));

const today = new Date().toISOString().slice(0, 10);
const localKeys = {
  notes: "fitness:workout-notes",
  checks: `fitness:daily-checks:${today}`
};

const supabaseClient = createSupabaseClient();
let notesCache = {};
let checksCache = {};

function createSupabaseClient() {
  const url = window.FITNESS_CONFIG?.SUPABASE_URL;
  const key = window.FITNESS_CONFIG?.SUPABASE_ANON_KEY;
  if (!url || !key || !window.supabase) return null;
  return window.supabase.createClient(url, key);
}

async function init() {
  setSyncStatus("Carregando");
  notesCache = await loadNotes();
  checksCache = await loadChecks();
  renderMeals();
  renderWorkoutSelector();
  renderWorkout(workouts[0].id);
  bindNavigation();
  setSyncStatus(supabaseClient ? "Supabase" : "Local");
}

function setSyncStatus(text) {
  document.getElementById("syncStatus").textContent = text;
}

function bindNavigation() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("is-active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
      button.classList.add("is-active");
      document.getElementById(`${button.dataset.view}View`).classList.add("is-active");
    });
  });

  document.getElementById("resetMeals").addEventListener("click", async () => {
    checksCache = {};
    localStorage.removeItem(localKeys.checks);
    if (supabaseClient) {
      await supabaseClient.from("daily_checks").delete().eq("profile_id", profileId).eq("check_date", today);
    }
    renderMeals();
  });
}

function renderMeals() {
  const strip = document.getElementById("mealStrip");
  strip.innerHTML = meals.map((meal) => `
    <button class="meal-chip ${checksCache[meal.id] ? "is-done" : ""}" data-meal-id="${meal.id}">
      <span>${meal.time}</span>
      <strong>${meal.title}</strong>
    </button>
  `).join("");

  const grid = document.getElementById("mealGrid");
  grid.innerHTML = meals.map((meal) => `
    <article class="meal-card ${checksCache[meal.id] ? "is-done" : ""}">
      <div class="meal-card-header">
        <div>
          <span class="time">${meal.time}</span>
          <h3>${meal.title}</h3>
          <p>${meal.summary}</p>
        </div>
        <label class="check-control">
          <input type="checkbox" data-meal-check="${meal.id}" ${checksCache[meal.id] ? "checked" : ""} />
          <span>Feito</span>
        </label>
      </div>
      <ul>
        ${meal.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `).join("");

  document.querySelectorAll("[data-meal-id]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const card = document.querySelector(`[data-meal-check="${chip.dataset.mealId}"]`);
      card.checked = !card.checked;
      card.dispatchEvent(new Event("change"));
    });
  });

  document.querySelectorAll("[data-meal-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      const id = checkbox.dataset.mealCheck;
      checksCache[id] = checkbox.checked;
      await saveCheck(id, checkbox.checked);
      renderMeals();
    });
  });
}

function renderWorkoutSelector() {
  const select = document.getElementById("workoutSelect");
  select.innerHTML = workouts.map((workout) => `<option value="${workout.id}">${workout.label}</option>`).join("");
  select.addEventListener("change", () => renderWorkout(select.value));
}

function renderWorkout(workoutId) {
  const workout = workouts.find((item) => item.id === workoutId) || workouts[0];
  document.getElementById("workoutMeta").innerHTML = `
    <strong>${workout.label}</strong>
    <span>${workout.title}</span>
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
          <label class="check-control compact">
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
