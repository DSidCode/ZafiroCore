import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-top-row">
        <NavLink to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
          <h1 className="logo-title">💎 Zafiro</h1>
        </NavLink>

        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/plan-de-accion" className={({ isActive }) => "nav-button" + (isActive ? " active" : "")} onClick={() => setIsMenuOpen(false)}>
            <span>Plan de Acción</span>
          </NavLink>
          <NavLink to="/carta-a-mama" className={({ isActive }) => "nav-button nav-button-mama" + (isActive ? " active" : "")} onClick={() => setIsMenuOpen(false)}>
            <span>Carta a Mamá</span>
          </NavLink>
          <NavLink to="/diario-para-adrian" className={({ isActive }) => "nav-button nav-button-adrian" + (isActive ? " active" : "")} onClick={() => setIsMenuOpen(false)}>
            <span>Diario para Adrián</span>
          </NavLink>
        </nav>
      </div>
      <div className="mission-container">
        <span className="mission-text">Misión Principal: Viajar a Colombia para estar con mi hijo Adrián.</span>
      </div>
    </header>
  );
};

export default Header;