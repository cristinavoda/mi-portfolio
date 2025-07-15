<template>
<div class= "skill-detaill">{{ $t('three.title') }} 
  <p>{{ $t('three.parrafo1') }}</p>  
   
    <p>{{ $t('three.parrafo2') }}</p>
    
    <p>{{ $t('three.parrafo3') }}</p>

    <p>{{ $t('three.parrafo4') }}</p>
    <p>{{ $t('three.parrafo5') }}</p>
    <p>{{ $t('three.parrafo6') }}</p>

    
   

    <button class="volver-btn" @click="$router.push('/Presentacion')">
      ⬅️ 
    </button></div>
</template>
 <style>
 .skill-detaill 
 {background: rgba(230, 233, 232, 0.11);
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
.volver-btn:hover {
  background-color: #006d77;
}

</style>