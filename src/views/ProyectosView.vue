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
  background: rgba(255, 255, 255, 0.05);
  color: azure;
  font-size: x-large;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
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
  filter: drop-shadow(0 0 5px #00ffffa6);
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

/* Al cargar */
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

/* Hover animado */
.project-icon:hover {
  transform: scale(1.2) rotate(5deg);
  filter: drop-shadow(0 0 10px #00ffff) brightness(1.2);
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


</style>