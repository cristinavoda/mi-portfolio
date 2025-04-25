import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    saludo: 'Hola, soy Cristina',
    contacto: 'Contactame',
    proyectos: 'Proyectos',
    sobreMi: 'Sobre mí',
    enviar: 'Enviar',
    frase:'Romper las barreras del espacio, tiempo y del silencio',
    volver: 'Volver a Sobremí'
  },
  en: {
    saludo: 'Hi, I\'m Cristina',
    contacto: 'Contact',
    proyectos: 'Projects',
    sobreMi: 'About me',
    enviar: 'Send',
    frase:'Breaking the barriers of space, time and silence',
    volver: 'Volver a Sobre mí'
  }
}

const i18n = createI18n({
  legacy: false, // usamos Composition API
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en', // idioma alternativo
  messages
})

export default i18n
