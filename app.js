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

const viniciusMeals = [
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

const viniciusWorkouts = [
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

const leticiaMeals = [
  {
    id: "desjejum",
    icon: "sun",
    time: "Manhã",
    title: "Desjejum",
    summary: "Iogurte grego zero, chia e Yakult Light",
    detail: "Iogurte, chia e Yakult",
    items: ["1 iogurte grego zero", "5 g de chia", "1 Yakult Light"]
  },
  {
    id: "almoco",
    icon: "bowl",
    time: "13:00",
    title: "Almoço",
    summary: "Proteína, carboidrato, folhas e azeite",
    detail: "100 g proteína, 60 g carbo, folhas e azeite",
    items: ["100 g de frango, tilápia, picanha suína ou carne bovina", "60 g de arroz branco, batata ou mandioca", "Folhas verdes", "1 colher de azeite extra virgem"]
  },
  {
    id: "cafe-tarde",
    icon: "utensils",
    time: "16:00",
    title: "Café da tarde",
    summary: "Pão integral, muçarela e castanhas",
    detail: "Pão, queijo e castanhas",
    items: ["1 fatia de pão integral", "20 g de queijo muçarela", "2 castanhas do Pará"]
  },
  {
    id: "janta",
    icon: "moon",
    time: "19:00",
    title: "Janta",
    summary: "Rap 10 com proteína ou hambúrguer",
    detail: "Rap 10 ou pão de hambúrguer",
    items: ["Opção 1: 1 Rap 10 integral, 40 g de frango desfiado ou atum, 10 g de creme de ricota", "Opção 2: 1 pão de hambúrguer com 60 g de carne bovina"]
  }
];

const leticiaWorkouts = [
  {
    id: "treino-a",
    label: "Glúteos e Quadríceps",
    short: "Treino A",
    note: "Cardio se possível: 30 minutos.",
    exercises: [
      ["leg-press-45", "Leg Press 45°", "3x12"],
      ["agachamento-livre", "Agachamento Livre", "3x12"],
      ["cadeira-extensora", "Cadeira Extensora", "3x15"],
      ["afundo-halteres", "Afundo com halteres", "3x10 cada perna"],
      ["cadeira-abdutora", "Cadeira Abdutora", "3x15"],
      ["elevacao-pelvica", "Elevação Pélvica", "3x12"],
      ["panturrilha-em-pe", "Panturrilha em pé", "3x20"],
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
    label: "Superior",
    short: "Treino C",
    note: "",
    exercises: [
      ["puxada-frontal", "Puxada frontal", "3x12"],
      ["remada-baixa", "Remada baixa", "3x12"],
      ["supino-maquina", "Supino máquina", "3x12"],
      ["desenvolvimento-maquina", "Desenvolvimento máquina", "3x12"],
      ["elevacao-lateral", "Elevação lateral", "3x15"],
      ["triceps-corda", "Tríceps corda", "3x15"],
      ["rosca-direta", "Rosca direta", "3x12"],
      ["abdominal-crunch", "Abdominal Crunch", "3x20"]
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
    label: "Glúteos, Posterior e Core",
    short: "Treino E",
    note: "",
    exercises: [
      ["stiff-halteres", "Stiff com halteres", "3x12"],
      ["mesa-flexora", "Mesa Flexora", "3x15"],
      ["cadeira-flexora", "Cadeira Flexora", "3x15"],
      ["elevacao-pelvica", "Elevação Pélvica", "3x12"],
      ["abducao-quadril-maquina", "Abdução de quadril máquina", "3x15"],
      ["step-up-banco", "Step-up no banco", "3x10 cada perna"],
      ["prancha-lateral", "Prancha lateral", "3x30 segundos"]
    ]
  }
].map((workout) => ({
  ...workout,
  exercises: workout.exercises.map(([id, name, target]) => {
    const parsed = parseTarget(target);
    return { id, name, target, ...parsed };
  })
}));

const profiles = {
  vinicius: {
    id: "vinicius",
    name: "Vinicius",
    defaultWorkout: "treino-e",
    meals: viniciusMeals,
    workouts: viniciusWorkouts,
    files: [
      { label: "Dieta", name: "Dieta_Vinicius.pdf", href: "/Arquivos/Dieta_Vinicius.pdf" },
      { label: "Treino", name: "Treino_vinicius.pdf", href: "/Arquivos/Treino_vinicius.pdf" }
    ]
  },
  leticia: {
    id: "leticia",
    name: "Letícia",
    defaultWorkout: "treino-a",
    meals: leticiaMeals,
    workouts: leticiaWorkouts,
    files: [
      { label: "Dieta", name: "Dieta_leticia.pdf", href: "/Arquivos/Dieta_leticia.pdf" },
      { label: "Treino", name: "Treino_Leticia.pdf", href: "/Arquivos/Treino_Leticia.pdf" }
    ]
  }
};

const today = formatDateToIso(new Date());
const localKeys = {
  activeProfile: "fitness:active-profile",
  notes: (profileId) => `fitness:${profileId}:workout-notes`,
  checks: (profileId, date) => `fitness:${profileId}:daily-checks:${date}`,
  workout: (profileId) => `fitness:${profileId}:selected-workout`,
  workoutForDate: (profileId, date) => `fitness:${profileId}:selected-workout:${date}`
};
const dailyLogPrefix = (profileId) => `fitness:${profileId}:daily-exercise-logs:`;

const supabaseClient = createSupabaseClient();
let activeProfileId = "";
let activeProfile = null;
let profileId = activeProfile?.id || "vinicius";
let meals = activeProfile?.meals || [];
let workouts = activeProfile?.workouts || [];
let notesCache = {};
let checksCache = {};
let dailyLogsCache = {};
let selectedDate = today;
let currentWorkoutId = activeProfile ? localStorage.getItem(localKeys.workout(profileId)) || activeProfile.defaultWorkout : "treino-e";

function parseTarget(target) {
  const match = target.match(/^(\d+)x(.+)$/i);
  if (!match) return { series: "-", reps: target };
  return { series: match[1], reps: match[2].trim() };
}

function formatDateToIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIsoDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function createSupabaseClient() {
  const url = window.FITNESS_CONFIG?.SUPABASE_URL;
  const key = window.FITNESS_CONFIG?.SUPABASE_ANON_KEY;
  if (!url || !key || !window.supabase) return null;
  return window.supabase.createClient(normalizeSupabaseUrl(url), key);
}

function normalizeSupabaseUrl(url) {
  try {
    const parsed = new URL(url);
    parsed.pathname = parsed.pathname.replace(/\/rest\/v1\/?$/, "");
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return url;
  }
}

async function init() {
  hydrateIcons();
  renderDate();
  bindNavigation();
  bindCalendar();
  bindChartModal();
  bindProfileSelection();

  if (!activeProfile) {
    showProfileSelector();
    setSyncStatus(supabaseClient ? "Supabase" : "Local");
    return;
  }

  await loadActiveProfile();
  showMainView("plan");
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
  const suffix = selectedDate === today ? "Hoje, " : "";
  document.getElementById("todayLabel").textContent = `${suffix}${formatter.format(parseIsoDate(selectedDate))}`;
  getDateInputs().forEach((input) => {
    input.value = selectedDate;
  });
}

function setSyncStatus(text) {
  document.getElementById("syncStatus").textContent = text;
}

function bindNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeProfile) return;
      showMainView(button.dataset.view);
      if (button.dataset.view === "training") renderWorkout(currentWorkoutId);
    });
  });

  document.getElementById("switchProfile").addEventListener("click", () => {
    resetToProfileSelector();
  });

  document.getElementById("openProfileSelector").addEventListener("click", () => {
    resetToProfileSelector();
  });

  document.getElementById("resetMeals").addEventListener("click", async () => {
    checksCache = {};
    localStorage.removeItem(localKeys.checks(profileId, selectedDate));
    if (supabaseClient) {
      await supabaseClient.from("daily_checks").delete().eq("profile_id", profileId).eq("check_date", selectedDate);
    }
    renderMeals();
    renderWorkout(currentWorkoutId);
  });
}

