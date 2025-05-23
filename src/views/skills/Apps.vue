<template>
    <div class="skill-detail">
      <h1>Apps</h1>
      <p>Los apps ,intuitivas,funcionales desarrolladas con pasión y diseño  </p>
      
      
      <button class="volver-btn" @click="$router.push('/Presentacion')">
      ⬅️ 
    </button>
    </div>
   
  </template>
<style >
 .skill-detail 
 {background: rgba(255, 255, 255, 0.05);
  color: azure;
  font-size: x-large;
  padding: 20px;
  border-radius: 70%;
  box-shadow: 10px 5px 10px rgba(98, 206, 197, 0.3);
  text-align: center;
  border-radius: 70%;
  border: 1px solid rgba(60, 212, 192, 0.2);
  margin-top: 6px;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: drop-shadow(5px 10px 5px #00ffffa6);
  animation: fadeInUp 1s ease-out forwards, pulse 3s ease-in-out infinite;
  max-width: 300px;
  margin: 20px auto;
  margin-left: -10px;
  margin-top: 290px;}

  .skill-detaill :hover {transform: scale(1.1) rotate(-3deg);
  filter: drop-shadow(0 12px 12px #00ffff) brightness(1.2);}
 
  .volver-btn {

  margin-top: 2rem;
  background-color: #0a9396;
  filter: drop-shadow(5px 10px 5px #99b1b1a6);
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