import css from './PhonebookForm.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PhonebookForm = ({ onSubmit, handleChange }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {name,number};
    onSubmit(contact);
    setName('');
    setNumber('')
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

 const handleNumberChange = e => {
    setNumber(e.target.value)
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name:</label>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
        placeholder="Name"
      />
      <label className={css.label}>Phone number:</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
        placeholder="Phone number"
      />
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PhonebookForm;