function bindProfileSelection() {
  document.querySelectorAll("[data-profile-select]").forEach((button) => {
    button.addEventListener("click", async () => {
      await activateProfile(button.dataset.profileSelect);
      showMainView("plan");
    });
  });
}

async function activateProfile(profileKey) {
  activeProfile = profiles[profileKey] || profiles.vinicius;
  activeProfileId = activeProfile.id;
  profileId = activeProfile.id;
  meals = activeProfile.meals;
  workouts = activeProfile.workouts;
  localStorage.setItem(localKeys.activeProfile, profileId);
  currentWorkoutId = localStorage.getItem(localKeys.workout(profileId)) || activeProfile.defaultWorkout;
  await loadActiveProfile();
}

async function loadActiveProfile() {
  setSyncStatus("Carregando");
  notesCache = await loadNotes();
  currentWorkoutId = await loadWorkoutForDate(selectedDate);
  checksCache = await loadChecks(selectedDate);
  dailyLogsCache = await loadDailyLogs(selectedDate);
  renderDate();
  renderMeals();
  renderWorkoutSelector();
  renderWorkout(currentWorkoutId);
  renderFiles();
  setSyncStatus(supabaseClient ? "Supabase" : "Local");
}

function showProfileSelector() {
  document.body.classList.add("is-profile-selecting");
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  document.querySelectorAll(".nav-item").forEach((tab) => tab.classList.remove("is-active"));
  document.getElementById("profileView").classList.add("is-active");
}

