<template>
  <div id="app">

    <div id="background-container">
    <video autoplay muted loop id="bg-video">
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>

    <div class="flags">
    <img src="@/assets/flags/es.svg" alt="Español" @click="setLang('es')" class="flag" />
  <img src="@/assets/flags/en.svg" alt="English" @click="setLang('en')"  class="flag"/>
</div>


    <div class="sidebar-outsideWrapper" @click.self="closeSidebar">
    
  
    <div class="toggle" @click="handleClick" >
      &#9776;
    </div>
  </div>
  
      <div class="sidebar" :class="{ visible: showSidebar }">
      <router-link to="/" @click="closeSidebar">{{ $t('sidebar.inicio') }}</router-link>
      <router-link to="/proyectos" @click="closeSidebar">{{ $t('sidebar.proyectos') }}</router-link>
      <router-link to="/presentacion" @click="closeSidebar">{{ $t('sidebar.presentacion') }}</router-link>
      <router-link to="/contacto" @click="closeSidebar">{{ $t('sidebar.contacto') }}</router-link>
    </div>
    
<main> <router-view></router-view></main>
    
    
  </div>
 
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import clickSoundUrl from '@/assets/sounds/hover-sound.mp3'

onMounted(() => {
  AOS.init()
})


const soundFiles = [
  new Audio(require('@/assets/sounds/click1.mp3')),
  new Audio(require('@/assets/sounds/click2.mp3')),
  new Audio(require('@/assets/sounds/click3.mp3'))
]


function setLang(lang) {
  locale.value = lang
  console.log('Idioma cambiado a:', lang)
}


const showSidebar = ref(false)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
  playRandomClickSound()
   

  if (showSidebar.value) {
    setTimeout(() => {
     showSidebar.value = false;   
    }, 7000);
  }

}

function closeSidebar() {
  showSidebar.value = false
}

function handleClick() {
  playClickSound()
  toggleSidebar()
}

const clickSound = new Audio(clickSoundUrl)


const canPlaySounds = ref(false)

onMounted(() => {
  window.addEventListener('click', () => {
    canPlaySounds.value = true
  }, { once: true })
})

function playClickSound() {
  if (canPlaySounds.value) {
    clickSound.currentTime = 0
    clickSound.play()
  }
}
function playRandomClickSound() {
  if (canPlaySounds.value) {
    const sound = soundFiles[Math.floor(Math.random() * soundFiles.length)]
    sound.currentTime = 0
    sound.play()
  }
}



</script>


<style>

#bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}


.toggle {
  position: fixed;
  top: 20px;
  right: 40px;
  font-size: 62px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
  z-index: 2;
}


.flags {
  position: fixed;
  top: 40px;
  left: 20px;
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.flags img {
  width: 30px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}

.flags img:hover {
  transform: scale(1.1);
}



.sidebar {
  background-color: rgb(4, 49, 51);
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  right: 0;
  height:fit-content;
  width: 200px;
  transform: translateX(100%);
  transition: transform 0.9s ease; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  padding: 20px;
  z-index: 10;
}


.sidebar.visible {
  transform: translateX(0%);
}



.sidebar a {
  color: white;
  font-family: 'Inter';
   backdrop-filter: blur(1px);
  text-decoration: none;
  font-size: 38px;
  transition: color 0.3s ease;
}

.sidebar a:hover {
  color: #90e0ef;
}
.glitch-flash {
  animation: flash 0.4s ease-in-out;
}

@keyframes flash {
  0% {
    filter: brightness(1.5) contrast(1.2);
    transform: scale(1.01);
  }
  50% {
    filter: brightness(0.8) contrast(1.5);
    transform: scale(0.99);
  }
  100% {
    filter: brightness(1) contrast(1);
    transform: scale(1);
  }
}

</style>
