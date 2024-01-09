import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/contactsSlice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.labelFilter}>
      <input
        className={css.inputFilter}
        type="text"
        value={value}
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

export default Filter;
