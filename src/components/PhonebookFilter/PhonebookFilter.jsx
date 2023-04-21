import css from './PhonebookFilter.module.css';

const PhonebookFilter = ({ onFilterSet, filter }) => {
  return (
    <>
      <label className={css.filter}>
        <p>Search contacts by name</p>
        <input
          name="filter"
          onInput={onFilterSet}
          type="text"
          placeholder="Search contacts by name"
          value={filter}
        />
      </label>
    </>
  );
};

export default PhonebookFilter;
