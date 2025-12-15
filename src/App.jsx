import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import CartaParaMama from './components/CartaParaMama';
import DiarioParaAdrian from './components/DiarioParaAdrian'; // Asegúrate que la ruta sea correcta
import PlanDeAccion from './components/PlanDeAccion';
import Header from './components/Header';
import Dashboard from './components/Dashboard';


// --- ESTRUCTURA DE DATOS ESTRATÉGICA ---
const initialData = {
  // Proyectos que generan ingresos directos o son la base para ello.
  incomeFocus: [
    { id: 301, name: '📈 ESTRATEGIA DE NEGOCIO Y MARKETING', status: 'Planificación', description: 'Definir la estrategia para captar clientes de alto valor y posicionar la marca.', subTasks: [
      { id: 1, text: 'Definir el diferenciador clave (USP) vs. la competencia', completed: false },
      { id: 2, text: 'Crear propuesta de valor que justifique un precio premium ("¿Por qué yo?")', completed: false },
      { id: 3, text: 'Diseñar paquete de servicios para PYMES y emprendedores', completed: false },
      { id: 4, text: 'Planificar campaña para Instagram/TikTok (mostrar proceso creativo)', completed: false },
      { id: 5, text: 'Definir estrategia de contenido profesional para LinkedIn', completed: false },
      { id: 6, text: 'Investigar y crear perfiles en plataformas freelance (Fiverr, Upwork, etc.)', completed: false }
    ]},
    { id: 21, name: '🎨 PROYECTO: REDISEÑO DANISID.COM', status: 'En Revisión', description: 'Reestructuración y rediseño del portafolio para reflejar especialización en UI/UX.', subTasks: [
      { id: 1, text: 'Revisar y aplicar feedback de "Will" para mejorar UI y comunicación', completed: false },
      { id: 2, text: 'Definir concepto visual final (colores, tipografía, iconografía)', completed: false },
      { id: 3, text: 'Asegurar que el diseño comunique: elegancia, creatividad y profesionalismo', completed: false },
      { id: 4, text: 'Empezar prototipo de alta fidelidad en Figma', completed: false },
      { id: 5, text: 'Iterar sobre el diseño visual hasta estar 100% conforme', completed: false }
    ]},
    { id: 24, name: '🎨 Proyecto El Manicomio Tattoo', status: 'Importante', description: 'Web para el estudio de tatuajes (WordPress)', subTasks: [
      { text: 'Finalizar y desplegar la web', completed: false },
      { text: 'Definir servicio de Modernización con React', completed: false },
    ]},
  ],
  // Proyectos que construyen marca, habilidades o son activos a largo plazo.
  strategicProjects: [
    { id: 7, name: '🔵 Zafiro AI', status: 'Parcial', description: 'Asistente estratégico con IA', subTasks: [
      { text: 'Interfaz base completada', completed: true },
      { text: 'Integración Gemini API', completed: false },
      { text: 'Sistema de comandos (Parcial)', completed: false },
    ]},
    { id: 25, name: '🌌 Quimera Alchemist', status: 'En Desarrollo', description: 'Proyecto de desarrollo personal y profesional', subTasks: [
      { text: 'Continuar desarrollo de módulos clave', completed: false },
      { text: 'Especialización en tecnologías Cloud', completed: false },
    ]},
    { id: 15, name: '💔 Antología del Amor y otras Nostalgias', status: 'Ideación', description: 'Proyecto de escritura creativa', subTasks: [
      { text: 'Definir alcance y objetivos', completed: false },
    ]},
    { id: 16, name: '❤️ Diario de Papá (Legado IA)', status: 'Planificación', description: 'Crear una IA con mi personalidad para Adrián. Nota: ¿Cuántas personas ahora mismo están pensando en construir una IA a partir de sus vivencias para dejarle a su hijo? ¿Cómo podríamos investigar este mercado y patentar una app que incluso pueda tener control parental? De eso se trata este proyecto: quiero dejarle a mi hijo mi personalidad, mi alma, por si algún día le llego a faltar.', subTasks: [
      { text: 'Investigar arquitecturas de BBDD', completed: false },
      { text: 'Investigar mercado potencial y viabilidad de patente', completed: false },
      { text: 'Definir la estructura de datos de la "personalidad"', completed: false },
      { text: 'Comenzar a poblar la "Antología del Alma"', completed: true },
    ]},
    { id: 26, name: '🎸 guitarApp', status: 'Ideación', description: 'App para guitarristas', subTasks: [
      { text: 'Definir funcionalidades principales', completed: false },
    ]},
    { id: 27, name: '🌃 CyberPunk Project', status: 'Ideación', description: 'Proyecto con temática Cyberpunk', subTasks: [
      { text: 'Definir el concepto y los objetivos', completed: false },
    ]},
    { id: 28, name: '🤖 GeminiSolutions', status: 'Ideación', description: 'Soluciones con la API de Gemini', subTasks: [
      { text: 'Definir el objetivo principal', completed: false },
    ]},
  ],
  // Tareas recurrentes y responsabilidades.
  maintenance: [
    { id: 6, name: '🍻 Bar Nocturno', status: 'Activo', description: 'Nuevo horario confirmado', subTasks: [
      { text: 'Días: Martes a Sábado', completed: true },
      { text: 'Horario: 21:00 - 04:00 (7h)', completed: true },
      { text: 'Descanso: Domingo y Lunes', completed: false },
    ]},
    { id: 1, name: '🛒 Compra Supermercado', status: 'Completado', description: 'Café, Leche, Esponjillas, Flus flus - ✅ REALIZADO' },
    { id: 2, name: '🧺 Lavadora', status: 'Completado', description: 'Colada terminada y tendida - ✅ REALIZADO' },
  ],
  // Crecimiento personal y ocio.
  developmentAndLeisure: [
    { id: 10, name: '🎉 Neo-Birthday SidZCooL', status: 'Ideación', description: 'Fiesta cyberpunk multidimensional', subTasks: [
      { text: 'Definir concepto visual', completed: false },
      { text: 'Lista invitados', completed: false },
      { text: 'Presupuesto estimado', completed: false },
    ]},
    { id: 11, name: '🎮 Gaming & Ahorro', status: 'Planificado', description: 'Ahorro para juegos pendientes', subTasks: [
      { text: 'Ahorrar €40 para Cyberpunk 2077', completed: false },
    ]},
    { id: 12, name: '🎭 Agenda Cultural', status: 'Agendado', description: 'Networking e inspiración', subTasks: [
      { text: 'Candlelight: Joe Hisaishi (25 Ene)', completed: false },
    ]},
  ],
  // Deudas y compromisos financieros
  debts: [
    { id: 200, name: 'Moni', amount: 20 },
    { id: 201, name: 'Dahia', amount: 20 },
    { id: 202, name: 'Oli', amount: 240 },
    { id: 203, name: 'Guille', amount: 30 },
    { id: 204, name: 'Jorge', amount: 30 },
    { id: 206, name: 'Naya', amount: 20 },
    { id: 208, name: 'Dino y Amanda', amount: 350 },
    { id: 209, name: 'Colombia (Meta Viaje)', amount: 7000 },
    { id: 210, name: 'Jime', amount: 20 },
    { id: 211, name: 'Sharon', amount: 10 },
  ],
  // Gastos fijos mensuales
  monthlyExpenses: [
    { id: 301, name: 'Vivienda Madrid', amount: 750, currency: 'EUR' },
    { id: 302, name: 'Ordenador', amount: 60, currency: 'EUR', note: '17 cuotas restantes' },
    { id: 303, name: 'Comida (promedio)', amount: 200, currency: 'EUR', note: '€50/semana' },
    { id: 304, name: 'Ocio (promedio)', amount: 120, currency: 'EUR', note: '€30/semana' },
    { id: 305, name: 'Ahorro (promedio)', amount: 80, currency: 'EUR', note: '€20/semana' },
    { id: 306, name: 'Spotify', amount: 11.50, currency: 'EUR' },
    { id: 307, name: 'Móvil', amount: 5, currency: 'EUR' },
    { id: 308, name: 'Manutención Adrián', amount: 1000000, currency: 'COP', note: '750k - 1M' },
    { id: 309, name: 'Salud Colombia', amount: 117000, currency: 'COP' },
    { id: 310, name: 'Factura Horno + Laia', amount: 130000, currency: 'COP' },
    { id: 311, name: 'Netflix', amount: 30000, currency: 'COP' },
  ]
};