function resetToProfileSelector() {
  localStorage.removeItem(localKeys.activeProfile);
  activeProfileId = "";
  activeProfile = null;
  showProfileSelector();
}

function showMainView(viewName) {
  document.body.classList.remove("is-profile-selecting");
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  document.querySelectorAll(".nav-item").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewName));
  document.getElementById(`${viewName}View`).classList.add("is-active");
}

function bindCalendar() {
  getDateInputs().forEach((input) => {
    input.value = selectedDate;

    input.addEventListener("change", async () => {
      if (input.value) await selectDate(input.value);
    });

    input.addEventListener("keydown", async (event) => {
      if (event.key === "Enter" && input.value) {
        await selectDate(input.value);
      }
    });
  });

  document.getElementById("openCalendar").addEventListener("click", () => openNativeDatePicker(document.getElementById("historyDateInput")));
}

function getDateInputs() {
  return [...document.querySelectorAll(".native-date-input")];
}

function openNativeDatePicker(input) {
  input.value = selectedDate;
  if (typeof input.showPicker === "function") {
    input.showPicker();
    return;
  }
  input.focus();
  input.click();
}

async function selectDate(date) {
  selectedDate = date;
  if (!activeProfile) {
    renderDate();
    return;
  }
  setSyncStatus("Carregando");
  renderDate();
  currentWorkoutId = await loadWorkoutForDate(selectedDate);
  checksCache = await loadChecks(selectedDate);
  dailyLogsCache = await loadDailyLogs(selectedDate);
  renderMeals();
  renderWorkoutSelector();
  renderWorkout(currentWorkoutId);
  setSyncStatus(supabaseClient ? "Supabase" : "Local");
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
        </div>
      </div>
    </article>
  `).join("");
  hydrateIcons(grid);

  const dietDone = meals.filter((meal) => checksCache[meal.id]).length;
  const workout = workouts.find((item) => item.id === currentWorkoutId) || workouts[0];
  const workoutDone = workout.exercises.filter((exercise) => checksCache[exercise.id]).length;
  const selectedDay = selectedDate === today ? "hoje" : selectedDate.split("-").reverse().join("/");
  document.getElementById("dailyTotal").innerHTML = `
    <span data-icon="flame"></span>
    <div><strong>${dietDone}/${meals.length}</strong><small>dieta</small></div>
    <div><strong>${workoutDone}/${workout.exercises.length}</strong><small>treino</small></div>
    <div><strong>${workout.short}</strong><small>tipo</small></div>
    <div><strong>${selectedDay}</strong><small>dia</small></div>
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
  document.querySelectorAll(".workout-select").forEach((select) => {
    select.innerHTML = workouts.map((workout) => `<option value="${workout.id}">${workout.label}</option>`).join("");
    select.value = currentWorkoutId;
    if (select.dataset.bound === "true") return;
    select.dataset.bound = "true";
    select.addEventListener("change", () => {
      currentWorkoutId = select.value;
      localStorage.setItem(localKeys.workout(profileId), currentWorkoutId);
      saveWorkoutForDate(currentWorkoutId);
      renderWorkout(currentWorkoutId);
      renderMeals();
    });
  });
}

