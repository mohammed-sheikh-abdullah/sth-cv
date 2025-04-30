import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './translations';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en: {
        translation: translations.en
      },
      ar: {
        translation: translations.ar
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'], // List of supported languages
    debug: process.env.NODE_ENV === 'development',
    
    detection: {
      // Order of language detection
      order: ['localStorage', 'navigator'],
      // Cache language in localStorage
      caches: ['localStorage'],
      // Default language
      lookupLocalStorage: 'i18nextLng',
    },
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    react: {
      useSuspense: true,
    },
  });

// Function to handle RTL/LTR direction based on language
export const setDocumentDirection = (lng) => {
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.setAttribute('dir', 'ltr');
  }
};

// Set initial direction based on current language
i18n.on('languageChanged', (lng) => {
  setDocumentDirection(lng);
});

// Set initial direction
setDocumentDirection(i18n.language);

export default i18n;