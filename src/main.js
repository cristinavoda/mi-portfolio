import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' 
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()


createApp(App).use(router).use(i18n).mount('#app')
// main.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('✅ ServiceWorker registrado con éxito:', registration);
        })
        .catch(error => {
          console.error('❌ Error al registrar el ServiceWorker:', error);
        });
    });
  }
  