import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import ProjectItem from './components/ProjectItem';

// --- DATOS INICIALES DE PROYECTOS (del CHANGELOG 08-11-2025) ---
const initialData = {
  personalTasks: [
    { id: 1, name: '🛒 Compra Supermercado', status: 'Completado', description: 'Café, Leche, Esponjillas, Flus flus - ✅ REALIZADO' },
    { id: 2, name: '🧺 Lavadora', status: 'Completado', description: 'Colada terminada y tendida - ✅ REALIZADO' },
    { id: 3, name: '🧹 Limpieza Salón', status: 'Completado', description: 'Área común ordenada y limpia - ✅ REALIZADO' },
    { id: 4, name: '🚿 Ducha y preparación', status: 'Completado', description: '✅ REALIZADO' },
    { id: 5, name: '💰 Pago Mónica', status: 'Pendiente', description: '€60 por abonar - ❌ PENDIENTE' },
  ],
  work: [
    { id: 6, name: '🍻 Bar Nocturno', status: 'Activo', description: 'Nuevo horario confirmado', subTasks: [
      { text: 'Días: Martes a Sábado', completed: true },
      { text: 'Horario: 21:00 - 04:00 (7h)', completed: true },
      { text: 'Descanso: Domingo y Lunes', completed: false },
    ]}
  ],
  digitalProjects: [
    { id: 7, name: '🔵 BlueCore AI', status: 'Parcial', description: 'Asistente estratégico con IA', subTasks: [
      { text: 'Interfaz base: ✅ COMPLETADA', completed: true },
      { text: 'Integración Gemini API: ❌ PENDIENTE', completed: false },
      { text: 'Sistema comandos: 🔄 PARCIAL', completed: false },
    ]},
    { id: 8, name: '📢 CyberMadrid ADS', status: 'Planificación', description: 'Plataforma marketing para vida nocturna', subTasks: [
      { text: 'Definir servicios (cartelería, ads) ⏳', completed: false },
      { text: 'Crear portfolio visual ⏳', completed: false },
      { text: '💳 Diseñar tarjeta de visita digital ⏳', completed: false },
      { text: 'Buscar primeros clientes ⏳', completed: false },
    ]},
    { id: 9, name: '🎪 Campaña Mamarrachos', status: 'Pendiente', description: 'Marketing QR: "Etiqueta y gana chupito"', subTasks: [
      { text: 'Concepto definido ✅', completed: true },
      { text: 'Diseño carteles ⏳', completed: false },
      { text: 'Generar QR codes ⏳', completed: false },
    ]},
  ],
  personalActivities: [
    { id: 10, name: '🎉 Neo-Birthday SidZCooL', status: 'Ideación', description: 'Fiesta cyberpunk multidimensional', subTasks: [
      { text: 'Definir concepto visual ⏳', completed: false },
      { text: 'Lista invitados ⏳', completed: false },
      { text: 'Presupuesto estimado ⏳', completed: false },
    ]},
    { id: 11, name: '🎮 Gaming & Ahorro', status: 'Planificado', description: 'Zelda TOTK + Cyberpunk 2077', subTasks: [
      { text: 'Instalar Zelda (domingo) ⏳', completed: false },
      { text: 'Ahorrar €40 para Cyberpunk ⏳', completed: false },
    ]},
    { id: 12, name: '🎭 Agenda Cultural', status: 'Agendados', description: 'Networking e inspiración', subTasks: [
      { text: 'Candlelight: Joe Hisaishi (25 Ene) ⏳', completed: false },
    ]},
  ]
};

const todaysPlan = [
    {
        id: 100,
        name: '⚡ PLAN DE HOY (9 Nov)',
        status: 'Activo',
        subTasks: [
            { text: 'Compras: Bolsas basura, Papel higiénico, Papel cocina', completed: false },
            { text: 'Finanzas: Abonar Mónica (mínimo €30)', completed: false },
            { text: 'Finanzas: Enviar a Mamá ($120.000 COP)', completed: false },
            { text: 'Finanzas: Enviar a Yised ($100.000 COP)', completed: false },
            { text: 'Cita: 18:00 con Eva Mendoza', completed: false },
        ]
    }
];

const summary = {
  completed: 3,
  partial: 1,
  pending: 8, // +1 por la nueva tarjeta
};

const criticalActions = [
  '1. 💰 Abonar €60 a Mónica (URGENTE)',
  '2. 🔵 Integrar Gemini API en BlueCore',
  '3. 💳 Diseñar tarjeta de visita digital (CyberMadrid ADS)',
  '4. 🕒 Adaptar horario trabajo 21:00-04:00',
  '5. 🎪 Diseñar carteles Mamarrachos',
];

function App() {
  const [projectsData, setProjectsData] = useState(initialData);
  const [todayData, setTodayData] = useState(todaysPlan);

  useEffect(() => {
    const savedData = localStorage.getItem('projectsData');
    if (savedData) {
      setProjectsData(JSON.parse(savedData));
    }
  }, []);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
  }, [projectsData]);

  const handleToggleSubTask = (projectId, subTaskIndex) => {
    const newData = JSON.parse(JSON.stringify(projectsData)); // Deep copy
    
    // Find the project across all categories
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
    <div className="container">
      <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>CONFIG</button>
      <Header />

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
          {todayData.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </div>
      </div>

      <div className="grid">
        <Card title="📋 TAREAS ACTUALES">
          {projectsData.personalTasks.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
          {projectsData.work.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </Card>

        <div className="cyber-card card">
          <h3>🚀 PROYECTOS DIGITALES</h3>
          {projectsData.digitalProjects.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </div>
      </div>

      <div className="triple-grid">
        <div className="event-card card">
          <h3>🎭 EVENTOS POR ASISTIR</h3>
          {projectsData.personalActivities.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </div>
        
        <div className="shopping-card card">
          <h3>🛍️ COMPRAS FUTURAS</h3>
           <div className="task-item">
              <strong>🎮 Cyberpunk 2077</strong>
              <span className="price-tag">€40.00</span>
              <div>Meta ahorro: €15/semana</div>
          </div>
        </div>
        
        <Card title="💎 GUARDADO - COMPRAS FUTURAS">
           <div className="task-item">
              <strong>🛍️ Claón - Clain de Fragancias</strong>
              <div>La Vaguada - Fragancias artesanales</div>
              <div><em>Imitación Hugo Boss - €15-30</em></div>
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
    </div>
  );
}

export default App;