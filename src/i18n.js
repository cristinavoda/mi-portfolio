
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
      contacto: 'contactame',
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
  },
presentacion: {
  saludo: 'Hola',
  parrafo1: 'Soy Cristina, IT-Desarrollo de Aplicaciones Web (FP Grado Superior-DAW) con pasión por crear soluciones digitales funcionales, accesibles y centradas en las personas. ',
  parrafo2: ' He desarrollado proyectos como COMUNICADOR , una app pensada para niños no verbales, inspirada en mi contacto con personas con autismo. También estoy trabajando en APRENDER ESCRIBIR, una aplicación educativa para ayudar a los niños en sus primeros pasos con la escritura, y he diseñado la página web :CRISTINA VODA INTERIORISTA-ComfortArt, centrada en el diseño de interiores con estilo y funcionalidad.',
  parrafo3: 'Creo firmemente que la tecnología puede mejorar la vida de muchas personas, y por eso quiero formar parte de equipos que desarrollen aplicaciones útiles, educativas e inclusivas.',
  parrafo4: 'Busco oportunidades laborales en remoto en el ámbito de desarrollo frontend,desarollo y programacion software, diseño web o administración web. Soy organizada, comprometida, con ganas de seguir aprendiendo y aportar valor real a través del código.',
},
skills: {
    apps: {
      title: 'Apps',
      description: 'Desarrollo de aplicaciones móviles'
    },
    web: {
      title: 'Páginas Web',
      description: 'Desarrollo web responsive'
    },
    diseño3D: {
      title: 'Diseño 3D',
      description: 'Modelado y render en 3D'
    }
  },
 apps: {
  title: 'Apps' ,
  descripcion: 'Los apps ,intuitivas,funcionales desarrolladas con pasión y diseño'
 },
 three: {
  title: "Diseño web",
  parrafo1: "Creando la apariencia de su sitio web",
  parrafo2: "La simplicidad es una de las reglas de oro del diseño web. Su público debe tener una experiencia agradable y positiva al usar su sitio web. ",
  parrafo3: "Ya sea que su objetivo sea leer contenido, ver un video o inscribirse en un curso, cada acción debe ser clara y concisa en todo el sitio web. Nuestro enfoque es crear un sitio web que fortalezca la marca de su empresa, garantizando a la vez facilidad de uso y simplicidad para su público.",
  parrafo4: "El proceso de desarrollo web comienza tomando los elementos gráficos (colores, fuentes, diseño, imágenes) definidos en el proceso de diseño y codificándolos utilizando los estándares de la industria web (PHP, HTML5, CSS3, JS, jQuery). Esto generalmente se realiza codificando primero la página de inicio, seguida de las plantillas para las páginas interiores. Cuando el sitio web esté listo para su revisión, se le proporcionarán los datos de inicio de sesión para verlo antes de su lanzamiento al público. " ,
  parrafo5: "También se le proporcionarán instrucciones sobre cómo actualizar su sitio web." ,
  parrafo6: "Todos los sitios web que creamos se han creado con temas de WordPress personalizados y a medida, codificados desde cero."
 },
 web: {
  title: "Diseño Web Responsivo",
  parrafo1: 'Orientado a computadoras de escritorio, portátiles, tabletas y smartphones',
  parrafo2: "Un diseño responsivo significa que su sitio web se redimensiona con fluidez para una visualización óptima, independientemente del tamaño de la pantalla o el dispositivo (computadora de escritorio, portátil, tableta o smartphone). Esto garantiza la facilidad de uso y una mejor experiencia para el usuario, sin necesidad de desplazarse, desplazarse ni redimensionar. Es mucho más probable que su público disfrute de su sitio web en un dispositivo móvil sin necesidad de hacer zoom para leer el texto o encontrar el menú de navegación.",
  parrafo3: "Se prevé que el uso de internet móvil empezará a eclipsar el uso de internet en computadoras de escritorio y portátiles en 2014.",
  parrafo4: "Más de una cuarta parte de todas las búsquedas en Google se realizan actualmente desde dispositivos móviles. A medida que aumenta el número de personas que utilizan dispositivos móviles para acceder a internet, su público puede crecer con él utilizando un diseño responsivo para su sitio web.",
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
      contacto: 'contact',
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
  },
  presentacion: {
  saludo: 'Hello',
  parrafo1: "I'm Cristina, an IT-Web Application Developer (FP Grado Superior-DAW) with a passion for creating functional, accessible, and people-centered digital solutions. I've developed projects such as COMUNICADOR, an app designed for non-verbal children, inspired by my contact with people with autism.I'm also working on <strong>Aprender Escribir</strong>, an educational app to help children take their first steps with writing, and I designed the website Interiorista – ComfortArt, focused on interior design with style and functionality." ,
  parrafo2: " I'm also working on LEARNING TO WRITE, an educational app to help children take their first steps with writing, and I designed the website CRISTINA VODA DESIGNER OF INTERIORS-ComfortArt, focused on interior design with style and functionality. ",
  parrafo3: "I firmly believe that technology can improve the lives of many people, and that's why I want to be part of teams that develop useful, educational, and inclusive applications.",
  parrafo4:  "I'm looking for remote job opportunities in the fields of front-end development, software development and programming, web design, or web administration. I'm organized, committed, eager to continue learning and adding real value through code.",
  },

  skills: {
    apps: {
      title: 'Apps',
      description: 'Mobile app development'
    },
    web: {
      title: 'Web Pages',
      description: 'Responsive web development'
    },
    diseño3D: {
      title: '3D Design',
      description: '3D modeling and rendering'
    }
  },
  apps: {
  title: 'Apps' ,
  descripcion: 'The apps, intuitive, functional, developed with passion and design'
 },

 three: {
  title: "Web Design",
  parrafo1: "Creating Your Website's Look and Feel",
  parrafo2: "Simplicity is one of the golden rules of web design. Your audience should have a pleasant and positive experience using your website. ",
  parrafo3: "Whether their goal is to read content, watch a video, or enroll in a course, every action should be clear and concise throughout the website. Our focus is on creating a website that strengthens your company's brand, while ensuring ease of use and simplicity for your audience.",
  parrafo4: "The web development process begins by taking the graphic elements (colors, fonts, layout, images) defined in the design process and coding them using web industry standards (PHP, HTML5, CSS3, JS, jQuery). This is typically done by coding the homepage first, followed by templates for the inner pages. When the website is ready for review, you will be provided with login information to view it before it is released to the public. ",
  parrafo5: "You will also be provided with instructions on how to update your website.",
  parrafo6: "Every website we create is built with custom WordPress themes, coded from scratch."

 },
 web: {
  title: "Responsive Web Design ",
  parrafo1: 'Targeting Desktops, Laptops, Tablets, and Smartphones',

  parrafo2: "A responsive design means your website resizes fluidly for optimal viewing, regardless of the screen size or device (desktop, laptop, tablet, or smartphone).",
  parrafo3: "This ensures ease of use and a better user experience, without the need for scrolling, panning, or resizing",
  parrafo4: "Mobile internet usage is projected to begin eclipsing desktop and laptop internet usage by 2014. More than a quarter of all Google searches are currently conducted from mobile devices. As the number of people using mobile devices to access the internet increases, your audience can grow with it by using a responsive design for your website.",
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
