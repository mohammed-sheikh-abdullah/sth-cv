import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-title">
          {t('site.title')}
        </div>
        
        <ul className="navbar-nav">
          <li>
            <button 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              {t('nav.about')}
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavigation('projects')}
            >
              {t('nav.projects')}
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${currentPage === 'trainings' ? 'active' : ''}`}
              onClick={() => handleNavigation('trainings')}
            >
              {t('nav.trainings')}
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              {t('nav.contact')}
            </button>
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
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            {t('nav.about')}
          </button>
          <button 
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            {t('nav.projects')}
          </button>
          <button 
            className={`nav-link ${currentPage === 'trainings' ? 'active' : ''}`}
            onClick={() => handleNavigation('trainings')}
          >
            {t('nav.trainings')}
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            {t('nav.contact')}
          </button>
          
          <div className="language-switcher mobile">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 