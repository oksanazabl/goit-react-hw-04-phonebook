import PropTypes from 'prop-types';
import css from './PhonebookFilter.module.css';

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
       onChange={handleInputChange}
       type="text"
       placeholder="Search contacts by name"
       value={filter}
     />
</label>
</>
);
};

PhonebookFilter.propTypes = {
onFilterSet: PropTypes.func.isRequired,
filter: PropTypes.string.isRequired,
};

export default PhonebookFilter;