const STORAGE_KEY = "contacts";

export const getContacts = () => {
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return contacts || [];
};


export const saveContacts = (contacts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};


export const getContactById = (id) => getContacts().find((contact) => contact.id === id);
