const icons = {
  apple: '<svg viewBox="0 0 24 24"><path d="M12 6c1.7-2.6 4.2-2.9 5.5-2.5-.1 1.7-.9 3.1-2.2 4.1"/><path d="M12.2 7.6c1.1-.7 2.5-.8 3.8-.3 2.9 1.1 3.4 5.1 1.2 9-1.2 2.2-2.4 3.7-3.8 3.7-.9 0-1.3-.5-2.5-.5s-1.7.5-2.6.5c-1.4 0-2.6-1.5-3.8-3.7-2.1-3.9-1.7-7.8 1.2-9 1.3-.5 2.7-.4 3.8.3.7.4 1.9.4 2.7 0Z"/></svg>',
  bowl: '<svg viewBox="0 0 24 24"><path d="M4 12h16c-.4 4.5-3.6 7-8 7s-7.6-2.5-8-7Z"/><path d="M3 12h18"/><path d="M7 10c0-1.5 1.5-2.3 3-2.3s3 .8 3 2.3"/><path d="M11 8c.5-1.8 2.1-2.7 4-2.2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M7 2v4M17 2v4M4 8h16M5 4h14a1 1 0 0 1 1 1v15H4V5a1 1 0 0 1 1-1Z"/><path d="M8 12h2M12 12h2M16 12h2M8 16h2M12 16h2M16 16h2"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/><path d="M3 20h18"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24"><path d="M9 4h6l1 2h3v15H5V6h3l1-2Z"/><path d="M9 10h6M9 14h6M9 18h4"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24"><path d="M7 7v10M17 7v10M3 9v6M21 9v6M3 12h18"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 21c-4 0-7-2.8-7-6.7 0-2.9 1.8-5.1 4-7.3.1 2.2 1.2 3.5 2.7 4.4C11.5 8 13.1 5.1 16 3c.4 3.8 3 5.7 3 10.8 0 4.2-3 7.2-7 7.2Z"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3V11Z"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="m13 7 4 4"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/><path d="M4 12H2M22 12h-2M12 4V2M12 22v-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/></svg>',
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
      { label: "Dieta", name: "Dieta_Vinicius.pdf", href: "./Arquivos/Dieta_Vinicius.pdf" },
      { label: "Treino", name: "Treino_vinicius.pdf", href: "./Arquivos/Treino_vinicius.pdf" }
    ]
  },
  leticia: {
    id: "leticia",
    name: "Letícia",
    defaultWorkout: "treino-a",
    meals: leticiaMeals,
    workouts: leticiaWorkouts,
    files: [
      { label: "Dieta", name: "Dieta_leticia.pdf", href: "./Arquivos/Dieta_leticia.pdf" },
      { label: "Treino", name: "Treino_Leticia.pdf", href: "./Arquivos/Treino_Leticia.pdf" }
    ]
  }
};

const today = formatDateToIso(new Date());
const localKeys = {
  activeProfile: "fitness:active-profile",
  notes: (profileId) => `fitness:${profileId}:workout-notes`,
  checks: (profileId, date) => `fitness:${profileId}:daily-checks:${date}`,
  workout: (profileId) => `fitness:${profileId}:selected-workout`,
  workoutForDate: (profileId, date) => `fitness:${profileId}:selected-workout:${date}`,
  customNames: (profileId) => `fitness:${profileId}:custom-names`,
  workoutPlans: (profileId) => `fitness:${profileId}:workout-plans`
};
const dailyLogPrefix = (profileId) => `fitness:${profileId}:daily-exercise-logs:`;

const supabaseClient = createSupabaseClient();
const initialProfile = profiles[getRequestedProfileId()] || profiles[localStorage.getItem(localKeys.activeProfile)] || null;
let activeProfileId = initialProfile?.id || "";
let activeProfile = initialProfile;
let profileId = activeProfile?.id || "vinicius";
let meals = activeProfile?.meals || [];
let workouts = activeProfile?.workouts || [];
let workoutPlans = [];
let workoutSessions = {};
const expandedCharts = new Set();
let historicalSession = null;
let activeWorkoutPlanId = "";
let viewedWorkoutPlanId = "";
let planEditorDraft = null;
let workoutPlansNeedBootstrapSync = false;
let workoutPlansUpdatedAt = "";
let notesCache = {};
let checksCache = {};
let dailyLogsCache = {};
let latestWeightsCache = {};
let settingsSyncQueue = Promise.resolve();
let workoutCompletionCache = {};
let timelineHistoryCache = {};
let customWorkoutNames = {};
let customExerciseNames = {};
const workoutNameSaveTimers = {};
let editingExerciseId = "";
let selectedDate = today;
let currentWorkoutId = activeProfile ? localStorage.getItem(localKeys.workout(profileId)) || activeProfile.defaultWorkout : "treino-e";

function parseTarget(target) {
  const match = target.match(/^(\d+)x(.+)$/i);
  if (!match) return { series: "-", reps: target };
  return { series: match[1], reps: match[2].trim() };
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getWorkoutName(workout) {
  if (historicalSession?.workout.id === workout.id) return workout.short;
  return customWorkoutNames[workout.id] || workout.short;
}

function getWorkoutLabel(workout) {
  if (historicalSession?.workout.id === workout.id) return workout.label;
  return customWorkoutNames[workout.id] || workout.label;
}

function getExerciseName(exercise) {
  if (historicalSession?.workout.exercises.some((item) => item.id === exercise.id)) return exercise.name;
  return customExerciseNames[exercise.id] || exercise.name;
}

function getStrengthWorkouts() {
  return workouts;
}

function getWorkoutCompletionKey(workoutId) {
  return `workout-done:${workoutId}`;
}

function getLocalChecksPrefix() {
  return `fitness:${profileId}:daily-checks:`;
}

function formatShortDate(date) {
  if (!date) return "Nunca feito";
  return date.split("-").reverse().join("/");
}

function formatPlanDate(date) {
  if (!date) return "data não informada";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(date));
}

function getRequestedProfileId() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("perfil") || params.get("profile");
  if (profiles[requested]) return requested;

  const pathProfile = window.location.pathname
    .split("/")
    .pop()
    .replace(/\.html$/, "")
    .toLowerCase();
  return profiles[pathProfile] ? pathProfile : "";
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
  // Local previews never write to the production database.
  const host = location.hostname;
  if (["localhost", "127.0.0.1", "[::1]", ""].includes(host) || /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host) || host.endsWith(".local")) return null;
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
  bindPlanEditor();
  bindProfileSelection();
  window.addEventListener("focus", refreshWorkoutPlansFromRemote);

  if (!activeProfile) {
    showProfileSelector();
    setSyncStatus(supabaseClient ? "Supabase" : "Local");
    return;
  }

  await loadActiveProfile();
  showTrainingEntry();
}

function syncInBackground(promise) {
  Promise.resolve(promise).then((result) => { if (result?.error) throw result.error; }).catch((error) => {
    console.warn("Falha na sincronização; os dados continuam salvos neste dispositivo.", error);
    setSyncStatus("Local (sincronização pendente)");
  });
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
    button.addEventListener("click", async () => {
      if (!activeProfile) return;
      if (button.dataset.view === "training") {
        showTrainingEntry();
        return;
      }
      showMainView(button.dataset.view);
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
    Object.values(workoutSessions[selectedDate] || {}).forEach((session) => {
      session.completed = false; session.checks = Object.fromEntries(session.workout.exercises.map((e) => [e.id, false]));
    });
    persistWorkoutPlans();
    workoutCompletionCache = {};
    localStorage.removeItem(localKeys.checks(profileId, selectedDate));
    renderMeals();
    renderWorkout(currentWorkoutId);
    if (supabaseClient) {
      const { error } = await supabaseClient.from("daily_checks").delete().eq("profile_id", profileId).eq("check_date", selectedDate);
      if (error) { setSyncStatus("Local (sincronização pendente)"); return; }
    }
    workoutCompletionCache = await loadWorkoutCompletions();
    renderWorkoutTimeline(); renderWorkoutSelector();
  });
}

function bindProfileSelection() {
  document.querySelectorAll("[data-profile-select]").forEach((button) => {
    button.addEventListener("click", async () => {
      await activateProfile(button.dataset.profileSelect);
      showTrainingEntry();
    });
  });
}

async function activateProfile(profileKey) {
  expandedCharts.clear();
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
  await loadWorkoutPlans();
  const [notes, , workoutId, checks, dailyLogs, latestWeights, completions] = await Promise.all([
    loadNotes(),
    loadCustomNames(),
    loadWorkoutForDate(selectedDate),
    loadChecks(selectedDate),
    loadDailyLogs(selectedDate),
    loadLatestWeights(),
    loadWorkoutCompletions()
  ]);
  notesCache = notes;
  currentWorkoutId = workoutId;
  checksCache = checks;
  dailyLogsCache = dailyLogs;
  latestWeightsCache = latestWeights;
  workoutCompletionCache = completions;
  applyQuickEditsToWorkoutPlans();
  const savedPlan = findPlanForWorkout(currentWorkoutId);
  if (savedPlan && (!savedPlan.deletedAt || workoutSessions[selectedDate]?.[currentWorkoutId])) applyViewedPlan(savedPlan.id);
  else if (savedPlan?.deletedAt) applyViewedPlan(activeWorkoutPlanId);
  restoreSession(currentWorkoutId);
  if (workoutPlansNeedBootstrapSync) {
    persistWorkoutPlans();
    workoutPlansNeedBootstrapSync = false;
  }
  renderDate();
  renderMeals();
  renderWorkoutSelector();
  renderWorkoutPlanSelector();
  renderWorkoutTimeline();
  renderWorkout(currentWorkoutId);
  renderFiles();
  renderSettings();
  setSyncStatus(supabaseClient ? "Supabase" : "Local");
}

function applyQuickEditsToWorkoutPlans() {
  workoutPlans.forEach((plan) => {
    plan.workouts.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        if (customExerciseNames[exercise.id]) exercise.name = customExerciseNames[exercise.id];
        if (!plan.deletedAt && notesCache[exercise.id]?.notes) exercise.defaultNotes = notesCache[exercise.id].notes;
      });
    });
  });
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

