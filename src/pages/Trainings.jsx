import React from 'react';
import { useTranslation } from 'react-i18next';

const Trainings = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container container">
      <h1 className="page-title">
        {t('trainings.title')}
      </h1>
      <div className="trainings-list grid">
        <div className="training-item card">
          <h2 className="training-title card-title">{t('trainings.frontend.title')}</h2>
          <p>{t('trainings.frontend.description')}</p>
          <p className="training-duration">{t('trainings.frontend.duration')}</p>
        </div>
        
        <div className="training-item card">
          <h2 className="training-title card-title">{t('trainings.backend.title')}</h2>
          <p>{t('trainings.backend.description')}</p>
          <p className="training-duration">{t('trainings.backend.duration')}</p>
        </div>
        
        <div className="training-item card">
          <h2 className="training-title card-title">{t('trainings.mobile.title')}</h2>
          <p>{t('trainings.mobile.description')}</p>
          <p className="training-duration">{t('trainings.mobile.duration')}</p>
        </div>
        
        <div className="training-item card">
          <h2 className="training-title card-title">{t('trainings.devops.title')}</h2>
          <p>{t('trainings.devops.description')}</p>
          <p className="training-duration">{t('trainings.devops.duration')}</p>
        </div>
      </div>
    </div>
  );
};

export default Trainings; 