<template>
  <div id="app">
 
    <Navbar />
    
    
    <main class="py-4">
      <router-view />
    </main>
   
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F7EDE4;
}
</style>
