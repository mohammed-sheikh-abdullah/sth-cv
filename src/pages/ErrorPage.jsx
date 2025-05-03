import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="error-page container">
      <h1>{t('error.title')}</h1>
      <p>{t('error.message')}</p>
      <button 
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        {t('error.backToHome')}
      </button>
    </div>
  );
};

export default ErrorPage; 