const techShoppingList = {
  id: 400, name: '🛒 COMPRAS', status: 'Parcial', description: 'Lista de compras tecnológicas y generales.', subTasks: [
    { text: 'Comprar cable de red', completed: true },
    { text: 'Comprar mando (consola/PC)', completed: false },
    { text: 'Comprar pilas', completed: false },
  ]
};

const todaysPlan = [
  {
    id: 100,
    name: '📅 PLAN DE HOY',
    status: 'Parcial',
    description: 'Organización de vida y tareas pendientes.',
    subTasks: [
      { id: 1, text: 'Cena lista y comida preparada para mañana', completed: true },
      { id: 2, text: 'Agendar diseño de tarjeta de boda para Juanjo', completed: false },
      { id: 3, text: 'Deudas actualizadas: Mónica (restan 20€), Piri (pagado), Caro (pagado)', completed: true },
      { id: 4, text: 'Reagendar cita consulado (Conectado a las 9:40 AM)', completed: false },
      { id: 5, text: 'Organizar y estructurar la búsqueda de empleo', completed: false },
      { id: 6, text: 'Obtener certificados oficiales: Confección Web y Administración', completed: false },
      { id: 7, text: 'Consulado (Poder sucesión): Investigar envío post-autenticación (¿digital o físico?)', completed: false }
    ]
  }
];

