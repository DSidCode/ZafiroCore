import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Card from './components/Card';
import CartaParaMama from './components/CartaParaMama';
import Header from './components/Header';


// --- ESTRUCTURA DE DATOS ESTRATÉGICA ---
const initialData = {
  // Proyectos que generan ingresos directos o son la base para ello.
  incomeFocus: [
    { id: 8, name: '📢 CyberMadrid ADS', status: 'Planificación', description: 'Plataforma marketing para vida nocturna', subTasks: [
      { text: 'Definir servicios (cartelería, ads) ⏳', completed: false },
      { text: 'Crear portfolio visual ⏳', completed: false },
      { text: '💳 Diseñar tarjeta de visita digital ⏳', completed: false },
      { text: 'Buscar primeros clientes ⏳', completed: false },
    ]},
    { id: 14, name: '💎 Proyecto Pulseras (Tienda Online)', status: 'Ideación', description: 'E-commerce de pulseras artesanales', subTasks: [
      { text: 'Definir concepto y diseño de pulseras ⏳', completed: false },
      { text: 'Investigar plataforma e-commerce (Shopify, etc.) ⏳', completed: false },
      { text: 'Crear plan de negocio y marketing ⏳', completed: false },
    ]},
    { id: 9, name: '🎪 Campaña Mamarrachos', status: 'Pendiente', description: 'Marketing QR: "Etiqueta y gana chupito"', subTasks: [
      { text: 'Concepto definido ✅', completed: true },
      { text: 'Diseño carteles ⏳', completed: false },
      { text: 'Generar QR codes ⏳', completed: false },
    ]},
  ],
  // Proyectos que construyen marca, habilidades o son activos a largo plazo.
  strategicProjects: [
    { id: 7, name: '🔵 BlueCore AI', status: 'Parcial', description: 'Asistente estratégico con IA', subTasks: [
      { text: 'Interfaz base: ✅ COMPLETADA', completed: true },
      { text: 'Integración Gemini API: ❌ PENDIENTE', completed: false },
      { text: 'Sistema comandos: 🔄 PARCIAL', completed: false },
    ]},
    { id: 15, name: '📚 Proyecto Antología', status: 'Ideación', description: 'Recopilación de escritos y relatos', subTasks: [
      { text: 'Definir temática y estructura ⏳', completed: false },
      { text: 'Establecer rutina de escritura ⏳', completed: false },
    ]},
    { id: 16, name: '❤️ Diario de Papá (Legado IA)', status: 'Planificación', description: 'Crear una IA con mi personalidad para Adrián', subTasks: [
      { text: 'Investigar arquitecturas de BBDD (relacional/NoSQL) para datos emocionales ⏳', completed: false },
      { text: 'Definir la estructura de datos de la "personalidad" ⏳', completed: false },
      { text: 'Comenzar a poblar la "Antología del Alma" ✅', completed: true },
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
    { id: 10, name: '� Neo-Birthday SidZCooL', status: 'Ideación', description: 'Fiesta cyberpunk multidimensional', subTasks: [
      { text: 'Definir concepto visual ⏳', completed: false },
      { text: 'Lista invitados ⏳', completed: false },
      { text: 'Presupuesto estimado ⏳', completed: false },
    ]},
    { id: 11, name: '🎮 Gaming & Ahorro', status: 'Planificado', description: 'Zelda TOTK + Cyberpunk 2077', subTasks: [
      { text: 'Ahorrar €40 para Cyberpunk ⏳', completed: false },
    ]},
    { id: 12, name: '🎭 Agenda Cultural', status: 'Agendados', description: 'Networking e inspiración', subTasks: [
      { text: 'Candlelight: Joe Hisaishi (25 Ene) ⏳', completed: false },
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

const todaysPlan = [
  {
    id: 101,
    name: '⚡ PLAN DE HOY: LANZAR OFERTA MÍNIMA VIABLE',
    status: 'Activo',
    subTasks: [
      { text: 'Diseñar tarjeta de visita digital (CyberMadrid ADS)', completed: false },
      { text: 'Definir paquete de servicio "Puesta a punto WordPress"', completed: false },
      { text: 'Contactar 1er cliente potencial (ej. Mamarrachos)', completed: false },
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
        <div className="cyber-card card">
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

  useEffect(() => {
    const savedData = localStorage.getItem('projectsData');
    if (savedData) {
      setProjectsData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
  }, [projectsData]);

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

    setProjectsData(newData);
    setTodayData(newTodayData);
  };

  return (
    <Routes>
      <Route path="/" element={<Dashboard projectsData={projectsData} setProjectsData={setProjectsData} todayData={todayData} setTodayData={setTodayData} handleToggleSubTask={handleToggleSubTask} />} />
      <Route path="/carta-a-mama" element={<CartaParaMama />} />
    </Routes>
  );
}

export default App;