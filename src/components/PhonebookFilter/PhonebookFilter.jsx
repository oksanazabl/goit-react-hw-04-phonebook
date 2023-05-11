import PropTypes from 'prop-types';
import css from './PhonebookFilter.module.css';
// import React, { useState } from 'react';

const PhonebookFilter = ({ onFilterSet, filter }) => {
const handleInputChange = event => {
onFilterSet(event.target.value);
};
  return (
    <>
      <label className={css.filter}>
        <p>Search contacts by name</p>
        <input
          name="filter"
          onInput={handleInputChange}
          type="text"
          placeholder="Search contacts by name"
          value={filter}
        />
      </label>
    </>
  );
};

PhonebookFilter.propTypes = {
  onFilterSet: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

export default PhonebookFilter;
