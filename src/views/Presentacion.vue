<template>
  <div class="about-container">
    
    <canvas ref="codeCanvas" class="code-canvas"></canvas>
    <div class="about-content">
 

      <div class="profile" data-aos="fade-up" data-aos-delay="300">
      


      <img src="@/assets/tu-foto.jpg" alt="Foto"  class="profile-img"
      @mouseenter="playHoverSound" />
      <h1 data-aos="fade-down">Soy Cristina</h1>
      <p>Desarrolladora de Aplicaciones Web</p>

    </div>

    </div>
   

      <div class="skills-container">
  <div
    class="skill-card"
    v-for="(skill, index) in skills"
    :key="index"
    @mouseover="playHoverSound"
     @click="goToSkill(skill.route)"
  >
    <h3>{{ skill.title }}</h3>
    <p>{{ skill.description }}</p>
  </div>
  <button class="volver-btn" @click="$router.push('/Home')">
  ⬅️
</button>

</div>
    </div>  <!-- Skills Minicards -->
  
   
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function goToSkill(route) {
  router.push(route);
}


const codeCanvas = ref(null);

let hoverAudio;
const skills = [
  {
    title: 'Apps',
    description: 'Desarrollo de aplicaciones móviles',
    route: '/skills/apps'
  },
  {
    title: 'Páginas Web',
    description: 'Desarrollo web responsive',
    route: '/skills/web'
  },
  {
    title: 'Diseño 3D',
    description: 'Modelado y render en 3D',
    route: '/skills/3d'
  },
];


onMounted(() => {
  const canvas = codeCanvas.value;
  const ctx = canvas.getContext('2d');

  // Ajusta tamaño del canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Caracteres para la animación
  const letters = '01<>!{}[]+=-_:;'.split('');
  const fontSize = 19;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  const draw = () => {
    // Efecto fade
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Caracteres en color neón
    ctx.fillStyle = '#00ffcc';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  setInterval(draw, 50);
  // 🎧 Inicializar sonido hover
  hoverAudio = new Audio(require('@/assets/sounds/hover-sound.mp3'));
  hoverAudio.volume = 0.3;
});
const hoverSound = new Audio(require('@/assets/sounds/hover-sound.mp3'))

function playHoverSound() {
  hoverSound.currentTime = 0 // reinicia el sonido cada vez
  hoverSound.play()
}



</script>

<style scoped>

.about-container {
  position: relative;
 min-height: 2560vh;
  overflow: hidden;
  background: #000;
  color: #fff;
}
.profile img {
  width: 150px; 
  border-radius: 72%;
  border: 1px solid rgba(60, 212, 192, 0.2);
  margin-top: -160px;
  margin-left: -180px;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: drop-shadow(0 0 5px #00ffffa6);
  animation: fadeInUp 1s ease-out forwards, pulse 3s ease-in-out infinite;
  opacity: 0;

}
.profile-img:hover {
  transform: scale(1.1) rotate(-3deg);
  filter: drop-shadow(12px 12px 12px #00ffff) brightness(1.2);
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

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}


.code-canvas {
  position: absolute;
  top: 0;
  
  left: 0;
  z-index: 0;
}

.about-content {
  
  position: relative;
  z-index: 1;
  text-align: left;
  padding-top: 20vh;
  color: #fff;
  margin-left: 190px;
  margin-top: 50px;
}


/* Skills Grid */
.skills-container
 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 29px;
  width: 90%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  margin-left: auto;
}

.skill-card {
  background: rgba(250, 247, 247, 0.562);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(187, 236, 217, 0.808);
  box-shadow: 10px 20px 40px rgba(21, 73, 64, 0.4);
  border-radius: 12px;
  padding: 1rem;
  
  margin-left: -20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.skill-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 30px 2px 20px rgba(30, 201, 170, 0.747);
  transform: scale(0.85);
}

@media (max-width: 600px) {
  .skill-card {
    font-size: 0.95rem;
    padding: 0.8rem;
  }
}
.volver-btn {
  background: #fff;
  border: none;
  font-size: 2rem; /* Tamaño grande y pro */
  cursor: pointer;
  color: #155d6e; /* Azul oscuro profesional (puedes cambiarlo) */
  transition: transform 0.3s ease, color 0.3s ease;
  margin: 1rem;
}

.volver-btn:hover {
  transform: translateX(-5px);
  color: #e4eff1; /* Un cyan elegante en hover */
}

</style>
