const filterContacts = (contacts, filter) => {
  if (!contacts) {
    return [];
  }

  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
};

export default filterContacts;
