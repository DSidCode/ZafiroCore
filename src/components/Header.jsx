import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-top-row">
        <NavLink to="/" className="logo-link">
          <h1 className="logo-title">💎 Zafiro</h1>
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/plan-de-accion" className={({ isActive }) => "nav-button" + (isActive ? " active" : "")}>
            <span>Plan de Acción</span>
          </NavLink>
          <NavLink to="/carta-a-mama" className={({ isActive }) => "nav-button nav-button-mama" + (isActive ? " active" : "")}>
            <span>Carta a Mamá</span>
          </NavLink>
          <NavLink to="/diario-para-adrian" className={({ isActive }) => "nav-button nav-button-adrian" + (isActive ? " active" : "")}>
            <span>Diario para Adrián</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;