<template>
    <span>{{ $t(clave) }}</span>
  </template>
  
  <script setup>
  defineProps({
    clave: {
      type: String,
      required: true
    }
  })
  </script>
  