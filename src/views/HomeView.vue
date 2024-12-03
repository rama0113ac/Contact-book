<template>
  <div class="container py-5">
    <div class="text-center mb-4">
      <h1 class="display-4 fw-bold text-primary">Contact Book</h1>
      <p class="text-muted">Manage your personal and professional contacts with ease.</p>
    </div>

    <div class="text-center mb-4">
      <button @click="addContact" class="btn btn-primary btn-lg">
        Add New Contact
      </button>
    </div>

    <div class="input-group mb-4 shadow-sm">
      <input
        v-model="search"
        type="text"
        placeholder="Search contacts..."
        class="form-control"
      />
    </div>

    <div v-if="filteredContacts.length" class="list-group shadow-sm">
      <button
        v-for="contact in filteredContacts"
        :key="contact.id"
        @click="navigateToContact(contact.id)"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <span class="fw-bold text-dark">
          {{ contact.firstName }} {{ contact.lastName }}
        </span>
        <span class="text-primary">View</span>
      </button>
    </div>

    <div v-else class="text-center text-muted">
      <p class="fs-5 mt-3">No contacts found.</p>
    </div>
  </div>
</template>

<script>
import { getContacts } from "../services/localStorageService";

export default {
  data() {
    return {
      search: "",
      contacts: [],
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter((contact) =>
          `${contact.firstName} ${contact.lastName}`
            .toLowerCase()
            .includes(this.search.toLowerCase())
        )
        .sort((a, b) =>
          a.lastName.localeCompare(b.lastName)
        );
    },
  },
  created() {
    this.contacts = getContacts();
  },
  methods: {
    addContact() {
      this.$router.push("/add");
    },
    navigateToContact(id) {
      this.$router.push(`/contact/${id}`);
    },
  },
};
</script>

<style scoped>
.text-center {
  margin-bottom: 20px;
}

.list-group-item {
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}
</style>
