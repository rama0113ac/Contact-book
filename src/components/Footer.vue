<template>
    <div class="page-container">
      <div class="content">
      
        <slot></slot>
      </div>

      <footer class="bg-dark text-white py-3 text-center">
        <p class="mb-0">
          &copy; {{ new Date().getFullYear() }} Contact Book. All Rights Reserved.
        </p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>

  .page-container {
margin-top:70px !important;
    display: flex;
    flex-direction: column;
  }
  

  .content {
    flex: 1;
  }

  footer {
    background-color: #343a40;
    color: white;
   
    padding-bottom: 1rem;
    text-align: center;
    width: 100%;
  }
  

  footer p {
    font-size: 0.9rem;
    margin: 0;
  }
  </style>
  