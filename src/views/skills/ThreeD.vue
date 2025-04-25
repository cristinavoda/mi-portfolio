<template>
<div class= "skill-detaill">Website Design — Creating the look & feel of your website
    Simplicity is one of the golden rules of website design. The audience should have an enjoyable, positive experience when using your website. Whether their objective is reading content, watching a video or enrolling in a course, every action should be clear and concise throughout the website. Our approach is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
    The website development process starts by taking the graphical elements (colours, fonts, layout, images) defined in the design process and coding them using web industry standards (PHP, HTML5, CSS3, JS, jQuery). This is typically done by first coding the home page, followed by templates for the interior pages. When the website is ready for review you will be supplied with login details to view the website before it is launched to the public. You will also be supplied with instructions on how to update your website.
    All of the websites that we create have been built using tailor-made, custom WordPress themes which have been coded from scratch.

    <button class="volver-btn" @click="$router.push('/Presentacion')">
      ⬅️ {{ $t('volver') || 'Volver' }}
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