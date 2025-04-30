import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // استخدم hook لاستخراج الترجمة

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        className={`language-btn ${i18n.language === 'ar' ? 'active' : ''}`}
        onClick={() => changeLanguage('ar')}
        title="العربية" // عرض الترجمة باللغة العربية
      >
        {i18n.language === 'ar' ? 'العربية' : 'Arabic'} {/* إذا كانت اللغة العربية، يتم عرض "العربية" وإلا يتم عرض "Arabic" */}
      </button>
      <button 
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        title="English" // عرض الترجمة باللغة الإنجليزية
      >
        {i18n.language === 'en' ? 'English' : 'إنجليزي'} {/* إذا كانت اللغة الإنجليزية، يتم عرض "English" وإلا يتم عرض "إنجليزي" */}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
