import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="error-page container">
      <h1>{t('error.title')}</h1>
      <p>{t('error.message')}</p>
      <Link to="/" className="btn btn-primary">
        {t('error.backToHome')}
      </Link>
    </div>
  );
};

export default ErrorPage; 