function showTrainingEntry() {
  if (!workouts.some((workout) => workout.id === currentWorkoutId)) currentWorkoutId = getNextWorkoutId();
  renderWorkoutSelector();
  renderWorkout(currentWorkoutId);
  renderMeals();
  showMainView("training");
}

function createId(prefix) {
  const suffix = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${suffix}`;
}

function cloneDefaultWorkouts() {
  return activeProfile.workouts.map((workout) => ({
    ...workout,
    exercises: workout.exercises.map((exercise) => ({ ...exercise }))
  }));
}

function hasLocalWorkoutCustomization(saved) {
  if (!Array.isArray(saved?.plans)) return false;
  if (saved.schemaVersion >= 2 || Object.keys(saved.sessions || {}).length) return true;
  if (!saved.plans.length) return false;
  if (saved.plans.length !== 1) return true;
  const localWorkouts = saved.plans[0].workouts || [];
  const defaults = activeProfile.workouts;
  if (localWorkouts.length !== defaults.length) return true;
  return localWorkouts.some((workout, index) => {
    const original = defaults[index];
    if (!original || workout.id !== original.id || workout.short !== original.short || workout.label !== original.label) return true;
    if ((workout.exercises || []).length !== original.exercises.length) return true;
    return workout.exercises.some((exercise, exerciseIndex) => {
      const originalExercise = original.exercises[exerciseIndex];
      return !originalExercise || exercise.id !== originalExercise.id || exercise.name !== originalExercise.name || exercise.target !== originalExercise.target;
    });
  });
}

function getActivePlan() {
  return workoutPlans.find((plan) => plan.id === activeWorkoutPlanId && !plan.deletedAt) || livePlans().at(-1);
}

function getViewedPlan() {
  return workoutPlans.find((plan) => plan.id === viewedWorkoutPlanId) || getActivePlan();
}

function applyViewedPlan(planId) {
  const plan = workoutPlans.find((item) => item.id === planId) || getActivePlan();
  if (!plan) { workouts = []; viewedWorkoutPlanId = ""; currentWorkoutId = ""; return; }
  historicalSession = null;
  viewedWorkoutPlanId = plan.id;
  workouts = plan.workouts;
  if (!workouts.some((workout) => workout.id === currentWorkoutId)) currentWorkoutId = workouts[0]?.id || "";
}

async function loadWorkoutPlans() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(localKeys.workoutPlans(profileId)) || "null");
    const backupKey = `${localKeys.workoutPlans(profileId)}:backup-v1`;
    if (saved && !saved.schemaVersion && !localStorage.getItem(backupKey)) localStorage.setItem(backupKey, JSON.stringify(saved));
  } catch {
    saved = null;
  }

  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("profile_settings")
      .select("workout_names, workout_plans")
      .eq("profile_id", profileId)
      .maybeSingle();
    const remotePlans = data?.workout_plans || data?.workout_names?.__workout_plans;
    if (!error && Array.isArray(remotePlans?.plans) && (!saved?.updatedAt || remotePlans.updatedAt >= saved.updatedAt)) {
      saved = remotePlans;
    } else if (!error && hasLocalWorkoutCustomization(saved)) {
      // A customização local deve inaugurar a cópia compartilhada; o plano
      // padrão isolado de outro aparelho não pode sobrescrevê-la.
      workoutPlansNeedBootstrapSync = true;
    }
  }

  if (Array.isArray(saved?.plans)) {
    workoutPlans = saved.plans;
    workoutSessions = saved.sessions || {};
    activeWorkoutPlanId = saved.activePlanId || livePlans().at(-1)?.id || "";
    workoutPlansUpdatedAt = saved.updatedAt || "";
  } else {
    const initialPlan = {
      id: createId("plano"),
      name: "Treino original",
      createdAt: new Date().toISOString(),
      workouts: cloneDefaultWorkouts()
    };
    workoutPlans = [initialPlan];
    workoutSessions = {};
    activeWorkoutPlanId = initialPlan.id;
    workoutPlansUpdatedAt = new Date().toISOString();
    persistWorkoutPlans(false);
  }
  viewedWorkoutPlanId = activeWorkoutPlanId;
  applyViewedPlan(viewedWorkoutPlanId);
  localStorage.setItem(localKeys.workoutPlans(profileId), JSON.stringify({
    activePlanId: activeWorkoutPlanId,
    plans: workoutPlans,
    schemaVersion: 2,
    sessions: workoutSessions,
    updatedAt: workoutPlansUpdatedAt || new Date().toISOString()
  }));
}

function persistWorkoutPlans(syncRemote = true) {
  workoutPlansUpdatedAt = new Date().toISOString();
  const payload = {
    activePlanId: activeWorkoutPlanId,
    plans: workoutPlans,
    schemaVersion: 2,
    sessions: workoutSessions,
    updatedAt: workoutPlansUpdatedAt
  };
  localStorage.setItem(localKeys.workoutPlans(profileId), JSON.stringify(payload));
  if (supabaseClient && syncRemote) syncInBackground(syncProfileSettings(payload));
}

async function refreshWorkoutPlansFromRemote() {
  if (!supabaseClient || !activeProfile || planEditorDraft) return;
  const { data, error } = await supabaseClient
    .from("profile_settings")
    .select("workout_names, workout_plans")
    .eq("profile_id", profileId)
    .maybeSingle();
  const remotePlans = data?.workout_plans || data?.workout_names?.__workout_plans;
  if (error || !Array.isArray(remotePlans?.plans) || !remotePlans.updatedAt || remotePlans.updatedAt <= workoutPlansUpdatedAt) return;

  workoutPlans = remotePlans.plans;
  workoutSessions = remotePlans.sessions || {};
  activeWorkoutPlanId = remotePlans.activePlanId || livePlans().at(-1)?.id || "";
  workoutPlansUpdatedAt = remotePlans.updatedAt;
  applyViewedPlan(getViewedPlan()?.deletedAt && !workoutSessions[selectedDate]?.[currentWorkoutId] ? activeWorkoutPlanId : viewedWorkoutPlanId);
  currentWorkoutId = workouts.some((workout) => workout.id === currentWorkoutId) ? currentWorkoutId : workouts[0]?.id || "";
  restoreSession(currentWorkoutId);
  localStorage.setItem(localKeys.workoutPlans(profileId), JSON.stringify(remotePlans));
  renderWorkoutPlanSelector();
  renderWorkoutSelector();
  renderWorkout(currentWorkoutId);
  renderMeals();
  renderSettings();
}

function renderWorkoutPlanSelector() {
  const plan = getViewedPlan();
  const selector = document.getElementById("trainingPlanSelect");
  selector.innerHTML = '<option value="" disabled>Selecione um programa</option>' + livePlans().map((item) =>
    `<option value="${item.id}">${escapeHtml(item.name)}${item.id === activeWorkoutPlanId ? " · vigente" : ""}</option>`).join("");
  selector.value = plan?.deletedAt ? "" : plan?.id || "";
  selector.onchange = () => {
    applyViewedPlan(selector.value);
    renderWorkoutPlanSelector(); renderWorkoutSelector(); renderWorkout(currentWorkoutId); renderMeals();
  };
  document.getElementById("currentPlanText").textContent = "Editar programa";
  document.getElementById("editWorkoutPlan").disabled = !plan || !!plan.deletedAt;
  document.getElementById("deleteWorkoutPlan").disabled = !plan || !!plan.deletedAt;
  document.getElementById("planContext").textContent = historicalSession
    ? `Registro de ${formatDisplayDate(selectedDate)} · ${historicalSession.planName}${plan?.deletedAt ? " · programa excluído" : ""}${historicalSession.reconstructed ? " · ficha reconstruída dos registros antigos" : ""}`
    : plan ? `Criado em ${formatPlanDate(plan.createdAt)} · segure um dia para reordenar`
    : "Crie ou importe um programa para começar.";
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
  const [workoutId, checks, dailyLogs, completions] = await Promise.all([
    loadWorkoutForDate(selectedDate),
    loadChecks(selectedDate),
    loadDailyLogs(selectedDate),
    loadWorkoutCompletions()
  ]);
  historicalSession = null;
  applyViewedPlan(getViewedPlan()?.deletedAt ? activeWorkoutPlanId : viewedWorkoutPlanId);
  currentWorkoutId = workoutId;
  const historicalPlan = findPlanForWorkout(workoutId);
  if (historicalPlan && (!historicalPlan.deletedAt || workoutSessions[selectedDate]?.[workoutId])) applyViewedPlan(historicalPlan.id);
  checksCache = checks;
  dailyLogsCache = dailyLogs;
  workoutCompletionCache = completions;
  restoreSession(workoutId);
  renderMeals();
  renderWorkoutSelector();
  renderWorkoutPlanSelector();
  renderWorkoutTimeline();
  renderWorkout(currentWorkoutId);
  setSyncStatus(supabaseClient ? "Supabase" : "Local");
}

function getTimelineDates() {
  return Array.from({ length: 30 }, (_, index) => {
    const date = parseIsoDate(today);
    date.setDate(date.getDate() - (29 - index));
    return formatDateToIso(date);
  });
}

function findPlanForWorkout(workoutId) {
  return workoutPlans.find((plan) => plan.workouts.some((workout) => workout.id === workoutId));
}

function getTimelineWorkoutName(workoutId) {
  const session = workoutSessions[selectedDate]?.[workoutId];
  if (session) return session.workout.short;
  for (const plan of workoutPlans) {
    const workout = plan.workouts.find((item) => item.id === workoutId);
    if (workout) return customWorkoutNames[workout.id] || workout.short || workout.label;
  }
  return "Treino realizado";
}

function renderWorkoutTimeline() {
  const timeline = document.getElementById("workoutTimeline");
  if (!timeline) return;
  const dates = getTimelineDates();
  const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "short" });
  const lastSeven = dates.slice(-7);
  const completedLastSeven = lastSeven.reduce((total, date) => total + (timelineHistoryCache[date]?.length || 0), 0);
  document.getElementById("timelineSummary").textContent = `${completedLastSeven} ${completedLastSeven === 1 ? "treino" : "treinos"} nos últimos 7 dias`;

  timeline.innerHTML = dates.map((date) => {
    const parsed = parseIsoDate(date);
    const completed = Boolean(timelineHistoryCache[date]?.length);
    const isSelected = date === selectedDate;
    const isToday = date === today;
    const label = `${isToday ? "Hoje, " : ""}${weekday.format(parsed)}, ${parsed.getDate()}`;
    return `
      <button class="timeline-day ${completed ? "is-complete" : ""} ${isSelected ? "is-selected" : ""}" type="button" data-timeline-date="${date}" aria-label="${escapeHtml(label)}${completed ? ", treino realizado" : ", sem treino"}" aria-pressed="${isSelected}">
        <span class="timeline-weekday">${isToday ? "Hoje" : weekday.format(parsed).replace(".", "")}</span>
        <span class="timeline-dot"></span>
        <strong>${parsed.getDate()}</strong>
      </button>`;
  }).join("");

  const selectedWorkouts = timelineHistoryCache[selectedDate] || [];
  const historyLinks = selectedWorkouts.map((id) => `<button type="button" class="history-session-button" data-history-session="${id}">${escapeHtml(getTimelineWorkoutName(id))}</button>`).join("");
  document.getElementById("daySessions").innerHTML = historyLinks;
  document.querySelectorAll("[data-history-session]").forEach((button) => button.onclick = () => selectHistoricalWorkout(button.dataset.historySession));
  const selectedLabel = selectedDate === today ? "Hoje" : formatShortDate(selectedDate);
  document.getElementById("timelineDayDetail").textContent = selectedWorkouts.length
    ? `${selectedLabel} · ${selectedWorkouts.map(getTimelineWorkoutName).join(" + ")}`
    : `${selectedLabel} · nenhum treino registrado`;

  timeline.querySelectorAll("[data-timeline-date]").forEach((button) => {
    button.addEventListener("click", () => selectDate(button.dataset.timelineDate));
  });
  requestAnimationFrame(() => {
    const selectedDay = timeline.querySelector(`[data-timeline-date="${selectedDate}"]`);
    if (!selectedDay) return;
    const desiredLeft = selectedDate === today
      ? selectedDay.offsetLeft - timeline.clientWidth + selectedDay.offsetWidth
      : selectedDay.offsetLeft - (timeline.clientWidth - selectedDay.offsetWidth) / 2;
    timeline.scrollTo({ left: Math.max(0, desiredLeft), behavior: "smooth" });
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
        </div>
      </div>
    </article>
  `).join("");
  hydrateIcons(grid);

  const dietDone = meals.filter((meal) => checksCache[meal.id]).length;
  const workout = workouts.find((item) => item.id === currentWorkoutId) || workouts[0] || { exercises: [], short: "—" };
  const workoutDone = workout.exercises.filter((exercise) => checksCache[exercise.id]).length;
  const selectedDay = selectedDate === today ? "hoje" : selectedDate.split("-").reverse().join("/");
  document.getElementById("dailyTotal").innerHTML = `
    <span data-icon="flame"></span>
    <div><strong>${dietDone}/${meals.length}</strong><small>dieta</small></div>
    <div><strong>${workoutDone}/${workout.exercises.length}</strong><small>treino</small></div>
    <div><strong>${escapeHtml(getWorkoutName(workout))}</strong><small>tipo</small></div>
    <div><strong>${selectedDay}</strong><small>dia</small></div>
  `;
  hydrateIcons(document.getElementById("dailyTotal"));

  document.querySelectorAll("[data-meal-toggle]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.mealToggle;
      checksCache[id] = !checksCache[id];
      renderMeals();
      syncInBackground(saveCheck(id, checksCache[id]));
    });
  });
}

