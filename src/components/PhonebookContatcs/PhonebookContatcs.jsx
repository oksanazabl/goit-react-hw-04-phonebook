import css from './PhonebookContatcs.module.css';
import { useCallback } from 'react';

const PhonebookContacts = ({ contacts, onDeleteContact }) => {
  const handleDeleteContact = useCallback(
    id => {
      onDeleteContact(id);
    },
    [onDeleteContact]
  );

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookContacts;
