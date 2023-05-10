import PropTypes from 'prop-types';
// import { useCallback } from 'react';
import css from './PhonebookContatcs.module.css';

const PhonebookContacts = ({ contacts, onDeleteContact }) => {
  // const handleDeleteContact = useCallback((id) => {
  // onDeleteContact(id);
  // }, [onDeleteContact]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

PhonebookContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhonebookContacts;