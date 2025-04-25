<template>
    <div class="skill-detail">
     
    Diseño Web Responsivo — Orientado a computadoras de escritorio, portátiles, tabletas y smartphones
Un diseño responsivo significa que su sitio web se redimensiona con fluidez para una visualización óptima, independientemente del tamaño de la pantalla o el dispositivo (computadora de escritorio, portátil, tableta o smartphone). Esto garantiza la facilidad de uso y una mejor experiencia para el usuario, sin necesidad de desplazarse, desplazarse ni redimensionar. Es mucho más probable que su público disfrute de su sitio web en un dispositivo móvil sin necesidad de hacer zoom para leer el texto o encontrar el menú de navegación.

 Se prevé que el uso de internet móvil empezará a eclipsar el uso de internet en computadoras de escritorio y portátiles en 2014. Más de una cuarta parte de todas las búsquedas en Google se realizan actualmente desde dispositivos móviles. A medida que aumenta el número de personas que utilizan dispositivos móviles para acceder a internet, su público puede crecer con él utilizando un diseño responsivo para su sitio web.
 <button class="volver-btn" @click="$router.push('/Presentacion')">
      ⬅️ {{ $t('volver') || 'Volver' }}
    </button>
</div>
</template>
<style>
.skill-detail
{
  background: rgba(230, 233, 232, 0.11);
  color: azure;
  font-size: x-large;
  padding: 20px;
  
  box-shadow: 15px 15px 10px rgba(30, 177, 164, 0.3);
  text-align: center;
  
  border: 1px solid rgba(21, 163, 144, 0.2);
  
  margin-top: 6px;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: drop-shadow(5px 10px 5px #00ffffa6);
  animation: fadeInUp 1s ease-out forwards, pulse 3s ease-in-out infinite;
  max-width: 300px;
  margin: 20px auto;
  margin-left: -10px;
  margin-top: 100px;}

  .skill-detaill :hover {transform: scale(1.1) rotate(-3deg);
  filter: drop-shadow(12px 42px 12px #229797) brightness(1.2);}
  .volver-btn {
  margin-top: 2rem;
  background-color: #0a9396;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.volver-btn {
  margin-top: 2rem;
  background-color: #0a9396;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.volver-btn:hover {
  background-color: #006d77;
}

</style>