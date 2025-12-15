import React, { useState } from 'react';
import Card from './Card';
import ProjectItem from './ProjectItem';

const Dashboard = ({ projectsData, todayData, techShopping, handleToggleSubTask }) => {
  const [showSettings, setShowSettings] = useState(false);

  const totalDebt = projectsData.debts.reduce((acc, debt) => acc + debt.amount, 0);

  // --- Financial Calculations ---
  const COP_TO_EUR_RATE = 4300; // Tasa de cambio aproximada

  const expensesEUR = projectsData.monthlyExpenses.filter(e => e.currency === 'EUR');
  const expensesCOP = projectsData.monthlyExpenses.filter(e => e.currency === 'COP');

  const totalEUR = expensesEUR.reduce((acc, expense) => acc + expense.amount, 0);
  const totalCOP = expensesCOP.reduce((acc, expense) => acc + expense.amount, 0);

  const totalCopInEur = totalCOP / COP_TO_EUR_RATE;
  const grandTotalExpenses = totalEUR + totalCopInEur;

  const formatCurrency = (amount, currency) => {
    const symbol = currency === 'EUR' ? '€' : '$';
    return `${symbol}${amount.toLocaleString('es-ES', { minimumFractionDigits: currency === 'EUR' ? 2 : 0, maximumFractionDigits: 2 })}`;
  };

  // Calculate summary dynamically
  const summary = Object.values(projectsData).flat().reduce((acc, project) => {
    if (project.status === 'Completado') {
      acc.completed++;
    } else if (project.status === 'Parcial' || project.status === 'En Desarrollo' || project.status === 'En Revisión' || project.status === 'En Planificación') {
      acc.partial++;
    } else if (project.status) { // Any other status counts as pending
      acc.pending++;
    }
    return acc;
  }, { completed: 0, partial: 0, pending: 0 });

  return (
    <div className="container">
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
        <Card title="📅 PLAN DE HOY" className="urgent-card">
          {todayData.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </Card>
      </div>

      <div className="triple-grid">
        <Card title="🎯 FOCO PRINCIPAL: GENERACIÓN DE INGRESOS" className="cyber-card">
          {projectsData.incomeFocus.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </Card>

        <Card title="🚀 PROYECTOS ESTRATÉGICOS Y CREATIVOS" className="strategic-card">
          {projectsData.strategicProjects.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </Card>

        <Card title="⚙️ OBLIGACIONES Y MANTENIMIENTO" className="maintenance-card">
          {projectsData.maintenance.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
        </Card>
      </div>
      
      <div className="triple-grid">
        <Card title="💸 OBLIGACIONES FINANCIERAS MENSUALES" className="financial-card">
          <div className="expense-section">
            <h4>Gastos en EUR</h4>
            {expensesEUR.map(e => (
              <div key={e.id} className="debt-item">
                <span>{e.name} {e.note && <span className="expense-note">({e.note})</span>}</span>
                <span className="debt-amount">{formatCurrency(e.amount, 'EUR')}</span>
              </div>
            ))}
            <div className="debt-total">
              <span>TOTAL EUR</span>
              <span>{formatCurrency(totalEUR, 'EUR')}</span>
            </div>
          </div>
          <div className="expense-section">
            <h4>Envíos a Colombia (COP)</h4>
            {expensesCOP.map(e => (
              <div key={e.id} className="debt-item">
                <span>{e.name} {e.note && <span className="expense-note">({e.note})</span>}</span>
                <span className="debt-amount">{formatCurrency(e.amount, 'COP')}</span>
              </div>
            ))}
          </div>
          <div className="grand-total">
            <span>GASTO TOTAL MENSUAL ESTIMADO</span>
            <span>{formatCurrency(grandTotalExpenses, 'EUR')}</span>
          </div>
        </Card>

        <Card title="🌱 DESARROLLO Y OCIO" className="event-card">
          {projectsData.developmentAndLeisure.map(p => <ProjectItem key={p.id} project={p} onToggleSubTask={handleToggleSubTask} />)}
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
        <Card title={techShopping.name} className="shopping-card">
          <ProjectItem project={techShopping} onToggleSubTask={handleToggleSubTask} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;