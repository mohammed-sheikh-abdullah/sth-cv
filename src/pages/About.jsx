import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container container">
      <h1 className="page-title">
        {t('about.title')}
      </h1>
      <div className="">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
        <p>{t('about.p4')}</p>
      </div>
    </div>
  );
};

export default About; 