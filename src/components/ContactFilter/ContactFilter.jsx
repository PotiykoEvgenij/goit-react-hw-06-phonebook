import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Contacts/filterSlice';
import { selectFilteredName } from 'redux/selectors';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css'

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredName);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
    
  return (
    <div>
      <label className={styles.formFilter}>
        <span className={styles.formTitle}>Find contacts by name</span>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
        />
        </label>
    </div>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};