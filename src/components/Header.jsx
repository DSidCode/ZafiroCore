import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-top-row">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo-title">BlueCore</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/plan-de-accion" className={({ isActive }) => isActive ? "nav-button active" : "nav-button"}>
            <span>Plan Tareas</span>
          </NavLink>
          <NavLink to="/carta-a-mama" className={({ isActive }) => isActive ? "nav-button nav-button-mama active" : "nav-button nav-button-mama"}>
            <span>Para Mamá</span>
          </NavLink>
        </nav>
      </div>
      <div className="mission-display">
        <span className="mission-text">Misión Principal: Viajar a Colombia para estar con mi hijo Adrián.</span>
      </div>
    </header>
  );
};

export default Header;