import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';
import PhonebookFilter from './PhonebookFilter';
import filterContacts from '../utils/filterContacts';
import saveContactsToLocalStorage from '../utils/saveContactsToLocalStorage';
import loadContactsFromLocalStorage from '../utils/loadContactsFromLocalStorage ';

function App() {
  const [contacts, setContacts] = useState(loadContactsFromLocalStorage);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = contact => {
    const id = nanoid();
    const isContactExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const updatedContacts = [...contacts, { ...contact, id }];
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = contacts.filter(({ id }) => id !== contactId);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <PhonebookFilter filter={filter} onFilterSet={handleFilterChange} />
      <PhonebookContacts
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

PhonebookFilter.propTypes = {
  onFilterSet: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

PhonebookContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default App;
