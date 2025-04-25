import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Contacto from '../views/ContactoView.vue';
import Proyectos from '../views/ProyectosView.vue';
import Presentacion from '../views/Presentacion.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/contacto', name:'contacto' , component: Contacto },
  { path: '/proyectos', name:'proyectos' , component: Proyectos },
  { path: '/presentacion', name:'presentacion' , component: Presentacion },
  {
    path: '/skills/apps',
    name: 'Apps',
    component: () => import('@/views/skills/Apps.vue')
  },
  {
    path: '/skills/web',
    name: 'Web',
    component: () => import('@/views/skills/Web.vue')
  },
  {
    path: '/skills/3d',
    name: 'ThreeD',
    component: () => import('@/views/skills/ThreeD.vue')
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
