<template>
   <canvas id="mouse-particles"></canvas>
  <div class="home">
    <h1 class="title">{{ $t('Cristina Voda-Desarrollador Fullstack')}}</h1>
    <p class="frase">{{ $t('Romper las barreras del espacio, tiempo y  silencio')}} </p>
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
      this.size = Math.random() * 7 + 3
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
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3)
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
}
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items:right;
  color: white;
  text-align:right;
  padding: -10px;
  margin-top: 200px;
}
.title {
  writing-mode: sideways-rl;           
  text-orientation: mixed;
 
  margin-top: 30px;
  font-size: large;
 

  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3.5s steps(20, end), blink 0.7s step-end infinite;
  color: white;
 
 
}

@keyframes typing {
  from { height: 0; }
  to { height: 80%; }
}

@keyframes blink {
  100% { border-color: transparent; }
}

.frase {
  writing-mode: horizontal-tb;
  text-orientation: mixed;
  font-size:xx-large; 
 max-width: 400px;
  opacity:initial;
  margin-bottom: 40px;
  overflow: hidden;
  animation: typing 3.5s steps(20, end), blink 0.7s step-end infinite;
}


.frase:hover:after {
        content: attr(data-text);
        position:inherit;
        left: 50%;
        transform: translateX(-50%);
        color:  #5ac2cc;
        padding: 10px 40px;
        border-radius: 5px;
        font-size:1cm;
    }

</style>
