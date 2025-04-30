import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-title">
          {t('site.title')}
        </div>
        
        <ul className="navbar-nav">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t('nav.about')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t('nav.projects')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/trainings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t('nav.trainings')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t('nav.contact')}
            </NavLink>
          </li>
        </ul>
        
        <div className="navbar-right">
          <LanguageSwitcher />
          
          <button 
            className="navbar-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="navbar-mobile-menu open container">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.about')}
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.projects')}
          </NavLink>
          <NavLink 
            to="/trainings" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.trainings')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.contact')}
          </NavLink>
          
          <div className="language-switcher mobile">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 