<template>
    <canvas id="mouse-particles"></canvas>

  <div class="contacto-form-container">
    
    <div class="float-box">

    <h2>{{ $t('contacto.contacto') }}</h2>
   
<form
  action="https://formspree.io/f/mwpokbzj"
  method="POST"
>
  <label>
    {{ $t('contacto.tuEmail')}}
    <input type="email" name="email">
  </label>
  <label>
     {{ $t('contacto.tuMensaje')}}
    
    <textarea name="message"></textarea>
  </label>
 
  <button type="submit"> {{ $t('contacto.enviar')}}
    </button>
</form>

    
    
  </div>
  </div>
  <button class="volver-btn" @click="$router.push('/Home')">
  ⬅️
</button>
 
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'
import { onMounted } from 'vue'



  
  gsap.from('.contact-form', {
    duration: 1.2,
    opacity: 0,
    y: 100,
    ease: 'power3.out'
  });

  
  gsap.to('.submit-btn', {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: 'sine.inOut'
  });

 
  const fields = document.querySelectorAll('.float-box, .contact-form input, .contact-form textarea');

  fields.forEach((field) => {
    field.addEventListener('focus', () => {
      gsap.to(field, {
        scale: 1.03,
        borderColor: '#00ffff',
        duration: 0.3
      });
    });

    field.addEventListener('blur', () => {
      gsap.to(field, {
        scale: 1,
        borderColor: '#00ffcc',
        duration: 0.3
      });
    });
  });





const showThankYou = ref(false)

onMounted(() => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    showThankYou.value = true;

    
    gsap.fromTo(
      '.thank-you-message',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    
    setTimeout(() => {
      gsap.to('.thank-you-message', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          showThankYou.value = false;
        },
      });
    }, 4000); 
  });
});

const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    gsap.to(input, { duration: 0.3, scale: 1.05, borderColor: '#00ffcc' });
  });
  input.addEventListener('blur', () => {
    gsap.to(input, { duration: 0.3, scale: 1, borderColor: '#ccc' });
  });
});


export default {
  name: 'ContactoView',
  setup() {
    const nombre = ref('')
    const email = ref('')
    const mensaje = ref('')

    const handleSubmit = () => {
      console.log('Formulario enviado:', {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
      })

      
      alert('Gracias por tu mensaje, pronto me pondré en contacto.')
      
      
      nombre.value = ''
      email.value = ''
      mensaje.value = ''
    }

    return {
      nombre,
      email,
      mensaje,
      handleSubmit
    }
  }
}
</script>

<style >
#mouse-particles {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}

#contact-form-container {
  display: flex;
  justify-content: center;
  margin-left: -200px;
  margin-bottom: 60px;
  align-items: center;
  width: 380px;
  height:480px;
  background-color:transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 17px 20px 25px 10px rgba(247, 247, 247, 0.938);
}

 

h2 {
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #f8f8fa, #80e2dd); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-left: -10px;}

  .float-box{
  max-width: 300px;
  min-width: 200px;
  margin-left: 20px;
  background: rgba(1, 13, 22, 0.05);;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(248, 252, 253, 0.295);
  box-shadow: 10px 10px 5px 5px rgba(223, 229, 230, 0.295);
  backdrop-filter: blur(4px);
  color: white;
  transition: all 0.3s ease;
  margin-top: 90px;
  margin-left: -1px;
  padding: 40px;
  text-align: center;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 0,5px solid #f5f8f8;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  color: rgb(250, 251, 252);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
   backdrop-filter: blur(10px);
  box-shadow: 10px 10px 8px 10px #f2f3f3;
  border-color: #eff5f4;
}
.submit-btn {
  padding: 1rem 2rem;
  border: #e4e9e8;
  background: linear-gradient(45deg, #2225ca, #80e2dd);
  color: rgba(12, 136, 109, 0.5);
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
}

  


.submit-button:hover {
  background: #32bebe;
  transform: scale(1.05);
  box-shadow: 0 0 15px #ecf0ef;
  
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
  
}

label {
  display: block;
  background-color: rgba(1, 13, 22, 0.05);
   backdrop-filter: blur(10px);
   margin-bottom: 5px;
  font-weight: bold;
  color: #f5f8f8;
}

input,
textarea {
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  color:#f9faf9;
  margin-left: -20px;
  font-size: 16px;
  background-color: transparent;
  backdrop-filter: blur(10px);
  border: 1px solid #f8fdfd;
  border-radius: 5px;
}

textarea {
  resize: none;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #0a6c74;
  background-color: #e8eeee;
  border: none;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #9bf5f5;
}
.thank-you-message {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #00ffcc;
  opacity: 0;
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
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr; 
  }
}
</style>
