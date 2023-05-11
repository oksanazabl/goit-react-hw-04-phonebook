import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';
import PhonebookFilter from './PhonebookFilter';
import filterContacts from '../utils/filterContacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

useEffect(() => {
  const handleBeforeUnload = () => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, [contacts]);

useEffect(() => {
  const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  setContacts(storedContacts);
}, []);

  const handleSubmit = contact => {
    const id = nanoid();
    const isContactExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    const newContact = { ...contact, id };
    setContacts(prevContacts => {
    const updatedContacts = [...prevContacts, newContact];
    saveContactsToLocalStorage(updatedContacts);
    return updatedContacts;
  });
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
   
  saveContactsToLocalStorage(contacts.filter(({ id }) => id !== contactId));
  };

  const saveContactsToLocalStorage = updatedContacts => {
  localStorage.setItem('contacts', JSON.stringify(updatedContacts));
};

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={handleSubmit} handleChange={handleChange} />
      <h2>Contacts</h2>
      <PhonebookFilter filter={filter} onFilterSet={handleFilterChange} />
      <PhonebookContacts
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
}

export default App;
