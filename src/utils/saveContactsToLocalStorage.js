function saveContactsToLocalStorage(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export default saveContactsToLocalStorage;
