import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="page-container container">
        <h1 className="page-title">
          {t('projects.title')}
        </h1>
        <div className="projects-grid grid">
          <div className="project-card card">
            <h2 className="project-title card-title">{t('projects.ecommerce.title')}</h2>
            <p>{t('projects.ecommerce.description')}</p>
          </div>
          
          <div className="project-card card">
            <h2 className="project-title card-title">{t('projects.taskManager.title')}</h2>
            <p>{t('projects.taskManager.description')}</p>
          </div>
          
          <div className="project-card card">
            <h2 className="project-title card-title">{t('projects.education.title')}</h2>
            <p>{t('projects.education.description')}</p>
          </div>
          
          <div className="project-card card">
            <h2 className="project-title card-title">{t('projects.social.title')}</h2>
            <p>{t('projects.social.description')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;