<template>
    
    <canvas id="mouse-particles"></canvas>
    <div class="project-card">
        <img src="@/assets//comunicador/icon.png" alt="Icono Comunicador" class="project-icon" />
  <h3>Comunicar App</h3>
  <p>
    Una aplicación interactiva diseñada para facilitar la comunicación de personas no verbales.
    Desarrollada con HTML, CSS, JavaScript y Vue.js. Incluye galería personalizable, efectos visuales y soporte de voz.
  </p>
  <a href="https://comunicar-app.netlify.app/" target="_blank" class="project-link">Ver App</a>
</div>
<div class="project-card">
  <img src="@/assets/interiorista/icono-interiorismo.png" alt="Icono Interiorismo" class="project-icon" />
  <h3>ComforART - Interiorismo</h3>
  <p>
    Página web de presentación para un estudio de interiorismo. Diseño visual refinado con efecto cristal, video de fondo, navegación adaptable y paletas cromáticas elegantes.
    Desarrollada con HTML, CSS, JavaScript, TailwindCSS y Vue.js. Optimizada para ordenadores, tablets y móviles.
  </p>
  <a href="https://interiorista.netlify.app/" target="_blank" class="project-link">Ver Página</a>
</div>
<div class="project-card">
  <img src="@/assets/escribir/icon.png" alt="Icono Aprender Escribir" class="project-icon" />
  <h3>Aprender Escribir</h3>
  <p>
    Aplicación educativa diseñada para ayudar a niños a iniciarse en la escritura de forma visual e interactiva. 
    Cuenta con un diseño amigable, botones grandes, tipografía clara y animaciones simples que facilitan el aprendizaje.
    <br /><br />
    Desarrollada con HTML, CSS, JavaScript, TailwindCSS y Vue.js. Optimizada para ordenadores, tablets y móviles.
  </p>
  <a href="https://escribir-app.netlify.app/" target="_blank" class="project-link">Ver Página</a>
</div>


<button class="volver-btn" @click="$router.push('/Home')">
  ⬅️
</button>


</template>
<script setup> 

import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('mouse-particles')
  const ctx = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  let particles = []

  const mouse = {
    x: null,
    y: null,
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle())
    }
  })

  class Particle {
    constructor() {
      this.x = mouse.x
      this.y = mouse.y
      this.size = Math.random() * 4 + 1
      this.speedX = Math.random() * 2 - 1
      this.speedY = Math.random() * 2 - 1
      this.color = `hsl(${Math.random() * 360}, 100%, 70%)`
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY
      this.size *= 0.96
    }

    draw() {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p, index) => {
      p.update()
      p.draw()
      if (p.size < 0.5) {
        particles.splice(index, 1)
      }
    })
    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
})

</script >
<style scoped>
#mouse-particles {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;

}.project-card {
  background: rgba(1, 13, 22, 0.05);
  color: rgba(255, 255, 255, 0.945);
  font-size: x-large;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 10px 20px 20px rgba(239, 240, 240, 0.945);
  text-align: center;
  max-width: 300px;
  margin: 20px auto;
  margin-left: 30px;
  margin-top: 90px;
}
.project-icon {
  width: 100px;
  height: 100px;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: drop-shadow(0 0 5px #0a8585f6);
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}


@keyframes fadeInUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


.project-icon:hover {
  transform: scale(1.5) rotate(5deg);
  filter: drop-shadow(0 20px 10px #00ffff) brightness(1.2);
}

.project-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-top: 20px;
  
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  color: #00b4d8;
  text-decoration: none;
  font-weight: bold;
}
.project-link:hover {
  text-decoration: underline;
  color: rgb(62, 180, 235);
}

.volver-btn {
  background: none;
  border: none;
  font-size: 2rem; 
  cursor: pointer;
  color: #0f172a; 
  transition: transform 0.3s ease, color 0.3s ease;
  margin: 1rem;
}

.volver-btn:hover {
  transform: translateX(-5px);
  color: #0891b2; 
}
</style>