<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div class="container">
      
        <router-link to="/" class="navbar-brand fw-bold fs-4">
          Contact Book
        </router-link>
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link" active-class="active">
                Add Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  .navbar {
    border-radius: 0 0 8px 8px;
  }
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .nav-link {
    font-size: 1rem;
    font-weight: 500;
    margin-right: 15px;
  }
  .nav-link.active {
    color: #ffc107 !important; 
  }
  </style>
  