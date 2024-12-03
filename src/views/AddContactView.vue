<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white text-center">
            <h4>Add New Contact</h4>
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
                    placeholder="Enter first name"
                    v-model="form.firstName"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    class="form-control"
                    placeholder="Enter last name"
                    v-model="form.lastName"
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
                    placeholder="Enter email address"
                    v-model="form.email"
                  />
                </div>

                <div class="col-md-6">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-control"
                    placeholder="Enter phone number"
                    v-model="form.phone"
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
                    placeholder="Enter address"
                    v-model="form.address"
                  />
                </div>

                <div class="col-md-6">
                  <label for="city" class="form-label">City</label>
                  <input
                    type="text"
                    id="city"
                    class="form-control"
                    placeholder="Enter city"
                    v-model="form.city"
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
                    v-model="form.birthdate"
                  />
                </div>

                <div class="col-md-6">
                  <label for="occupation" class="form-label">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    class="form-control"
                    placeholder="Enter occupation"
                    v-model="form.occupation"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary w-100 mt-3">
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContacts, saveContacts } from "../services/localStorageService";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        birthdate: "",
        occupation: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const contacts = getContacts();
      const newContact = {
        id: Date.now(),
        ...this.form,
      };
      contacts.push(newContact);
      saveContacts(contacts);

      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        birthdate: "",
        occupation: "",
      };

      alert("Contact added successfully!");
      this.$router.push(`/contact/${newContact.id}`);
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