const App = () => {
  const [projectsData, setProjectsData] = useState(initialData);
  const [todayData, setTodayData] = useState(todaysPlan);
  const [techShopping, setTechShopping] = useState(techShoppingList);

  // Load all data from localStorage on initial render
  useEffect(() => {
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) setProjectsData(JSON.parse(savedProjects));

    const savedToday = localStorage.getItem('todayData');
    if (savedToday) setTodayData(JSON.parse(savedToday));

    const savedShopping = localStorage.getItem('techShopping');
    if (savedShopping) setTechShopping(JSON.parse(savedShopping));
  }, []);

  // Save all data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
    localStorage.setItem('todayData', JSON.stringify(todayData));
    localStorage.setItem('techShopping', JSON.stringify(techShopping));
  }, [projectsData, todayData, techShopping]);

  const handleToggleSubTask = (projectId, subTaskIndex) => {
    // Update techShopping state
    if (projectId === techShopping.id) {
      const newTechShopping = JSON.parse(JSON.stringify(techShopping)); // Deep copy for safety
      newTechShopping.subTasks[subTaskIndex].completed = !newTechShopping.subTasks[subTaskIndex].completed;
      setTechShopping(newTechShopping);
      return;
    }

    // Update todayData state
    const todayProject = todayData.find(p => p.id === projectId);
    if (todayProject) {
      const newTodayData = todayData.map(p => {
        if (p.id === projectId) {
          const newSubTasks = [...p.subTasks];
          newSubTasks[subTaskIndex].completed = !newSubTasks[subTaskIndex].completed;
          return { ...p, subTasks: newSubTasks };
        }
        return p;
      });
      setTodayData(newTodayData);
      return;
    }

    // Update projectsData state
    const newProjectsData = JSON.parse(JSON.stringify(projectsData)); // Deep copy
    for (const category in newProjectsData) {
      const projectIndex = newProjectsData[category].findIndex(p => p.id === projectId);
      if (projectIndex !== -1 && newProjectsData[category][projectIndex].subTasks) {
        const newCategory = [...newProjectsData[category]];
        const newProject = { ...newCategory[projectIndex] };
        const newSubTasks = [...newProject.subTasks];
        newSubTasks[subTaskIndex].completed = !newSubTasks[subTaskIndex].completed;
        newProject.subTasks = newSubTasks;
        newCategory[projectIndex] = newProject;
        newProjectsData[category] = newCategory;
        setProjectsData(newProjectsData);
        return; // Exit after finding and updating
      }
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard projectsData={projectsData} todayData={todayData} techShopping={techShopping} handleToggleSubTask={handleToggleSubTask} />} />
        <Route path="/plan-de-accion" element={<PlanDeAccion />} />
        <Route path="/carta-a-mama" element={<CartaParaMama />} />
        <Route path="/diario-para-adrian" element={<DiarioParaAdrian />} />
      </Routes>
    </div>
  );
}

export default App;