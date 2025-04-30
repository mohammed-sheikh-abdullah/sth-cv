import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container container">
      <h1 className="page-title">
        {t('contact.title')}
      </h1>
      <div className="contact-grid grid">
        <div className="contact-info card">
          <h2 className="card-title">{t('contact.methods.title')}</h2>
          
          <div className="contact-section">
            <h3>{t('contact.methods.email.label')}</h3>
            <p>{t('contact.methods.email.value')}</p>
          </div>
          
          <div className="contact-section">
            <h3>{t('contact.methods.phone.label')}</h3>
            <p>{t('contact.methods.phone.value')}</p>
          </div>
          
          <div className="contact-section">
            <h3>{t('contact.methods.address.label')}</h3>
            <p>{t('contact.methods.address.value')}</p>
          </div>
          
          <div className="contact-section">
            <h3>{t('contact.methods.hours.label')}</h3>
            <p>{t('contact.methods.hours.value')}</p>
          </div>
          
          <div className="contact-section">
            <h3>{t('contact.methods.social.label')}</h3>
            <ul className="social-links">
              <li>{t('contact.methods.social.linkedin')}</li>
              <li>{t('contact.methods.social.github')}</li>
              <li>{t('contact.methods.social.twitter')}</li>
            </ul>
          </div>
        </div>
        
        <div className="contact-message card">
          <h2 className="card-title">{t('contact.message.title')}</h2>
          <p>{t('contact.message.p1')}</p>
          <p>{t('contact.message.p2')}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 