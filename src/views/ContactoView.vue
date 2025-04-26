<template>
  <div class="contacto-form-container">
    
    <div class="float-box">
    <h2>{{ $t('Contacto') }}</h2>
   <!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/mwpokbzj"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>

    
    
  </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'
import { onMounted } from 'vue'


onMounted(() => {
  // Entrada del formulario
  gsap.from('.contact-form', {
    duration: 1.2,
    opacity: 0,
    y: 100,
    ease: 'power3.out'
  });

  // Hover suave en botón
  gsap.to('.submit-btn', {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: 'sine.inOut'
  });

  // Efectos al enfocar campos
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
});




const showThankYou = ref(false)

onMounted(() => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Mostrar el mensaje
    showThankYou.value = true;

    // Animación de fade in
    gsap.fromTo(
      '.thank-you-message',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Ocultar luego de unos segundos
    setTimeout(() => {
      gsap.to('.thank-you-message', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          showThankYou.value = false;
        },
      });
    }, 4000); // visible por 4 segundos
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

      // Aquí podrías agregar lógica para enviar datos a un servidor, mostrar un mensaje de éxito, etc.
      alert('Gracias por tu mensaje, pronto me pondré en contacto.')
      
      // Limpiar campos del formulario
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

#contact-form-container {
  display: flex;
  justify-content: center;
  margin-left: -200px;
  margin-bottom: 60px;
  align-items: center;
  width: 380px;
  height:480px;
  background-color:transparent;
}



h2 {
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #2225ca, #80e2dd); /* Cambia los colores aquí */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-left: -10px;}

  .float-box{
  max-width: 300px;
  min-width: 200px;
  margin-left: 20px;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 16px;
  border: 3px solid #108864;
  box-shadow: 17px 20px 25px rgba(0, 255, 204, 0.4);
  backdrop-filter: blur(10px);
  color: white;
  transition: all 0.3s ease;
  margin-top: 90px;
  backdrop-filter: blur(1px);
  box-shadow: 15px 10px 6px rgba(57, 160, 160, 0.89);
  margin-left: -1px;
  padding: 40px;
  text-align: center;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 1px solid #00ffcc;
  border-radius: 8px;
  color: white;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  box-shadow: 0 0 8px #00ffcc;
  border-color: #00ffcc;
}
.submit-btn {
  padding: 1rem 2rem;
  border: none;
  background: linear-gradient(45deg, #2225ca, #80e2dd);
  color: black;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
}

  


.submit-button:hover {
  background: #32bebe;
  transform: scale(1.05);
  box-shadow: 0 0 15px #156152;
  
}

/* Form Styles */
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
  margin-bottom: 5px;
  font-weight: bold;
  color: #099e8f;
}

input,
textarea {
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  color:#0d8a9b;
  margin-left: -20px;
  font-size: 16px;
  background-color: rgb(252, 253, 253);
  backdrop-filter: blur(5px);
  border: 2px solid #d8f5e1;
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
  color: #1cd180;
  background-color: #e8eeee;
  border: none;
  border-radius: 5px;
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


</style>
