<template>
    <button @click="$emit('toggle')" class="hamburger">☰</button>
  </template>
  
  <style scoped>
  .hamburger {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 32px;
    color: #f5faf9;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
  }
  </style>
  