import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Card from './components/Card';
import CartaParaMama from './components/CartaParaMama';
import PlanDeAccion from './components/PlanDeAccion';
import Header from './components/Header';


// --- ESTRUCTURA DE DATOS ESTRATÉGICA ---
const initialData = {
  // Proyectos que generan ingresos directos o son la base para ello.
  incomeFocus: [
    { id: 8, name: '📢 CyberMadrid ADS', status: 'Planificación', description: 'Plataforma marketing para vida nocturna', subTasks: [
      { text: 'Definir servicios (cartelería, ads)', completed: false },
      { text: 'Crear portfolio visual', completed: false },
      { text: 'Buscar primeros clientes', completed: false },
    ]},
    { id: 9, name: '🎪 Campaña Mamarrachos', status: 'Pendiente', description: 'Marketing QR: "Etiqueta y gana chupito"', subTasks: [
      { text: 'Concepto definido', completed: true },
      { text: 'Diseño carteles', completed: false },
      { text: 'Generar QR codes', completed: false },
    ]},
    { id: 14, name: '💎 Proyecto Pulseras (Tienda Online)', status: 'Ideación', description: 'E-commerce de pulseras artesanales', subTasks: [
      { text: 'Definir concepto y diseño', completed: false },
      { text: 'Investigar plataforma e-commerce', completed: false },
      { text: 'Crear plan de negocio', completed: false },
    ]},
    { id: 21, name: '🌐 Proyecto Danisid.com', status: 'En Revisión', description: 'Optimización de la web personal/profesional', subTasks: [
      { text: 'Clarificar propuesta de valor', completed: false },
      { text: 'Potenciar portafolio con estudios de caso', completed: false },
      { text: 'Reforzar marca personal', completed: false },
      { text: 'Refactorización y migración a React', completed: false },
    ]},
    { id: 22, name: '📄 Proyecto cv.danisid.com', status: 'En Planificación', description: 'CV online interactivo y portafolio', subTasks: [
      { text: 'Seleccionar plataforma o tecnología', completed: false },
      { text: 'Diseñar estructura y contenido', completed: false },
      { text: 'Conceptualizar tarjeta de visita digital', completed: false },
    ]},
    { id: 23, name: '🎓 CyberClases', status: 'Ideación', description: 'Plataforma para impartir clases de tecnología', subTasks: [
      { text: 'Definir temario y estructura', completed: false },
      { text: 'Investigar plataformas', completed: false },
    ]},
    { id: 24, name: '🎨 Proyecto El Manicomio Tattoo', status: 'Importante', description: 'Web para el estudio de tatuajes (WordPress)', subTasks: [
      { text: 'Finalizar y desplegar la web', completed: false },
      { text: 'Definir servicio de Modernización con React', completed: false },
    ]},
  ],
  // Proyectos que construyen marca, habilidades o son activos a largo plazo.
  strategicProjects: [
    { id: 7, name: '🔵 BlueCore AI', status: 'Parcial', description: 'Asistente estratégico con IA', subTasks: [
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
    { id: 16, name: '❤️ Diario de Papá (Legado IA)', status: 'Planificación', description: 'Crear una IA con mi personalidad para Adrián', subTasks: [
      { text: 'Investigar arquitecturas de BBDD', completed: false },
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
    { id: 200, name: 'Moni', amount: 40 },
    { id: 201, name: 'Dahia', amount: 20 },
    { id: 202, name: 'Oli', amount: 240 },
    { id: 203, name: 'Guille', amount: 30 },
    { id: 204, name: 'Jorge', amount: 30 },
    { id: 205, name: 'Piri', amount: 20 },
    { id: 206, name: 'Naya', amount: 20 },
    { id: 207, name: 'Caro Pelaez', amount: 30 },
    { id: 208, name: 'Dino y Amanda', amount: 350 },
    { id: 209, name: 'Colombia (Meta Viaje)', amount: 7000 },
    { id: 210, name: 'Jime', amount: 20 },
  ]
};

const techShoppingList = {
  id: 400, name: '🛒 COMPRAS TECNOLÓGICAS', status: 'Pendiente', subTasks: [
    { text: 'Pilas AA para el mouse', completed: false },
    { text: 'Cable HDMI más largo', completed: false },
    { text: 'Mando para TV Samsung (UE32J5570)', completed: false },
  ]
};

const todaysPlan = [
  {
    id: 100,
    name: '📅 PLAN DE HOY',
    status: 'URGENTE',
    subTasks: [
      { text: 'Configuración de pantalla HDMI en Nobara Linux', completed: true },
      { text: 'Refactorización y migración de danisid.com a React', completed: false },
      { text: 'Conceptualizar tarjeta de visita digital (Marca Personal)', completed: false },
      { text: 'Diseñar paquete de servicio "Modernización con React"', completed: false },
      { text: 'Contactar 1er cliente potencial (ej. Mamarrachos)', completed: false },
      { text: 'Comprar: Pilas AA para el mouse', completed: false },
      { text: 'Comprar: Cable HDMI más largo', completed: false },
      { text: 'Comprar: Mando para TV Samsung (UE32J5570)', completed: false },
    ]
  }
];

const summary = {
  completed: 3,
  partial: 2, // +1 por Diario de Papá
  pending: 13, // +2 por los nuevos proyectos
};

const criticalActions = [
  '1. 💰 Abonar €40 a Mónica (URGENTE)',
  '2. ✍️ Documentar primer pensamiento en "Antología del Alma"',
  '2. 🇨🇴 Abonar ~€42 a cuotas familiares (Colombia)',
  '3. 🔵 Integrar Gemini API en BlueCore',
  '4. 💳 Diseñar tarjeta de visita digital (CyberMadrid ADS)',
  '5. 🕒 Adaptar horario trabajo 21:00-04:00',
  '6. 🎪 Diseñar carteles Mamarrachos',
];

const Dashboard = ({ projectsData, setProjectsData, todayData, setTodayData, handleToggleSubTask }) => {
  const [showSettings, setShowSettings] = useState(false);

  const totalDebt = projectsData.debts.reduce((acc, debt) => acc + debt.amount, 0);

  return (
    <div className="container">
      <Header />
      <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>CONFIG</button>
      {showSettings && (
        <Card title="Configuración" className="ai-card">
          <div className="settings-panel">
            <div>
            <p>La configuración de la API se gestionará aquí.</p>
            <p>Tu clave se guarda localmente. No se comparte con nadie.</p>
            </div>
          </div>
        </Card>
      )}

      <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="cyber-card card urgent-card">
          {todayData.map(p => (
            <div key={p.id} className="project-item">
              <div className="project-header">
                <span className="project-title">{p.name}</span>
                <span className="project-status" style={{backgroundColor: 'var(--urgent-red)'}}>{p.status}</span>
              </div>
              {p.subTasks && (
                <ul className="subtask-list">
                  {p.subTasks.map((task, index) => (
                    <li key={index} className="subtask-item" onClick={() => onToggleSubTask(p.id, index)}>
                      <input type="checkbox" checked={task.completed} readOnly />
                      <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
                      <span>{task.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="triple-grid">
        <Card title="🎯 FOCO PRINCIPAL: GENERACIÓN DE INGRESOS" className="cyber-card">
          {projectsData.incomeFocus.map(p => (
            <div key={p.id} className="project-item">
              <div className="project-header">
                <span className="project-title">{p.name}</span>
                <span className="project-status">{p.status}</span>
              </div>
              <p className="project-description">{p.description}</p>
              {p.subTasks && (
                <ul className="subtask-list">
                  {p.subTasks.map((task, index) => (
                    <li key={index} className="subtask-item" onClick={() => onToggleSubTask(p.id, index)}>
                      <input type="checkbox" checked={task.completed} readOnly />
                      <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
                      <span>{task.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Card>

        <Card title="🚀 PROYECTOS ESTRATÉGICOS Y CREATIVOS" className="strategic-card">
          {projectsData.strategicProjects.map(p => (
             <div key={p.id} className="project-item">
             <div className="project-header">
               <span className="project-title">{p.name}</span>
               <span className="project-status">{p.status}</span>
             </div>
             <p className="project-description">{p.description}</p>
             {p.subTasks && (
               <ul className="subtask-list">
                 {p.subTasks.map((task, index) => (
                   <li key={index} className="subtask-item" onClick={() => onToggleSubTask(p.id, index)}>
                     <input type="checkbox" checked={task.completed} readOnly />
                     <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
                     <span>{task.text}</span>
                   </li>
                 ))}
               </ul>
             )}
           </div>
          ))}
        </Card>

        <Card title="⚙️ OBLIGACIONES Y MANTENIMIENTO" className="maintenance-card">
          {projectsData.maintenance.map(p => (
             <div key={p.id} className="project-item">
             <div className="project-header">
               <span className="project-title">{p.name}</span>
               <span className="project-status">{p.status}</span>
             </div>
             <p className="project-description">{p.description}</p>
             {p.subTasks && (
               <ul className="subtask-list">
                 {p.subTasks.map((task, index) => (
                   <li key={index} className="subtask-item" onClick={() => onToggleSubTask(p.id, index)}>
                     <input type="checkbox" checked={task.completed} readOnly />
                     <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
                     <span>{task.text}</span>
                   </li>
                 ))}
               </ul>
             )}
           </div>
          ))}
        </Card>
      </div>

      <div className="triple-grid">
        <Card title="🌱 DESARROLLO Y OCIO" className="event-card">
          {projectsData.developmentAndLeisure.map(p => (
             <div key={p.id} className="project-item">
             <div className="project-header">
               <span className="project-title">{p.name}</span>
               <span className="project-status">{p.status}</span>
             </div>
             <p className="project-description">{p.description}</p>
             {p.subTasks && (
               <ul className="subtask-list">
                 {p.subTasks.map((task, index) => (
                   <li key={index} className="subtask-item" onClick={() => onToggleSubTask(p.id, index)}>
                     <input type="checkbox" checked={task.completed} readOnly />
                     <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
                     <span>{task.text}</span>
                   </li>
                 ))}
               </ul>
             )}
           </div>
          ))}
        </Card>

        <Card title="💸 DEUDAS Y PRÉSTAMOS" className="debts-card">
          {projectsData.debts.map(d => (
            <div key={d.id} className="debt-item">
              <span>{d.name}</span>
              <span className="debt-amount">€{d.amount.toLocaleString('es-ES')}</span>
            </div>
          ))}
          <div className="debt-total">
            <span>TOTAL</span>
            <span>€{totalDebt.toLocaleString('es-ES')}</span>
          </div>
        </Card>

        <Card title="📊 RESUMEN ESTADO ACTUAL">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2em', color: 'var(--completed)' }}>{summary.completed}</div>
              <div>Completados</div>
            </div>
            <div>
              <div style={{ fontSize: '2em', color: 'var(--partial)' }}>{summary.partial}</div>
              <div>Parciales</div>
            </div>
            <div>
              <div style={{ fontSize: '2em', color: 'var(--pending)' }}>{summary.pending}</div>
              <div>Pendientes</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid">
        <Card title={techShoppingList.name} className="shopping-card">
          <div className="project-item">
              {techShoppingList.subTasks && (
                <ul className="subtask-list">
                  {techShoppingList.subTasks.map((task, index) => (
                    <li key={index} className="subtask-item" onClick={() => onToggleSubTask(techShoppingList.id, index)}>
                      <input type="checkbox" checked={task.completed} readOnly />
                      <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
                      <span>{task.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
        </Card>
      </div>



      <div className="grid">
        <div className="cyber-card card">
            <h3>🎯 PRÓXIMAS ACCIONES CRÍTICAS</h3>
            <div className="task-list">
              {criticalActions.map((action, index) => <div key={index} className="task-item">{action}</div>)}
            </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [projectsData, setProjectsData] = useState(initialData);
  const [todayData, setTodayData] = useState(todaysPlan);
  const [techShopping, setTechShopping] = useState(techShoppingList);

  useEffect(() => {
    const savedData = localStorage.getItem('projectsData');
    if (savedData) {
      setProjectsData(JSON.parse(savedData));
    }
  }, []);
  
  useEffect(() => {
    const savedTechShopping = localStorage.getItem('techShopping');
    if (savedTechShopping) {
      setTechShopping(JSON.parse(savedTechShopping));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
  }, [projectsData]);
  
  useEffect(() => {
    localStorage.setItem('techShopping', JSON.stringify(techShopping));
  }, [techShopping]);

  const handleToggleSubTask = (projectId, subTaskIndex) => {
    const newData = JSON.parse(JSON.stringify(projectsData)); // Deep copy
    
    for (const category in newData) {
      const project = newData[category].find(p => p.id === projectId);
      if (project && project.subTasks) {
        project.subTasks[subTaskIndex].completed = !project.subTasks[subTaskIndex].completed;
        break;
      }
    }

    const newTodayData = JSON.parse(JSON.stringify(todayData));
    const todayProject = newTodayData.find(p => p.id === projectId);
    if (todayProject && todayProject.subTasks) {
      todayProject.subTasks[subTaskIndex].completed = !todayProject.subTasks[subTaskIndex].completed;
    }

    const newTechShoppingData = JSON.parse(JSON.stringify(techShopping));
    if (projectId === newTechShoppingData.id) {
      newTechShoppingData.subTasks[subTaskIndex].completed = !newTechShoppingData.subTasks[subTaskIndex].completed;
    }

    setProjectsData(newData);
    setTodayData(newTodayData);
    setTechShopping(newTechShoppingData);
  };

  return (
    <Routes>
      <Route path="/" element={<Dashboard projectsData={projectsData} setProjectsData={setProjectsData} todayData={todayData} setTodayData={setTodayData} handleToggleSubTask={handleToggleSubTask} />} />
      <Route path="/plan-de-accion" element={<PlanDeAccion />} />
      <Route path="/carta-a-mama" element={<CartaParaMama />} />
    </Routes>
  );
}

export default App;