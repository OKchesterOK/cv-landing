// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // loads translations from your server (public/locales)
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'ua', // fallback language if user language is not available
    debug: true, // set to true to see helpful logs in console
    
    supportedLngs: ['ua', 'en'],

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // Path to your translation files
      // This will look for:
      // - /locales/ua/translation.json for Ukrainian
      // - /locales/en/translation.json for English (if you add an en.json later)
    },
    
    // Optional: configure namespaces if you plan to split translations into multiple files per language
    // ns: ['translation'], // default namespace
    // defaultNS: 'translation', // default namespace

    react: {
      useSuspense: false // Set to true if you want to use React.Suspense for loading translations
    }
  });

export default i18n;