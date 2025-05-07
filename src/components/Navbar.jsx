import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-title">
          {t('site.title')}
        </div>
        <ul className="navbar-nav">
          <li>
            <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/">
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link className={`nav-link${location.pathname === '/projects' ? ' active' : ''}`} to="/projects">
              {t('nav.projects')}
            </Link>
          </li>
          <li>
            <Link className={`nav-link${location.pathname === '/trainings' ? ' active' : ''}`} to="/trainings">
              {t('nav.trainings')}
            </Link>
          </li>
          <li>
            <Link className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} to="/contact">
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
        <div className="navbar-right">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 