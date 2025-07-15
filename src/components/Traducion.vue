<template>
    <span>{{ $t(clave) }}</span>
<Traducion clave="sidebar.Inicio" />
<Traducion clave="sidebar.Proyectos" />
<Traducion clave="sidebar.Presentacion" />
<Traducion clave="sidebar.Contacto" />

  </template>
  
  <script setup>
  const props = defineProps({
    clave: {
      type: String,
      required: true
    }
  })
  console.log('Traduccion clave:', props.clave)
  </script>
  