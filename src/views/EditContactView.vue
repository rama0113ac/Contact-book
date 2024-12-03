<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
   
        <div class="card shadow">
          <div class="card-header bg-primary text-white text-center">
            <h2>Edit Contact</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="onSubmit">
              <div class="row mb-3">
              
                <div class="col-md-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    class="form-control"
                    v-model="contact.firstName"
                    placeholder="Enter first name"
                    required
                  />
                </div>

               
                <div class="col-md-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    class="form-control"
                    v-model="contact.lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div class="row mb-3">
                
                <div class="col-md-6">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="contact.email"
                    placeholder="Enter email address"
                
                  />
                </div>

                
                <div class="col-md-6">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-control"
                    v-model="contact.phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div class="row mb-3">
                
                <div class="col-md-6">
                  <label for="address" class="form-label">Address</label>
                  <input
                    type="text"
                    id="address"
                    class="form-control"
                    v-model="contact.address"
                    placeholder="Enter address"
                 
                  />
                </div>

              
                <div class="col-md-6">
                  <label for="city" class="form-label">City</label>
                  <input
                    type="text"
                    id="city"
                    class="form-control"
                    v-model="contact.city"
                    placeholder="Enter city"
              
                  />
                </div>
              </div>

              <div class="row mb-3">
               
                <div class="col-md-6">
                  <label for="birthdate" class="form-label">Birthdate</label>
                  <input
                    type="date"
                    id="birthdate"
                    class="form-control"
                    v-model="contact.birthdate"
              
                  />
                </div>

              
                <div class="col-md-6">
                  <label for="occupation" class="form-label">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    class="form-control"
                    v-model="contact.occupation"
                    placeholder="Enter occupation"
                  />
                </div>
              </div>

             
              <div class="d-flex justify-content-between mt-4">
                <button type="button" class="btn btn-secondary" @click="cancelEdit">
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContactById, getContacts, saveContacts } from "../services/localStorageService";

export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contactId = Number(this.$route.params.id);
    this.contact = getContactById(contactId);

    if (!this.contact) {
      alert("Contact not found!");
      this.$router.push("/"); 
    }
  },
  methods: {
    onSubmit() {
      const contacts = getContacts();
      const updatedContacts = contacts.map((c) =>
        c.id === this.contact.id ? this.contact : c
      );
      saveContacts(updatedContacts);

      alert("Contact updated successfully!");
      this.$router.push(`/contact/${this.contact.id}`);
    },
    cancelEdit() {
      this.$router.push(`/contact/${this.contact.id}`); 
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
}
.card-header {
  border-radius: 8px 8px 0 0;
}
button {
  font-weight: bold;
}
</style>