function renderWorkoutSelector() {
  document.querySelectorAll(".workout-select").forEach((select) => {
    select.innerHTML = workouts.map((workout) => `<option value="${workout.id}">${escapeHtml(getWorkoutLabel(workout))}</option>`).join("");
    select.value = currentWorkoutId;
    if (select.dataset.bound === "true") return;
    select.dataset.bound = "true";
    select.addEventListener("change", () => {
      currentWorkoutId = select.value;
      restoreSession(currentWorkoutId);
      localStorage.setItem(localKeys.workout(profileId), currentWorkoutId);
      saveWorkoutForDate(currentWorkoutId);
      renderWorkout(currentWorkoutId);
      renderMeals();
    });
  });

  const buttons = document.getElementById("trainingWorkoutButtons");
  if (!buttons) return;
  buttons.innerHTML = getStrengthWorkouts()
    .map((workout) => `
      <button class="workout-segment ${workout.id === currentWorkoutId ? "is-active" : ""}" type="button" data-workout-button="${workout.id}">
        <strong>${escapeHtml(getWorkoutName(workout))}</strong>
        <small>${escapeHtml(formatShortDate(workoutCompletionCache[workout.id]))}</small>
      </button>
    `).join("") + (!getViewedPlan()?.deletedAt && getViewedPlan()
      ? `<button class="workout-segment-add" type="button" data-quick-add-section aria-label="Adicionar treino" title="Adicionar treino">+</button>`
      : "");

  document.getElementById("moveWorkoutEarlier").disabled = !getViewedPlan() || !!getViewedPlan()?.deletedAt;
  document.getElementById("moveWorkoutLater").disabled = !getViewedPlan() || !!getViewedPlan()?.deletedAt;
  bindWorkoutReorder(buttons);
  buttons.querySelectorAll("[data-workout-button]").forEach((button) => {
    button.addEventListener("click", () => {
      if (buttons.dataset.dragged === "true") return;
      historicalSession = null;
      currentWorkoutId = button.dataset.workoutButton;
      restoreSession(currentWorkoutId);
      localStorage.setItem(localKeys.workout(profileId), currentWorkoutId);
      saveWorkoutForDate(currentWorkoutId);
      renderWorkout(currentWorkoutId);
      renderMeals();
    });
  });
  buttons.querySelector("[data-quick-add-section]")?.addEventListener("click", () => {
    openPlanEditor(false);
    addDraftSection();
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

function renderSettings() {
  const list = document.getElementById("workoutNameSettings");
  if (!list || !activeProfile) return;
  list.innerHTML = getStrengthWorkouts()
    .map((workout) => `
      <label class="settings-name-field">
        <span>${escapeHtml(workout.short)}</span>
        <input data-workout-name="${workout.id}" value="${escapeHtml(getWorkoutName(workout))}" placeholder="${escapeHtml(workout.short)}" />
      </label>
    `).join("");

  list.querySelectorAll("[data-workout-name]").forEach((input) => {
    const save = (refreshSettings = true) => saveWorkoutName(input.dataset.workoutName, input.value, refreshSettings);
    input.addEventListener("input", () => {
      clearTimeout(workoutNameSaveTimers[input.dataset.workoutName]);
      workoutNameSaveTimers[input.dataset.workoutName] = setTimeout(() => save(false), 350);
    });
    input.addEventListener("change", () => save(true));
    input.addEventListener("blur", () => save(true));
  });
}

function renderWorkout(workoutId) {
  const workout = workouts.find((item) => item.id === workoutId) || workouts[0];
  if (!workout) {
    document.getElementById("exerciseTable").innerHTML = "";
    document.getElementById("exerciseList").innerHTML = '<div class="training-empty"><h3>Seu próximo ciclo começa aqui</h3><p>Crie um programa ou importe sua ficha CSV.</p><button class="secondary-action" onclick="openPlanEditor(true)">Criar programa</button></div>';
    return;
  }
  currentWorkoutId = workout.id;
  document.querySelectorAll(".workout-select").forEach((selector) => {
    selector.value = workout.id;
  });
  document.querySelectorAll("[data-workout-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.workoutButton === workout.id);
  });

  document.getElementById("exerciseTable").innerHTML = workout.exercises.map((exercise, index) => {
    const fields = getExerciseFields(exercise);
    const weightValue = fields.weight;
    const exerciseName = getExerciseName(exercise);
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHtml(exerciseName)}</td>
        <td>${exercise.series}</td>
        <td>${exercise.reps}</td>
        <td><input class="table-input" inputmode="decimal" data-note="${exercise.id}" data-field="weight" value="${escapeHtml(weightValue)}" placeholder="--" /></td>
        <td><input class="table-input" data-note="${exercise.id}" data-field="machine" value="${escapeHtml(fields.machine)}" placeholder="--" /></td>
      </tr>
    `;
  }).join("");

  const isWorkoutDone = Boolean(checksCache[getWorkoutCompletionKey(workout.id)]);
  document.getElementById("exerciseList").innerHTML = workout.exercises.map((exercise) => {
    const fields = getExerciseFields(exercise);
    const weightValue = fields.weight;
    const exerciseName = getExerciseName(exercise);
    const isEditingName = editingExerciseId === exercise.id;
    return `
      <article class="exercise-card" data-exercise-card="${exercise.id}">
        <div class="exercise-title">
          <div>
            <div class="exercise-name-row">
              ${isEditingName
                ? `<input class="exercise-name-input" data-exercise-name-input="${exercise.id}" value="${escapeHtml(exerciseName)}" aria-label="Nome do exercício" />`
                : `<h3>${escapeHtml(exerciseName)}</h3>`}
              <button class="edit-name-button" type="button" ${isEditingName ? `data-save-exercise-name="${exercise.id}"` : `data-edit-exercise="${exercise.id}"`} aria-label="${isEditingName ? "Salvar nome" : `Editar nome de ${escapeHtml(exerciseName)}`}" title="${isEditingName ? "Salvar nome" : "Editar nome"}">
                <span data-icon="${isEditingName ? "check" : "edit"}"></span>
              </button>
            </div>
            <p><strong>${escapeHtml(exercise.series)}</strong> séries <span>×</span> <strong>${escapeHtml(exercise.reps)}</strong> repetições</p>
          </div>
        </div>
        <div class="exercise-control-row">
          <label>
            <span>Peso</span>
            <input inputmode="decimal" data-note="${exercise.id}" data-field="weight" value="${escapeHtml(weightValue)}" placeholder="kg" />
          </label>
          <label>
            <span>Máquina</span>
            <input data-note="${exercise.id}" data-field="machine" value="${escapeHtml(fields.machine)}" placeholder="número" />
          </label>
          <button class="done-button ${checksCache[exercise.id] ? "is-done" : ""}" type="button" data-exercise-done="${exercise.id}">
            ${checksCache[exercise.id] ? "Feito" : "Não feito"}
          </button>
          <button class="chart-button" type="button" data-chart-exercise="${exercise.id}" aria-expanded="${expandedCharts.has(exercise.id)}" aria-controls="chart-${exercise.id}" aria-label="Mostrar ou ocultar evolução de ${escapeHtml(exerciseName)}" title="Mostrar ou ocultar evolução">
            <span data-icon="chart"></span>
          </button>
        </div>
        <label class="notes-field">
          <span>Observação</span>
          <textarea data-note="${exercise.id}" data-field="notes" rows="2" placeholder="Ajuste de banco, pegada, ordem...">${escapeHtml(fields.notes)}</textarea>
        </label>
        <section class="inline-chart" id="chart-${exercise.id}" ${expandedCharts.has(exercise.id) ? "" : "hidden"} aria-label="Evolução de carga"><p class="chart-empty">Carregando evolução…</p></section>
      </article>
    `;
  }).join("") + `
    <div class="workout-complete-panel">
      <button class="workout-complete-button ${isWorkoutDone ? "is-done" : ""}" type="button" data-workout-complete="${workout.id}">
        ${isWorkoutDone ? "Treino concluído" : "Concluir treino"}
      </button>
      <small>Última vez: ${escapeHtml(formatShortDate(workoutCompletionCache[workout.id]))}</small>
    </div>
  `;

  bindWorkoutFields();
  expandedCharts.forEach((id) => refreshInlineChart(id));
  hydrateIcons(document.getElementById("exerciseList"));
}

function bindWorkoutFields() {
  document.querySelectorAll("[data-note]").forEach((field) => {
    const save = () => syncInBackground(saveExerciseField(field.dataset.note, field.dataset.field, field.value));
    field.addEventListener("change", save);
    field.addEventListener("blur", save);

  });

  document.querySelectorAll("[data-exercise-done]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.stopPropagation();
      await toggleExerciseDone(button.dataset.exerciseDone);
    });
  });

  document.querySelectorAll("[data-chart-exercise]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openExerciseChart(button.dataset.chartExercise);
    });
  });

  document.querySelectorAll("[data-edit-exercise]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      beginExerciseNameEdit(button.dataset.editExercise);
    });
  });

  document.querySelectorAll("[data-save-exercise-name]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const input = document.querySelector(`[data-exercise-name-input="${button.dataset.saveExerciseName}"]`);
      saveExerciseName(button.dataset.saveExerciseName, input?.value || "");
    });
  });

  document.querySelectorAll("[data-exercise-name-input]").forEach((input) => {
    input.addEventListener("blur", () => saveExerciseName(input.dataset.exerciseNameInput, input.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") input.blur();
      if (event.key === "Escape") {
        editingExerciseId = "";
        renderWorkout(currentWorkoutId);
      }
    });
  });

  document.querySelectorAll("[data-exercise-card]").forEach((card) => {
    card.addEventListener("click", async (event) => {
      if (event.target.closest("input, textarea, button, label, .inline-chart")) return;
      await toggleExerciseDone(card.dataset.exerciseCard);
    });
  });

  document.querySelectorAll("[data-workout-complete]").forEach((button) => {
    button.addEventListener("click", async () => {
      await toggleWorkoutComplete(button.dataset.workoutComplete);
    });
  });
}

function bindPlanEditor() {
  document.getElementById("moveWorkoutEarlier").onclick = () => moveWorkout(currentWorkoutId, workouts.findIndex((w) => w.id === currentWorkoutId) - 1);
  document.getElementById("moveWorkoutLater").onclick = () => moveWorkout(currentWorkoutId, workouts.findIndex((w) => w.id === currentWorkoutId) + 1);
  document.getElementById("deleteWorkoutPlan").addEventListener("click", deleteViewedPlan);
  document.getElementById("createWorkoutPlan").addEventListener("click", () => openPlanEditor(true));
  document.getElementById("newWorkoutPlan").addEventListener("click", () => openPlanEditor(true));
  document.getElementById("editWorkoutPlan").addEventListener("click", () => openPlanEditor(false));
  const csvInput = document.getElementById("workoutCsvInput");
  document.getElementById("importWorkoutCsv").addEventListener("click", () => csvInput.click());
  csvInput.addEventListener("change", async () => {
    const file = csvInput.files?.[0];
    csvInput.value = "";
    if (file) await importWorkoutCsvFile(file);
  });
  document.getElementById("addWorkoutSection").addEventListener("click", addDraftSection);
  document.getElementById("saveWorkoutPlan").addEventListener("click", savePlanEditor);
  document.querySelectorAll("[data-editor-close]").forEach((button) => button.addEventListener("click", closePlanEditor));
  document.getElementById("planEditor").addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePlanEditor();
  });
}

function detectCsvDelimiter(text) {
  const firstLine = text.replace(/^\uFEFF/, "").split(/\r?\n/, 1)[0] || "";
  const count = (delimiter) => {
    let quoted = false;
    let total = 0;
    for (let index = 0; index < firstLine.length; index += 1) {
      if (firstLine[index] === '"') quoted = !quoted;
      if (!quoted && firstLine[index] === delimiter) total += 1;
    }
    return total;
  };
  return count(";") > count(",") ? ";" : ",";
}

function parseCsv(text) {
  const delimiter = detectCsvDelimiter(text);
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const source = text.replace(/^\uFEFF/, "");

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (char === '"') {
      if (quoted && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === delimiter && !quoted) {
      row.push(field.trim());
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && source[index + 1] === "\n") index += 1;
      row.push(field.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  row.push(field.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function normalizeCsvHeader(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function getCsvColumn(headers, aliases) {
  return headers.findIndex((header) => aliases.includes(header));
}

function buildWorkoutPlanFromCsv(text, fileName) {
  const rows = parseCsv(text);
  if (rows.length < 2) throw new Error("O CSV precisa ter um cabeçalho e pelo menos um exercício.");
  const headers = rows[0].map(normalizeCsvHeader);
  const columns = {
    workout: getCsvColumn(headers, ["nome_treino", "treino", "secao", "divisao"]),
    exercise: getCsvColumn(headers, ["exercicios", "exercicio", "nome_exercicio"]),
    series: getCsvColumn(headers, ["series", "serie"]),
    reps: getCsvColumn(headers, ["repeticoes", "repeticao", "reps"]),
    notes: getCsvColumn(headers, ["observacao", "observacoes", "obs"])
  };
  if (columns.workout < 0 || columns.exercise < 0 || columns.series < 0 || columns.reps < 0 || columns.notes < 0) {
    throw new Error("Use as colunas: nome_treino, exercicios, series, repeticoes e observacao.");
  }

  const sections = new Map();
  rows.slice(1).forEach((values) => {
    const workoutName = (values[columns.workout] || "").trim();
    const exerciseName = (values[columns.exercise] || "").trim();
    if (!workoutName || !exerciseName) return;
    if (!sections.has(workoutName)) {
      sections.set(workoutName, {
        id: createId("secao"),
        short: workoutName,
        label: workoutName,
        note: "",
        exercises: []
      });
    }
    const series = (values[columns.series] || "-").trim();
    const reps = (values[columns.reps] || "-").trim();
    sections.get(workoutName).exercises.push({
      id: createId("exercicio"),
      name: exerciseName,
      series,
      reps,
      target: `${series}x${reps}`,
      defaultWeight: "",
      defaultMachine: "",
      defaultNotes: (values[columns.notes] || "").trim()
    });
  });
  if (!sections.size) throw new Error("Nenhum exercício válido foi encontrado no CSV.");
  const cleanName = fileName.replace(/\.csv$/i, "").replace(/[_-]+/g, " ").trim();
  return {
    id: createId("plano"),
    name: cleanName || `Treino importado · ${formatShortDate(today)}`,
    createdAt: new Date().toISOString(),
    workouts: [...sections.values()]
  };
}

async function importWorkoutCsvFile(file) {
  try {
    const importedPlan = buildWorkoutPlanFromCsv(await file.text(), file.name);
    workoutPlans.push(importedPlan);
    activeWorkoutPlanId = importedPlan.id;
    viewedWorkoutPlanId = importedPlan.id;
    applyViewedPlan(importedPlan.id);
    currentWorkoutId = workouts[0]?.id || "";
    persistWorkoutPlans();
    if (currentWorkoutId) await saveWorkoutForDate(currentWorkoutId);
    closePlanEditor();
    renderWorkoutPlanSelector();
    renderWorkoutSelector();
    if (currentWorkoutId) renderWorkout(currentWorkoutId);
    renderMeals();
    renderSettings();
    alert(`Novo ciclo criado com ${workouts.length} ${workouts.length === 1 ? "treino" : "treinos"}.`);
  } catch (error) {
    alert(error.message || "Não foi possível importar o CSV.");
  }
}

function openPlanEditor(isNew) {
  if (isNew) {
    const sectionId = createId("secao");
    planEditorDraft = {
      isNew: true,
      id: createId("plano"),
      name: `Novo treino · ${new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(new Date())}`,
      createdAt: new Date().toISOString(),
      workouts: [{ id: sectionId, short: "Treino A", label: "Treino A", note: "", exercises: [] }]
    };
  } else {
    if (!getViewedPlan() || getViewedPlan().deletedAt) return;
    planEditorDraft = structuredClone(getViewedPlan());
    planEditorDraft.isNew = false;
  }
  document.getElementById("editorEyebrow").textContent = isNew ? "Um novo começo" : "Ajustar ciclo atual";
  document.getElementById("editorTitle").textContent = isNew ? "Monte seu novo treino" : "Edite todo o treino";
  document.getElementById("planNameInput").value = planEditorDraft.name;
  renderPlanEditor();
  const modal = document.getElementById("planEditor");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("editor-is-open");
  setTimeout(() => document.getElementById("planNameInput").focus(), 30);
}

function closePlanEditor() {
  const modal = document.getElementById("planEditor");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("editor-is-open");
  planEditorDraft = null;
  planEditorDraft = null;
}

function syncDraftFromEditor() {
  if (!planEditorDraft) return;
  planEditorDraft.name = document.getElementById("planNameInput").value;
  document.querySelectorAll("[data-section-card]").forEach((card) => {
    const section = planEditorDraft.workouts.find((item) => item.id === card.dataset.sectionCard);
    if (!section) return;
    section.short = card.querySelector('[data-section-field="short"]').value;
    section.label = card.querySelector('[data-section-field="label"]').value;
    section.note = card.querySelector('[data-section-field="note"]').value;
    card.querySelectorAll("[data-draft-exercise]").forEach((row) => {
      const exercise = section.exercises.find((item) => item.id === row.dataset.draftExercise);
      if (!exercise) return;
      exercise.name = row.querySelector('[data-exercise-field="name"]').value;
      exercise.series = row.querySelector('[data-exercise-field="series"]').value;
      exercise.reps = row.querySelector('[data-exercise-field="reps"]').value;
      exercise.defaultWeight = row.querySelector('[data-exercise-field="defaultWeight"]').value;
      exercise.defaultMachine = row.querySelector('[data-exercise-field="defaultMachine"]').value;
      exercise.defaultNotes = row.querySelector('[data-exercise-field="defaultNotes"]').value;
      exercise.target = `${exercise.series || "-"}x${exercise.reps || "-"}`;
    });
  });
}

function renderPlanEditor() {
  const historySelect = document.getElementById("planHistorySelect");
  historySelect.innerHTML = [...livePlans()].reverse().map((plan) => `
    <option value="${plan.id}">${escapeHtml(plan.name)}${plan.id === activeWorkoutPlanId ? " · vigente" : ""}</option>
  `).join("");
  historySelect.value = planEditorDraft.id;
  historySelect.onchange = () => {
    if (historySelect.value === activeWorkoutPlanId) return;
    applyViewedPlan(historySelect.value);
    currentWorkoutId = workouts[0]?.id || "";
    closePlanEditor();
    renderWorkoutPlanSelector();
    renderWorkoutSelector();
    if (currentWorkoutId) renderWorkout(currentWorkoutId);
    renderMeals();
  };
  const list = document.getElementById("sectionEditorList");
  list.innerHTML = planEditorDraft.workouts.map((section, sectionIndex) => `
    <article class="section-editor-card" data-section-card="${section.id}">
      <div class="section-editor-heading">
        <span class="section-index">${String(sectionIndex + 1).padStart(2, "0")}</span>
        <div><small>SEÇÃO</small><strong>${escapeHtml(section.short || `Treino ${String.fromCharCode(65 + sectionIndex)}`)}</strong></div>
        <button class="remove-icon-button" type="button" data-remove-section="${section.id}" aria-label="Excluir seção"><span data-icon="trash"></span></button>
      </div>
      <div class="section-fields">
        <label><span>Nome curto</span><input data-section-field="short" value="${escapeHtml(section.short)}" placeholder="Treino A" /></label>
        <label><span>Foco da seção</span><input data-section-field="label" value="${escapeHtml(section.label)}" placeholder="Peito e tríceps" /></label>
        <label class="wide-field"><span>Orientação</span><input data-section-field="note" value="${escapeHtml(section.note || "")}" placeholder="Ex.: 30 min de cardio ao final" /></label>
      </div>
      <div class="exercise-editor-list">
        ${section.exercises.map((exercise, index) => renderDraftExercise(exercise, index)).join("")}
      </div>
      <button class="add-exercise-button" type="button" data-add-exercise="${section.id}"><span>+</span> Adicionar exercício</button>
    </article>
  `).join("");
  hydrateIcons(list);

  list.querySelectorAll("[data-add-exercise]").forEach((button) => button.addEventListener("click", () => {
    syncDraftFromEditor();
    const section = planEditorDraft.workouts.find((item) => item.id === button.dataset.addExercise);
    section.exercises.push({ id: createId("exercicio"), name: "", series: "3", reps: "12", target: "3x12", defaultWeight: "", defaultMachine: "", defaultNotes: "" });
    renderPlanEditor();
    const inputs = list.querySelectorAll('[data-exercise-field="name"]');
    inputs[inputs.length - 1]?.focus();
  }));
  list.querySelectorAll("[data-remove-section]").forEach((button) => button.addEventListener("click", () => {
    if (planEditorDraft.workouts.length === 1) return alert("O treino precisa ter pelo menos uma seção.");
    syncDraftFromEditor();
    planEditorDraft.workouts = planEditorDraft.workouts.filter((item) => item.id !== button.dataset.removeSection);
    renderPlanEditor();
  }));
  list.querySelectorAll("[data-remove-exercise]").forEach((button) => button.addEventListener("click", () => {
    syncDraftFromEditor();
    const section = planEditorDraft.workouts.find((item) => item.exercises.some((exercise) => exercise.id === button.dataset.removeExercise));
    section.exercises = section.exercises.filter((exercise) => exercise.id !== button.dataset.removeExercise);
    renderPlanEditor();
  }));
}

function renderDraftExercise(exercise, index) {
  return `
    <div class="exercise-editor-row" data-draft-exercise="${exercise.id}">
      <div class="exercise-editor-number">${index + 1}</div>
      <label class="exercise-name-field"><span>Exercício</span><input data-exercise-field="name" value="${escapeHtml(exercise.name)}" placeholder="Nome do exercício" /></label>
      <label><span>Séries</span><input data-exercise-field="series" value="${escapeHtml(exercise.series)}" inputmode="numeric" placeholder="3" /></label>
      <label><span>Repetições</span><input data-exercise-field="reps" value="${escapeHtml(exercise.reps)}" placeholder="12" /></label>
      <label><span>Peso inicial</span><input data-exercise-field="defaultWeight" value="${escapeHtml(exercise.defaultWeight || "")}" placeholder="kg" /></label>
      <label><span>Máquina</span><input data-exercise-field="defaultMachine" value="${escapeHtml(exercise.defaultMachine || "")}" placeholder="nº" /></label>
      <label class="exercise-notes-field"><span>Observação</span><input data-exercise-field="defaultNotes" value="${escapeHtml(exercise.defaultNotes || "")}" placeholder="Banco, pegada, execução..." /></label>
      <button class="remove-icon-button exercise-remove" type="button" data-remove-exercise="${exercise.id}" aria-label="Excluir exercício"><span data-icon="trash"></span></button>
    </div>`;
}

function addDraftSection() {
  syncDraftFromEditor();
  const letter = String.fromCharCode(65 + planEditorDraft.workouts.length);
  planEditorDraft.workouts.push({ id: createId("secao"), short: `Treino ${letter}`, label: `Treino ${letter}`, note: "", exercises: [] });
  renderPlanEditor();
  document.getElementById("sectionEditorList").lastElementChild?.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function savePlanEditor() {
  if (!planEditorDraft.isNew) {
    try { await preserveLegacySessions(getViewedPlan()); } catch (error) { alert(error.message); return; }
  }
  syncDraftFromEditor();
  planEditorDraft.name = planEditorDraft.name.trim();
  if (!planEditorDraft.name) return alert("Dê um nome ao ciclo de treino.");
  const invalidSection = planEditorDraft.workouts.find((section) => !section.short.trim() || !section.label.trim());
  if (invalidSection) return alert("Preencha o nome e o foco de todas as seções.");
  const invalidExercise = planEditorDraft.workouts.flatMap((section) => section.exercises).find((exercise) => !exercise.name.trim());
  if (invalidExercise) return alert("Preencha o nome de todos os exercícios adicionados.");

  const savedPlan = { ...planEditorDraft };
  delete savedPlan.isNew;
  if (planEditorDraft.isNew) {
    workoutPlans.push(savedPlan);
    activeWorkoutPlanId = savedPlan.id;
  } else {
    workoutPlans = workoutPlans.map((plan) => plan.id === savedPlan.id ? savedPlan : plan);
  }
  viewedWorkoutPlanId = savedPlan.id;
  savedPlan.workouts.forEach((workout) => {
    delete customWorkoutNames[workout.id];
    workout.exercises.forEach((exercise) => delete customExerciseNames[exercise.id]);
  });
  await persistCustomNames();
  persistWorkoutPlans();
  applyViewedPlan(savedPlan.id);
  currentWorkoutId = workouts[0]?.id || "";
  localStorage.setItem(localKeys.workout(profileId), currentWorkoutId);
  if (currentWorkoutId) saveWorkoutForDate(currentWorkoutId);
  closePlanEditor();
  renderWorkoutPlanSelector();
  renderWorkoutSelector();
  if (currentWorkoutId) renderWorkout(currentWorkoutId);
  renderMeals();
  renderSettings();
}

function getNextWorkoutId() {
  const strengthWorkouts = getStrengthWorkouts();
  if (!strengthWorkouts.length) return currentWorkoutId;
  return [...strengthWorkouts].sort((a, b) => {
    const dateA = workoutCompletionCache[a.id] || "";
    const dateB = workoutCompletionCache[b.id] || "";
    if (!dateA && !dateB) return strengthWorkouts.indexOf(a) - strengthWorkouts.indexOf(b);
    if (!dateA) return -1;
    if (!dateB) return 1;
    return dateA.localeCompare(dateB);
  })[0].id;
}

async function toggleExerciseDone(exerciseId) {
  checksCache[exerciseId] = !checksCache[exerciseId];
  const exercise = findExercise(exerciseId);
  const suggestedWeight = checksCache[exerciseId] ? getExerciseFields(exercise).weight : "";
  const completionKey = getWorkoutCompletionKey(currentWorkoutId);
  const shouldCompleteWorkout = checksCache[exerciseId] && !checksCache[completionKey];
  if (shouldCompleteWorkout) {
    checksCache[completionKey] = true;
    if (!workoutCompletionCache[currentWorkoutId] || selectedDate > workoutCompletionCache[currentWorkoutId]) {
      workoutCompletionCache[currentWorkoutId] = selectedDate;
    }
    timelineHistoryCache[selectedDate] ||= [];
    if (!timelineHistoryCache[selectedDate].includes(currentWorkoutId)) timelineHistoryCache[selectedDate].push(currentWorkoutId);
  }
  renderWorkout(currentWorkoutId);
  renderMeals();
  renderWorkoutTimeline();
  renderWorkoutSelector();
  const syncTasks = [
    saveWorkoutForDate(currentWorkoutId),
    saveCheck(exerciseId, checksCache[exerciseId])
  ];
  if (suggestedWeight) syncTasks.push(saveDailyExerciseWeight(exerciseId, suggestedWeight));
  if (shouldCompleteWorkout) syncTasks.push(saveCheck(completionKey, true));
  syncInBackground(Promise.all(syncTasks));
}

async function toggleWorkoutComplete(workoutId) {
  const key = getWorkoutCompletionKey(workoutId);
  checksCache[key] = !checksCache[key];
  if (checksCache[key]) {
    if (!workoutCompletionCache[workoutId] || selectedDate > workoutCompletionCache[workoutId]) workoutCompletionCache[workoutId] = selectedDate;
    timelineHistoryCache[selectedDate] ||= [];
    if (!timelineHistoryCache[selectedDate].includes(workoutId)) timelineHistoryCache[selectedDate].push(workoutId);
  } else {
    if (workoutCompletionCache[workoutId] === selectedDate) {
      const dates = Object.keys(timelineHistoryCache).filter((date) => date !== selectedDate && timelineHistoryCache[date]?.includes(workoutId));
      Object.keys(workoutSessions).filter((date) => date !== selectedDate && workoutSessions[date]?.[workoutId]?.completed).forEach((date) => dates.push(date));
      workoutCompletionCache[workoutId] = dates.sort().at(-1) || "";
    }
    timelineHistoryCache[selectedDate] = (timelineHistoryCache[selectedDate] || []).filter((id) => id !== workoutId);
    if (!timelineHistoryCache[selectedDate].length) delete timelineHistoryCache[selectedDate];
  }
  renderWorkoutTimeline();
  renderWorkoutSelector();
  renderWorkout(workoutId);
  renderMeals();
  syncInBackground(Promise.all([
    saveWorkoutForDate(workoutId),
    saveCheck(key, checksCache[key])
  ]).then(async () => {
    workoutCompletionCache = await loadWorkoutCompletions();
    renderWorkoutSelector(); renderWorkoutTimeline();
    if (currentWorkoutId === workoutId) renderWorkout(workoutId);
  }));
}

async function loadCustomNames() {
  const local = JSON.parse(localStorage.getItem(localKeys.customNames(profileId)) || "{}");
  customWorkoutNames = local.workouts || {};
  customExerciseNames = local.exercises || {};

  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("profile_settings")
    .select("workout_names, exercise_names")
    .eq("profile_id", profileId)
    .maybeSingle();

  if (error || !data) return;
  const remoteWorkoutNames = { ...(data.workout_names || customWorkoutNames) };
  delete remoteWorkoutNames.__workout_plans;
  customWorkoutNames = remoteWorkoutNames;
  customExerciseNames = data.exercise_names || customExerciseNames;
  localStorage.setItem(localKeys.customNames(profileId), JSON.stringify({
    workouts: customWorkoutNames,
    exercises: customExerciseNames
  }));
}

async function persistCustomNames() {
  persistWorkoutPlans(false);
  localStorage.setItem(localKeys.customNames(profileId), JSON.stringify({
    workouts: customWorkoutNames,
    exercises: customExerciseNames
  }));

  if (!supabaseClient) return;
  const plansPayload = {
    activePlanId: activeWorkoutPlanId,
    plans: workoutPlans,
    schemaVersion: 2,
    sessions: workoutSessions,
    updatedAt: new Date().toISOString()
  };
  try {
    await syncProfileSettings(plansPayload);
  } catch (error) {
    console.warn("Alterações salvas localmente; sincronização pendente.", error);
    setSyncStatus("Local (sincronização pendente)");
  }
}

async function saveWorkoutName(workoutId, value, refreshSettings = true) {
  const workout = workouts.find((item) => item.id === workoutId);
  if (!workout) return;
  const name = value.trim();
  if (name !== getWorkoutName(workout)) {
    try { await preserveLegacySessions(getViewedPlan()); } catch (error) { alert(error.message); return; }
  }
  if (!name || name === workout.short || name === workout.label) {
    delete customWorkoutNames[workoutId];
  } else {
    customWorkoutNames[workoutId] = name;
  }
  if (historicalSession?.workout.id === workoutId && name) {
    historicalSession.workout.short = name; historicalSession.workout.label = name;
    workout.short = name; workout.label = name;
  }
  persistWorkoutPlans(false);
  await persistCustomNames();
  renderWorkoutSelector();
  renderWorkout(currentWorkoutId);
  renderMeals();
  if (refreshSettings) renderSettings();
}

function beginExerciseNameEdit(exerciseId) {
  const exercise = findExercise(exerciseId);
  if (!exercise) return;
  editingExerciseId = exerciseId;
  renderWorkout(currentWorkoutId);
  setTimeout(() => {
    const input = document.querySelector(`[data-exercise-name-input="${exerciseId}"]`);
    input?.focus();
    input?.select();
  }, 0);
}

async function saveExerciseName(exerciseId, value) {
  const exercise = findExercise(exerciseId);
  if (!exercise) return;
  const name = value.trim();
  if (name === getExerciseName(exercise)) { editingExerciseId = ""; renderWorkout(currentWorkoutId); return; }
  try { await preserveLegacySessions(getViewedPlan()); } catch (error) { alert(error.message); return; }
  if (name) {
    exercise.name = name;
    const template = getViewedPlan()?.workouts.flatMap((w) => w.exercises).find((e) => e.id === exerciseId);
    if (template && !getViewedPlan().deletedAt) template.name = name;
    const recorded = workoutSessions[selectedDate]?.[currentWorkoutId]?.workout.exercises.find((e) => e.id === exerciseId);
    if (recorded) recorded.name = name;
  }
  delete customExerciseNames[exerciseId];
  editingExerciseId = "";
  persistWorkoutPlans(false);
  await persistCustomNames();
  renderWorkout(currentWorkoutId);
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

async function loadWorkoutCompletions() {
  const checksByDate = {};
  const completionPrefix = getWorkoutCompletionKey("");
  Object.entries(workoutSessions).forEach(([date, sessions]) => {
    checksByDate[date] = Object.fromEntries(Object.entries(sessions).map(([id, session]) => [getWorkoutCompletionKey(id), session.completed]));
  });
  Object.keys(localStorage).filter((key) => key.startsWith(getLocalChecksPrefix())).forEach((key) => {
    const date = key.replace(getLocalChecksPrefix(), "");
    checksByDate[date] = { ...checksByDate[date], ...JSON.parse(localStorage.getItem(key) || "{}") };
  });
  if (supabaseClient) {
    try {
      const data = await fetchAllProfileRows("daily_checks", "check_date,item_id,completed", "check_date");
      data.forEach((item) => {
        checksByDate[item.check_date] ||= {};
        checksByDate[item.check_date][item.item_id] = item.completed;
      });
    } catch (error) { console.warn(error.message); }
  }
  const latest = {}; const timeline = {}; const timelineStart = getTimelineDates()[0];
  Object.entries(checksByDate).forEach(([date, checks]) => Object.entries(checks).forEach(([key, completed]) => {
    if (!completed || !key.startsWith(completionPrefix)) return;
    const id = key.slice(completionPrefix.length);
    if (!latest[id] || date > latest[id]) latest[id] = date;
    if (date >= timelineStart) { timeline[date] ||= []; timeline[date].push(id); }
  }));
  timelineHistoryCache = timeline;
  return latest;
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

async function loadLatestWeights() {
  const latest = {};

  Object.keys(localStorage)
    .filter((key) => key.startsWith(dailyLogPrefix(profileId)))
    .forEach((key) => {
      const date = key.replace(dailyLogPrefix(profileId), "");
      const logs = JSON.parse(localStorage.getItem(key) || "{}");
      Object.entries(logs).forEach(([exerciseId, log]) => {
        if (!log?.weight) return;
        if (!latest[exerciseId] || date > latest[exerciseId].date) {
          latest[exerciseId] = { date, weight: log.weight };
        }
      });
    });

  if (!supabaseClient) return latest;

  const { data, error } = await supabaseClient
    .from("daily_exercise_logs")
    .select("exercise_id, log_date, weight")
    .eq("profile_id", profileId)
    .order("log_date", { ascending: false });

  if (error) return latest;

  data.forEach((item) => {
    if (!item.weight) return;
    if (!latest[item.exercise_id] || item.log_date > latest[item.exercise_id].date) {
      latest[item.exercise_id] = { date: item.log_date, weight: item.weight };
    }
  });

  return latest;
}

async function saveExerciseField(exerciseId, field, value) {
  if (dailyLogsCache[exerciseId]?.[field] === value) return;
  if (field === "weight") {
    await saveDailyExerciseWeight(exerciseId, value);
    return;
  }

  notesCache[exerciseId] = { ...(notesCache[exerciseId] || {}), [field]: value };
  dailyLogsCache[exerciseId] = { ...getExerciseFields(findExercise(exerciseId)), recorded: false, ...(dailyLogsCache[exerciseId] || {}), [field]: value };
  localStorage.setItem(localKeys.notes(profileId), JSON.stringify(notesCache));
  localStorage.setItem(`${dailyLogPrefix(profileId)}${selectedDate}`, JSON.stringify(dailyLogsCache));
  captureSession(currentWorkoutId);

  if (field === "notes" && !historicalSession) {
    const exercise = findExercise(exerciseId);
    if (exercise) {
      exercise.defaultNotes = value;
      persistWorkoutPlans();
    }
  }

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
  const fields = getExerciseFields(findExercise(exerciseId));
  dailyLogsCache[exerciseId] = { ...fields, ...(dailyLogsCache[exerciseId] || {}), weight, recorded: true };
  localStorage.setItem(`${dailyLogPrefix(profileId)}${selectedDate}`, JSON.stringify(dailyLogsCache));
  latestWeightsCache = await loadLatestWeights();
  await saveWorkoutForDate(currentWorkoutId);
  document.querySelectorAll(`[data-note="${exerciseId}"][data-field="weight"]`).forEach((input) => { input.value = weight; });
  expandedCharts.forEach((id) => refreshInlineChart(id));
  if (!supabaseClient) return;
  const { error } = await supabaseClient.from("daily_exercise_logs").upsert({
    profile_id: profileId, log_date: selectedDate, exercise_id: exerciseId, weight, updated_at: new Date().toISOString()
  });
  if (error) throw error;
}

async function saveCheck(itemId, completed) {
  localStorage.setItem(localKeys.checks(profileId, selectedDate), JSON.stringify(checksCache));
  if (itemId.startsWith("workout-done:") || workouts.some((w) => w.exercises.some((e) => e.id === itemId))) captureSession(currentWorkoutId);
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
  if (!workoutId) return;
  if (hasWorkoutActivity(workoutId)) captureSession(workoutId);
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
  if (expandedCharts.has(exerciseId)) expandedCharts.delete(exerciseId);
  else expandedCharts.add(exerciseId);
  const panel = document.getElementById(`chart-${exerciseId}`);
  if (!panel) return;
  panel.hidden = !expandedCharts.has(exerciseId);
  document.querySelector(`[data-chart-exercise="${exerciseId}"]`)?.setAttribute("aria-expanded", String(!panel.hidden));
  if (!panel.hidden) await refreshInlineChart(exerciseId);
}

async function refreshInlineChart(exerciseId) {
  const panel = document.getElementById(`chart-${exerciseId}`);
  const exercise = findExercise(exerciseId);
  if (!panel || panel.hidden || !exercise) return;
  const owner = profileId;
  const ids = getNamedExerciseIds(getExerciseName(exercise));
  const name = getExerciseName(exercise);
  const histories = await Promise.all(ids.map(async (id) => (await loadExerciseHistory(id)).filter((entry) => historyNameMatches(entry.date, id, name))));
  if (owner === profileId && panel.isConnected) panel.innerHTML = `<h4>Evolução de carga · ${escapeHtml(getExerciseName(exercise))}</h4>` + renderChart(mergeWeightHistory(...histories));
}

function findExercise(exerciseId) {
  return workouts.flatMap((workout) => workout.exercises).find((exercise) => exercise.id === exerciseId);
}

function mergeWeightHistory(...collections) {
  const unique = new Map();
  collections.flat().forEach((item) => {
    if (!Number.isFinite(item.weight)) return;
    unique.set(`${item.date}:${item.weight}`, item);
  });
  return [...unique.values()].sort((a, b) => a.date.localeCompare(b.date));
}

async function loadExerciseHistory(exerciseId) {
  const localHistory = mergeWeightHistory(loadLocalExerciseHistory(exerciseId), Object.entries(workoutSessions).flatMap(([date, sessions]) => Object.values(sessions).map((session) => ({ date, weight: session.fields?.[exerciseId]?.recorded === false ? NaN : normalizeWeight(session.fields?.[exerciseId]?.weight) }))));
  if (!supabaseClient) return localHistory;

  const { data, error } = await supabaseClient
    .from("daily_exercise_logs")
    .select("log_date, weight")
    .eq("profile_id", profileId)
    .eq("exercise_id", exerciseId)
    .order("log_date", { ascending: true });

  if (error) return localHistory;
  return mergeWeightHistory(localHistory, data.map((item) => ({ date: item.log_date, weight: normalizeWeight(item.weight) })));
}

function loadLocalExerciseHistory(exerciseId) {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith(dailyLogPrefix(profileId)))
    .map((key) => {
      const date = key.replace(dailyLogPrefix(profileId), "");
      const logs = JSON.parse(localStorage.getItem(key) || "{}");
      return { date, weight: logs[exerciseId]?.recorded === false ? NaN : normalizeWeight(logs[exerciseId]?.weight) };
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

function livePlans() {
  return workoutPlans.filter((plan) => !plan.deletedAt);
}

function getNamedExerciseIds(name) {
  const ids = new Set();
  workoutPlans.forEach((plan) => plan.workouts.forEach((workout) => workout.exercises.forEach((exercise) => {
    if (getExerciseName(exercise) === name) ids.add(exercise.id);
  })));
  Object.values(workoutSessions).forEach((sessions) => Object.values(sessions).forEach((session) => {
    session.workout.exercises.forEach((exercise) => { if (exercise.name === name) ids.add(exercise.id); });
  }));
  return [...ids];
}

function historyNameMatches(date, exerciseId, name) {
  const known = Object.values(workoutSessions[date] || {}).flatMap((session) => session.workout.exercises).filter((exercise) => exercise.id === exerciseId);
  return !known.length || known.some((exercise) => exercise.name === name);
}

function getLatestNamedRecord(exercise) {
  if (!exercise) return null;
  const name = getExerciseName(exercise);
  let latest = null;
  Object.entries(workoutSessions).forEach(([date, sessions]) => Object.values(sessions).forEach((session) => {
    session.workout.exercises.forEach((item) => {
      const fields = session.fields?.[item.id];
      if (item.name === name && fields?.recorded !== false && fields?.weight !== undefined && fields.weight !== "" && (!latest || date >= latest.date)) latest = { ...fields, date };
    });
  }));
  getNamedExerciseIds(name).forEach((id) => {
    const candidate = latestWeightsCache[id];
    if (candidate?.weight && historyNameMatches(candidate.date, id, name) && (!latest || candidate.date > latest.date)) latest = { ...candidate, machine: notesCache[id]?.machine ?? "" };
  });
  return latest;
}

function getExerciseFields(exercise) {
  if (!exercise) return {};
  const latest = getLatestNamedRecord(exercise);
  const saved = historicalSession?.fields?.[exercise.id] || notesCache[exercise.id] || {};
  const daily = dailyLogsCache[exercise.id] || {};
  return {
    weight: daily.weight ?? latest?.weight ?? exercise.defaultWeight ?? "",
    machine: daily.machine ?? latest?.machine ?? saved.machine ?? exercise.defaultMachine ?? "",
    notes: daily.notes ?? saved.notes ?? exercise.defaultNotes ?? ""
  };
}

function hasWorkoutActivity(workoutId) {
  const workout = workouts.find((w) => w.id === workoutId);
  return !!checksCache[getWorkoutCompletionKey(workoutId)] || !!workoutSessions[selectedDate]?.[workoutId] || workout?.exercises.some((e) => checksCache[e.id] || dailyLogsCache[e.id]);
}

function captureSession(workoutId) {
  const workout = workouts.find((item) => item.id === workoutId);
  if (!workout) return;
  const plan = findPlanForWorkout(workoutId);
  const copy = structuredClone(workout);
  copy.short = getWorkoutName(workout); copy.label = getWorkoutLabel(workout);
  copy.exercises.forEach((e) => { e.name = getExerciseName(e); });
  const session = {
    planId: plan?.id || "", planName: historicalSession?.planName || plan?.name || "Programa",
    workout: copy,
    fields: Object.fromEntries(workout.exercises.map((e) => [e.id, { ...getExerciseFields(e), recorded: !!checksCache[e.id] || (Object.hasOwn(dailyLogsCache[e.id] || {}, "weight") && dailyLogsCache[e.id].recorded !== false) }])),
    checks: Object.fromEntries(workout.exercises.map((e) => [e.id, !!checksCache[e.id]])),
    completed: !!checksCache[getWorkoutCompletionKey(workoutId)]
  };
  workoutSessions[selectedDate] ||= {};
  workoutSessions[selectedDate][workoutId] = session;
  if (historicalSession) historicalSession = session;
  persistWorkoutPlans();
}

function restoreSession(workoutId) {
  const session = workoutSessions[selectedDate]?.[workoutId];
  historicalSession = session || null;
  if (!session) return;
  currentWorkoutId = workoutId;
  const plan = findPlanForWorkout(workoutId);
  viewedWorkoutPlanId = plan?.id || session.planId;
  workouts = (plan?.deletedAt ? [session.workout] : plan?.workouts || []).map((workout) => workout.id === workoutId ? structuredClone(session.workout) : workout);
  if (!workouts.some((workout) => workout.id === workoutId)) workouts.push(structuredClone(session.workout));
  Object.entries(session.fields || {}).forEach(([id, fields]) => { dailyLogsCache[id] = { ...fields, ...dailyLogsCache[id] }; });
  Object.entries(session.checks || {}).forEach(([id, checked]) => { if (!(id in checksCache)) checksCache[id] = checked; });
  if (!(getWorkoutCompletionKey(workoutId) in checksCache)) checksCache[getWorkoutCompletionKey(workoutId)] = session.completed;
}

function selectHistoricalWorkout(workoutId) {
  const plan = findPlanForWorkout(workoutId);
  if (plan) applyViewedPlan(plan.id);
  currentWorkoutId = workoutId;
  restoreSession(workoutId);
  renderWorkoutPlanSelector(); renderWorkoutSelector(); renderWorkout(workoutId); renderMeals();
}

// Legacy records never stored historical names/prescriptions. Preserve the best
// available definition, but never invent a relationship from a machine number.
async function preserveLegacySessions(plan) {
  const checksByDate = {};
  const logsByDate = {};
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(getLocalChecksPrefix())) checksByDate[key.replace(getLocalChecksPrefix(), "")] = JSON.parse(localStorage.getItem(key) || "{}");
    if (key.startsWith(dailyLogPrefix(profileId))) logsByDate[key.replace(dailyLogPrefix(profileId), "")] = JSON.parse(localStorage.getItem(key) || "{}");
  });
  if (supabaseClient) {
    const results = await Promise.all([
      fetchAllProfileRows("daily_checks", "check_date,item_id,completed", "check_date"),
      fetchAllProfileRows("daily_exercise_logs", "log_date,exercise_id,weight", "log_date")
    ]);
    results[0].forEach((row) => { checksByDate[row.check_date] ||= {}; checksByDate[row.check_date][row.item_id] = row.completed; });
    results[1].forEach((row) => { logsByDate[row.log_date] ||= {}; logsByDate[row.log_date][row.exercise_id] = { ...logsByDate[row.log_date][row.exercise_id], weight: row.weight }; });
  }
  new Set([...Object.keys(checksByDate), ...Object.keys(logsByDate)]).forEach((date) => {
    const checks = checksByDate[date] || {}; const logs = logsByDate[date] || {};
    plan.workouts.forEach((workout) => {
      if (workoutSessions[date]?.[workout.id]) return;
      if (!checks[getWorkoutCompletionKey(workout.id)] && !workout.exercises.some((e) => checks[e.id] || logs[e.id])) return;
      const copy = structuredClone(workout);
      copy.short = getWorkoutName(workout); copy.label = getWorkoutLabel(workout);
      copy.exercises.forEach((e) => { e.name = getExerciseName(e); });
      workoutSessions[date] ||= {};
      workoutSessions[date][workout.id] = {
        planId: plan.id, planName: plan.name, workout: copy, reconstructed: true,
        fields: Object.fromEntries(workout.exercises.map((e) => [e.id, {
          weight: logs[e.id]?.weight ?? "", machine: logs[e.id]?.machine ?? notesCache[e.id]?.machine ?? e.defaultMachine ?? "",
          notes: logs[e.id]?.notes ?? notesCache[e.id]?.notes ?? e.defaultNotes ?? ""
        }])),
        checks: Object.fromEntries(workout.exercises.map((e) => [e.id, !!checks[e.id]])), completed: !!checks[getWorkoutCompletionKey(workout.id)]
      };
    });
  });
}

async function deleteViewedPlan() {
  const plan = getViewedPlan();
  if (!plan || plan.deletedAt || !confirm(`Excluir “${plan.name}”? O programa sairá da lista. Os treinos já registrados continuarão disponíveis nas respectivas datas.`)) return;
  const button = document.getElementById("deleteWorkoutPlan");
  button.disabled = true;
  try {
    await preserveLegacySessions(plan);
    plan.deletedAt = new Date().toISOString();
    if (plan.id === activeWorkoutPlanId) activeWorkoutPlanId = livePlans().at(-1)?.id || "";
    applyViewedPlan(activeWorkoutPlanId);
    persistWorkoutPlans();
    renderWorkoutPlanSelector(); renderWorkoutSelector(); renderWorkout(currentWorkoutId); renderMeals(); renderSettings(); renderWorkoutTimeline();
  } catch (error) { alert(error.message); button.disabled = false; }
}

function reducedWorkoutMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false;
}

function workoutPositions(container) {
  return new Map([...container.querySelectorAll("[data-workout-button]")].map((card) => [card.dataset.workoutButton, card.getBoundingClientRect()]));
}

// FLIP: animate from the previous visual position to the new layout position.
function animateWorkoutPositions(container, previous, excludedId = "") {
  if (reducedWorkoutMotion()) return;
  container.querySelectorAll("[data-workout-button]").forEach((card) => {
    const before = previous.get(card.dataset.workoutButton);
    if (!before || card.dataset.workoutButton === excludedId || !card.animate) return;
    card.getAnimations?.().forEach((animation) => animation.cancel());
    const after = card.getBoundingClientRect();
    const x = before.left - after.left, y = before.top - after.top;
    if (Math.abs(x) < 1 && Math.abs(y) < 1) return;
    card.animate([{ transform: `translate(${x}px, ${y}px)` }, { transform: "translate(0, 0)" }], {
      duration: 220, easing: "cubic-bezier(.22,.8,.3,1)"
    });
  });
}

function moveWorkout(workoutId, targetIndex) {
  const plan = getViewedPlan();
  if (!plan || plan.deletedAt) return;
  const index = plan.workouts.findIndex((w) => w.id === workoutId);
  if (index < 0) return;
  targetIndex = Math.max(0, Math.min(targetIndex, plan.workouts.length - 1));
  if (index === targetIndex) return;
  const container = document.getElementById("trainingWorkoutButtons");
  const previous = workoutPositions(container);
  const scrollLeft = container.scrollLeft;
  const [workout] = plan.workouts.splice(index, 1);
  plan.workouts.splice(targetIndex, 0, workout);
  workouts = plan.workouts;
  restoreSession(currentWorkoutId);
  persistWorkoutPlans(); renderWorkoutSelector();
  container.scrollLeft = scrollLeft;
  animateWorkoutPositions(container, previous);
  document.querySelector(`[data-workout-button="${workoutId}"]`)?.focus({ preventScroll: true });
  document.getElementById("reorderStatus").textContent = `${getWorkoutName(workout)} movido para a posição ${plan.workouts.indexOf(workout) + 1}.`;
}

function placeWorkoutPreview(container, cards, source) {
  const index = cards.indexOf(source);
  const addButton = container.querySelector("[data-quick-add-section]");
  // Keep the captured source connected while its neighbours move around it.
  cards.slice(0, index).forEach((card) => container.insertBefore(card, source));
  cards.slice(index + 1).forEach((card) => container.insertBefore(card, addButton));
}

function bindWorkoutReorder(container) {
  if (getViewedPlan()?.deletedAt) return;
  container.querySelectorAll("[data-workout-button]").forEach((button) => {
    button.setAttribute("aria-keyshortcuts", "Alt+ArrowLeft Alt+ArrowRight");
    button.title = "Segure para arrastar. No teclado, Alt + seta move o treino.";
    button.addEventListener("keydown", (event) => {
      if (!event.altKey || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      moveWorkout(button.dataset.workoutButton, getViewedPlan().workouts.findIndex((w) => w.id === button.dataset.workoutButton) + (event.key === "ArrowLeft" ? -1 : 1));
    });
    let timer, startX, startY, ghost, target, originalOrder, slots, initialScroll, offsetX, offsetY, dragging = false;
    const clear = (cancel = false) => {
      clearTimeout(timer);
      if (!dragging) return;
      dragging = false;
      const floating = ghost;
      ghost = null;
      button.classList.remove("is-drag-source");
      const previous = workoutPositions(container);
      if (cancel) {
        placeWorkoutPreview(container, originalOrder, button);
        animateWorkoutPositions(container, previous);
      } else if (target != null) {
        moveWorkout(button.dataset.workoutButton, target);
      }
      const destination = [...container.querySelectorAll("[data-workout-button]")].find((card) => card.dataset.workoutButton === button.dataset.workoutButton);
      const cleanup = () => { floating?.remove(); destination?.classList.remove("is-drag-source"); };
      if (floating?.animate && destination && !reducedWorkoutMotion()) {
        destination.classList.add("is-drag-source");
        const rect = destination.getBoundingClientRect();
        const landing = floating.animate([
          { left: floating.style.left, top: floating.style.top, transform: "rotate(-2deg) scale(1.04)", opacity: 1 },
          { left: `${rect.left}px`, top: `${rect.top}px`, transform: "rotate(0deg) scale(1)", opacity: 1 }
        ], { duration: 230, easing: "cubic-bezier(.22,1.12,.36,1)", fill: "forwards" });
        landing.finished.then(cleanup, cleanup);
      } else cleanup();
      setTimeout(() => { container.dataset.dragged = "false"; }, 100);
      target = null;
    };
    button.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || container.dataset.dragged === "true") return;
      startX = event.clientX; startY = event.clientY;
      timer = setTimeout(() => {
        dragging = true; container.dataset.dragged = "true";
        originalOrder = [...container.querySelectorAll("[data-workout-button]")];
        slots = originalOrder.map((card) => card.getBoundingClientRect());
        initialScroll = container.scrollLeft || 0;
        target = originalOrder.indexOf(button);
        const rect = button.getBoundingClientRect();
        offsetX = startX - rect.left; offsetY = startY - rect.top;
        button.setPointerCapture(event.pointerId);
        ghost = button.cloneNode(true); ghost.classList.add("drag-floating");
        ghost.style.width = `${button.offsetWidth}px`;
        ghost.style.left = `${rect.left}px`; ghost.style.top = `${rect.top}px`;
        document.body.append(ghost);
        if (!reducedWorkoutMotion()) ghost.animate?.([
          { transform: "rotate(0deg) scale(1)", boxShadow: "0 0 0 #0000" },
          { transform: "rotate(-2deg) scale(1.04)", boxShadow: "0 16px 30px #0009" }
        ], { duration: 180, easing: "ease-out" });
        button.classList.add("is-drag-source");
      }, 400);
    });
    button.addEventListener("pointermove", (event) => {
      if (!dragging) { if (Math.hypot(event.clientX - startX, event.clientY - startY) > 8) clearTimeout(timer); return; }
      event.preventDefault();
      ghost.style.left = `${event.clientX - offsetX}px`; ghost.style.top = `${event.clientY - offsetY}px`;
      const bounds = container.getBoundingClientRect();
      if (event.clientX > bounds.right - 35) container.scrollLeft += 12;
      if (event.clientX < bounds.left + 35) container.scrollLeft -= 12;
      if (event.clientY < bounds.top - 60 || event.clientY > bounds.bottom + 60) return;
      const scrollDelta = (container.scrollLeft || 0) - initialScroll;
      const nearest = slots.reduce((best, rect, index) => {
        const distance = Math.abs(event.clientX - (rect.left + rect.right) / 2 + scrollDelta);
        return distance < best.distance ? { index, distance } : best;
      }, { index: target, distance: Infinity }).index;
      if (nearest === target) return;
      const previous = workoutPositions(container);
      const cards = [...container.querySelectorAll("[data-workout-button]")].filter((card) => card !== button);
      cards.splice(nearest, 0, button);
      placeWorkoutPreview(container, cards, button);
      target = nearest;
      animateWorkoutPositions(container, previous, button.dataset.workoutButton);
    });
    button.addEventListener("pointerup", () => clear());
    button.addEventListener("pointercancel", () => clear(true));
    button.addEventListener("lostpointercapture", () => clear(true));
    button.addEventListener("pointerleave", () => { if (!dragging) clearTimeout(timer); });
  });
}

async function syncProfileSettings(payload) {
  const record = {
    profile_id: profileId,
    workout_plans: structuredClone(payload),
    workout_names: { ...customWorkoutNames, __workout_plans: structuredClone(payload) },
    exercise_names: { ...customExerciseNames }, updated_at: payload.updatedAt
  };
  const task = settingsSyncQueue.catch(() => {}).then(async () => {
    const { error } = await supabaseClient.from("profile_settings").upsert(record);
    if (error) throw error;
  });
  settingsSyncQueue = task;
  return task;
}

async function fetchAllProfileRows(table, columns, orderColumn) {
  const rows = [];
  for (let offset = 0; ; offset += 1000) {
    const { data, error } = await supabaseClient.from(table).select(columns).eq("profile_id", profileId).order(orderColumn).order(table === "daily_checks" ? "item_id" : "exercise_id").range(offset, offset + 999);
    if (error) throw new Error("Não foi possível consultar todo o histórico. Tente novamente quando houver conexão.");
    rows.push(...data);
    if (data.length < 1000) return rows;
  }
}

init();
