import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const NavigationConsole = () => {
  return (
    <Card title="CONSOLA DE NAVEGACIÓN" className="cyber-card">
      <div className="navigation-links">
        <Link to="/" className="nav-link">
          // DASHBOARD PRINCIPAL
        </Link>
        <Link to="/carta-a-mama" className="nav-link nav-link-mama">
          // MENSAJE PARA MAMÁ GLORIA INÉS //
        </Link>
        {/* Futuras secciones, por ahora como placeholders visuales */}
        <span className="nav-link nav-link-future">
          // ANTOLOGÍA DEL ALMA (PRÓXIMAMENTE)
        </span>
        <span className="nav-link nav-link-future">
          // FINANZAS DEL ALQUIMISTA (PRÓXIMAMENTE)
        </span>
      </div>
    </Card>
  );
};

export default NavigationConsole;