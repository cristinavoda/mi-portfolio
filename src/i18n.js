
import { createI18n } from 'vue-i18n'

const messages = {

  es: {
    sidebar: {
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      presentacion: 'Presentación',
      contacto: 'Contáctame'
    },
    home: {
      titulo: 'Cristina Voda - Desarrolladora Fullstack',
      frase: 'Romper las barreras del espacio, tiempo y silencio'
    },
    contacto: {
      tuEmail: 'Tu email',
      tuMensaje: 'Tu mensaje',
      enviar: 'Enviar'
    },


    
  proyectos: {
    titulo: 'Proyectos',
    cards: {
      comunicador: {
     titulo: 'Comunicar App',
  descripcion: `Una aplicación interactiva diseñada para facilitar la comunicación de personas no verbales.
Desarrollada con HTML, CSS, JavaScript y Vue.js. Incluye galería personalizable, efectos visuales y soporte de voz.`,
  enlace: 'Ver página'
},

     
      interiorismo: {
        titulo: 'ComforART - Interiorismo',
        descripcion: `Página web de presentación para un estudio de interiorismo.
        Diseño visual refinado con efecto cristal, video de fondo, navegación adaptable y paletas cromáticas elegantes.
        Desarrollada con HTML, CSS, JavaScript, TailwindCSS y Vue.js. Optimizada para ordenadores, tablets y móviles.`,
        enlace: 'Ver Página'
      },
      
      escribir: {
        titulo: 'Aprender Escribir',
        descripcion: `Aplicación educativa diseñada para ayudar a niños a iniciarse en la escritura de forma visual e interactiva.
        Diseño amigable, botones grandes, tipografía clara y animaciones simples que facilitan el aprendizaje.
        Desarrollada con HTML, CSS, JavaScript, TailwindCSS y Vue.js. Optimizada para ordenadores, tablets y móviles.`,
        enlace: 'Ver Página'
      }
    }
  }

  },


  en: {
    sidebar: {
      inicio: 'Home',
      proyectos: 'Projects',
      presentacion: 'About',
      contacto: 'Contact'
    },
    home: {
      titulo: 'Cristina Voda - Fullstack Developer',
      frase: 'Breaking the barriers of space, time and silence'
    },
    contacto: {
      tuEmail: 'Your email',
      tuMensaje: 'Your message',
      enviar: 'Send'
    },
     proyectos: {
    titulo: 'Projects',
    cards: { 


       comunicador: {
     titulo: 'Communicate App',
     descripcion: `An interactive app designed to facilitate communication between non-verbal people .
     Developed with HTML, CSS, JavaScript, and Vue.js. Includes a customizable gallery, visual effects, and voice support.`,
     enlace: 'View page'
     },
 
          interiorismo: {
        titulo: 'ComforART - Interior Design',
        descripcion: `Showcase website for an interior design studio.
        Refined visual design with glassmorphism effect, background video, responsive navigation and elegant color palettes.
        Developed with HTML, CSS, JavaScript, TailwindCSS and Vue.js. Optimized for desktop, tablet and mobile.`,
        enlace: 'View Page'
      },
      escribir: {
        titulo: 'Learn to Write',
        descripcion: `Educational app designed to help children start writing visually and interactively.
        Friendly design, large buttons, clear typography and simple animations to make learning easier.
        Developed with HTML, CSS, JavaScript, TailwindCSS and Vue.js. Optimized for desktop, tablet and mobile.`,
        enlace: 'View Page'
      }
    }
  }


  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

export default i18n
