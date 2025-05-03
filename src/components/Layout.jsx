import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  const { t } = useTranslation();

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <span className="navbar-title">{t('site.title')}</span>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavigation('about')}
                >
                  <span className="nav-text">{t('nav.about')}</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
                  onClick={() => handleNavigation('projects')}
                >
                  <span className="nav-text">{t('nav.projects')}</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentPage === 'trainings' ? 'active' : ''}`}
                  onClick={() => handleNavigation('trainings')}
                >
                  <span className="nav-text">{t('nav.trainings')}</span>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavigation('contact')}
                >
                  <span className="nav-text">{t('nav.contact')}</span>
                </button>
              </li>
            </ul>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 