function renderFiles() {
  const grid = document.getElementById("fileGrid");
  grid.innerHTML = activeProfile.files.map((file) => `
    <a class="file-card" href="${file.href}" target="_blank" rel="noreferrer">
      <span data-icon="file"></span>
      <strong>${file.label}</strong>
      <small>${file.name}</small>
    </a>
  `).join("");
  hydrateIcons(grid);
}

function renderWorkout(workoutId) {
  const workout = workouts.find((item) => item.id === workoutId) || workouts[0];
  currentWorkoutId = workout.id;
  document.querySelectorAll(".workout-select").forEach((selector) => {
    selector.value = workout.id;
  });

  document.getElementById("exerciseTable").innerHTML = workout.exercises.map((exercise, index) => {
    const saved = notesCache[exercise.id] || {};
    const daily = dailyLogsCache[exercise.id] || {};
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${exercise.name}</td>
        <td>${exercise.series}</td>
        <td>${exercise.reps}</td>
        <td><input class="table-input" inputmode="decimal" data-note="${exercise.id}" data-field="weight" value="${daily.weight || ""}" placeholder="--" /></td>
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
    const daily = dailyLogsCache[exercise.id] || {};
    return `
      <article class="exercise-card">
        <div class="exercise-title">
          <div>
            <h3>${exercise.name}</h3>
            <p>${exercise.target}</p>
          </div>
          <div class="exercise-actions">
            <button class="chart-button" type="button" data-chart-exercise="${exercise.id}" aria-label="Ver evolução de ${exercise.name}" title="Ver evolução">
              <span data-icon="chart"></span>
            </button>
            <button class="done-button ${checksCache[exercise.id] ? "is-done" : ""}" type="button" data-exercise-done="${exercise.id}">
              ${checksCache[exercise.id] ? "Feito" : "Não feito"}
            </button>
          </div>
        </div>
        <div class="exercise-fields">
          <label>
            <span>Peso</span>
            <input inputmode="decimal" data-note="${exercise.id}" data-field="weight" value="${daily.weight || ""}" placeholder="kg" />
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
  hydrateIcons(document.getElementById("exerciseList"));
}

function bindWorkoutFields() {
  document.querySelectorAll("[data-note]").forEach((field) => {
    field.addEventListener("change", () => saveExerciseField(field.dataset.note, field.dataset.field, field.value));
    field.addEventListener("blur", () => saveExerciseField(field.dataset.note, field.dataset.field, field.value));
  });

  document.querySelectorAll("[data-exercise-done]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.exerciseDone;
      checksCache[id] = !checksCache[id];
      await saveWorkoutForDate(currentWorkoutId);
      await saveCheck(id, checksCache[id]);
      renderWorkout(currentWorkoutId);
      renderMeals();
    });
  });

  document.querySelectorAll("[data-chart-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      openExerciseChart(button.dataset.chartExercise);
    });
  });
}

function bindChartModal() {
  document.querySelectorAll("[data-chart-close]").forEach((button) => {
    button.addEventListener("click", closeExerciseChart);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeExerciseChart();
  });
}

async function loadNotes() {
  const local = JSON.parse(localStorage.getItem(localKeys.notes(profileId)) || "{}");
  if (!supabaseClient) return local;
  const { data, error } = await supabaseClient
    .from("workout_exercise_notes")
    .select("exercise_id, weight, machine, notes")
    .eq("profile_id", profileId);
  if (error) return local;
  return Object.fromEntries(data.map((item) => [item.exercise_id, item]));
}

async function loadChecks(date = selectedDate) {
  const local = JSON.parse(localStorage.getItem(localKeys.checks(profileId, date)) || "{}");
  if (!supabaseClient) return local;
  const { data, error } = await supabaseClient
    .from("daily_checks")
    .select("item_id, completed")
    .eq("profile_id", profileId)
    .eq("check_date", date);
  if (error) return local;
  return Object.fromEntries(data.map((item) => [item.item_id, item.completed]));
}

async function loadWorkoutForDate(date = selectedDate) {
  const fallback = localStorage.getItem(localKeys.workoutForDate(profileId, date)) || localStorage.getItem(localKeys.workout(profileId)) || activeProfile?.defaultWorkout || "treino-e";
  if (!supabaseClient) return fallback;
  const { data, error } = await supabaseClient
    .from("daily_workouts")
    .select("workout_id")
    .eq("profile_id", profileId)
    .eq("workout_date", date)
    .maybeSingle();
  if (error || !data?.workout_id) return fallback;
  return data.workout_id;
}

async function loadDailyLogs(date = selectedDate) {
  const local = JSON.parse(localStorage.getItem(`${dailyLogPrefix(profileId)}${date}`) || "{}");
  if (!supabaseClient) return local;
  const { data, error } = await supabaseClient
    .from("daily_exercise_logs")
    .select("exercise_id, weight")
    .eq("profile_id", profileId)
    .eq("log_date", date);
  if (error) return local;
  return Object.fromEntries(data.map((item) => [item.exercise_id, { weight: item.weight || "" }]));
}

async function saveExerciseField(exerciseId, field, value) {
  if (field === "weight") {
    await saveDailyExerciseWeight(exerciseId, value);
    return;
  }

  notesCache[exerciseId] = { ...(notesCache[exerciseId] || {}), [field]: value };
  localStorage.setItem(localKeys.notes(profileId), JSON.stringify(notesCache));

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

async function saveDailyExerciseWeight(exerciseId, weight) {
  dailyLogsCache[exerciseId] = { ...(dailyLogsCache[exerciseId] || {}), weight };
  localStorage.setItem(`${dailyLogPrefix(profileId)}${selectedDate}`, JSON.stringify(dailyLogsCache));
  await saveWorkoutForDate(currentWorkoutId);

  document.querySelectorAll(`[data-note="${exerciseId}"][data-field="weight"]`).forEach((input) => {
    if (input.value !== weight) input.value = weight;
  });

  if (!supabaseClient) return;
  await supabaseClient.from("daily_exercise_logs").upsert({
    profile_id: profileId,
    log_date: selectedDate,
    exercise_id: exerciseId,
    weight,
    updated_at: new Date().toISOString()
  });
}

async function saveCheck(itemId, completed) {
  localStorage.setItem(localKeys.checks(profileId, selectedDate), JSON.stringify(checksCache));
  if (!supabaseClient) return;
  await supabaseClient.from("daily_checks").upsert({
    profile_id: profileId,
    check_date: selectedDate,
    item_id: itemId,
    completed,
    updated_at: new Date().toISOString()
  });
}

async function saveWorkoutForDate(workoutId) {
  localStorage.setItem(localKeys.workoutForDate(profileId, selectedDate), workoutId);
  if (!supabaseClient) return;
  await supabaseClient.from("daily_workouts").upsert({
    profile_id: profileId,
    workout_date: selectedDate,
    workout_id: workoutId,
    updated_at: new Date().toISOString()
  });
}

async function openExerciseChart(exerciseId) {
  const exercise = findExercise(exerciseId);
  if (!exercise) return;

  const modal = document.getElementById("chartModal");
  document.getElementById("chartTitle").textContent = exercise.name;
  document.getElementById("chartBody").innerHTML = `<p class="chart-empty">Carregando evolução...</p>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  const history = await loadExerciseHistory(exerciseId);
  document.getElementById("chartBody").innerHTML = renderChart(history);
}

function closeExerciseChart() {
  const modal = document.getElementById("chartModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function findExercise(exerciseId) {
  return workouts.flatMap((workout) => workout.exercises).find((exercise) => exercise.id === exerciseId);
}

async function loadExerciseHistory(exerciseId) {
  const localHistory = loadLocalExerciseHistory(exerciseId);
  if (!supabaseClient) return localHistory;

  const { data, error } = await supabaseClient
    .from("daily_exercise_logs")
    .select("log_date, weight")
    .eq("profile_id", profileId)
    .eq("exercise_id", exerciseId)
    .order("log_date", { ascending: true });

  if (error) return localHistory;
  return data
    .map((item) => ({ date: item.log_date, weight: normalizeWeight(item.weight) }))
    .filter((item) => Number.isFinite(item.weight));
}

function loadLocalExerciseHistory(exerciseId) {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith(dailyLogPrefix(profileId)))
    .map((key) => {
      const date = key.replace(dailyLogPrefix(profileId), "");
      const logs = JSON.parse(localStorage.getItem(key) || "{}");
      return { date, weight: normalizeWeight(logs[exerciseId]?.weight) };
    })
    .filter((item) => Number.isFinite(item.weight))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeWeight(value) {
  if (!value) return NaN;
  return Number(String(value).replace(",", ".").replace(/[^\d.]/g, ""));
}

function renderChart(history) {
  if (!history.length) {
    return `<p class="chart-empty">Ainda não existe carga registrada para este exercício.</p>`;
  }

  const width = 640;
  const height = 300;
  const padding = 42;
  const weights = history.map((item) => item.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const range = Math.max(max - min, 1);
  const points = history.map((item, index) => {
    const x = history.length === 1 ? width / 2 : padding + (index * (width - padding * 2)) / (history.length - 1);
    const y = height - padding - ((item.weight - min) / range) * (height - padding * 2);
    return { ...item, x, y };
  });
  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");
  const first = history[0];
  const last = history[history.length - 1];
  const delta = last.weight - first.weight;
  const deltaText = `${delta >= 0 ? "+" : ""}${formatWeight(delta)} kg`;

  return `
    <div class="chart-stats">
      <div><strong>${formatWeight(last.weight)} kg</strong><span>última carga</span></div>
      <div><strong>${formatWeight(max)} kg</strong><span>maior carga</span></div>
      <div><strong>${deltaText}</strong><span>evolução</span></div>
    </div>
    <div class="chart-svg-wrap">
      <svg class="progress-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Gráfico de evolução de carga">
        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" />
        <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" />
        <polyline points="${polyline}" />
        ${points.map((point) => `
          <g>
            <circle cx="${point.x}" cy="${point.y}" r="7" />
            <text x="${point.x}" y="${point.y - 14}" text-anchor="middle">${formatWeight(point.weight)}</text>
          </g>
        `).join("")}
      </svg>
    </div>
    <div class="history-list">
      ${history.map((item) => `
        <div>
          <span>${formatDisplayDate(item.date)}</span>
          <strong>${formatWeight(item.weight)} kg</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function formatWeight(value) {
  return Number(value.toFixed(1)).toLocaleString("pt-BR");
}

function formatDisplayDate(date) {
  return date.split("-").reverse().join("/");
}

init();
