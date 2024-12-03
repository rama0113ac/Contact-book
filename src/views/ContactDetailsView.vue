<template>
  <div class="container">
    <div v-if="contact" class="card shadow-lg">
      <div class="card-header bg-primary text-white text-center">
        <p class="mb-0 fs-5">Contact Details</p>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">First Name:</div>
          <div class="col-md-6 text-dark">{{ contact.firstName || "Not available" }}</div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">Last Name:</div>
          <div class="col-md-6 text-dark">{{ contact.lastName || "Not available" }}</div>
        </div>


        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">Email:</div>
          <div class="col-md-6 text-dark">{{ contact.email || "Not available" }}</div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">Phone:</div>
          <div class="col-md-6 text-dark">{{ contact.phone || "Not available" }}</div>
        </div>

      
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">Address:</div>
          <div class="col-md-6 text-dark">{{ contact.address || "Not available" }}</div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">City:</div>
          <div class="col-md-6 text-dark">{{ contact.city || "Not available" }}</div>
        </div>

      
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">Birthdate:</div>
          <div class="col-md-6 text-dark">{{ contact.birthdate || "Not available" }}</div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6 fw-bold text-secondary">Occupation:</div>
          <div class="col-md-6 text-dark">{{ contact.occupation || "Not available" }}</div>
        </div>

        <div class="text-center mt-4">
          <button @click="editContact" class="btn btn-warning me-2">Edit</button>
          <button @click="deleteContact" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-muted">
      <h1 class="mt-3">Contact Not Found</h1>
      <p class="fs-5">The contact you are looking for does not exist.</p>
      <button @click="$router.push('/')" class="btn btn-primary mt-3">
        Back to Contacts
      </button>
    </div>
  </div>
</template>

<script>
import { getContacts, saveContacts } from "../services/localStorageService";

export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contacts = getContacts();
    const id = Number(this.$route.params.id); 
    this.contact = contacts.find((contact) => contact.id === id); 
  },
  methods: {
    deleteContact() {
      const contacts = getContacts();
      const updatedContacts = contacts.filter((c) => c.id !== this.contact.id);
      saveContacts(updatedContacts);

      alert("Contact deleted successfully!");
      this.$router.push("/"); 
    },
    editContact() {
      this.$router.push(`/edit/${this.contact.id}`); 
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  margin-top: 0;
}
.card {
  border-radius: 12px;
  overflow: hidden;
}
.card-header {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.5rem;
}
.card-body {
  padding: 1.5rem;
}
.row {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 10px;
}
.row:last-child {
  border-bottom: none;
}
.text-secondary {
  font-weight: bold;
}
button {
  min-width: 120px;
}
</style>
