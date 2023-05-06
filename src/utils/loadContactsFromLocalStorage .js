function loadContactsFromLocalStorage() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    return JSON.parse(savedContacts);
  }
  return [];
}

export default loadContactsFromLocalStorage;
