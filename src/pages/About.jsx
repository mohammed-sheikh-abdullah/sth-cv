import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
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
    </Layout>
  );
};

export default About;