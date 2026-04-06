import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador automáticamente
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "hero_title": "Tattoo Artist in Medellín",
          "hero_desc": "Custom and professional tattoos designed for travelers and expats.",
          "book_now": "BOOK YOUR SESSION",
          "insta_card": "VIEW LATEST ART",
          "whatsapp_msg": "Hi! I'd like to book a tattoo session."
        }
      },
      es: {
        translation: {
          "hero_title": "Tatuador en Medellín",
          "hero_desc": "Tatuajes personalizados y profesionales diseñados para locales y extranjeros.",
          "book_now": "AGENDAR CITA",
          "insta_card": "VER ÚLTIMAS PIEZAS",
          "whatsapp_msg": "¡Hola! Me gustaría agendar una sesión de tatuaje."
        }
      }
    },
    fallbackLng: "en", // Si no detecta español, por defecto será inglés
    interpolation: { escapeValue: false }
  });

export default i18n;