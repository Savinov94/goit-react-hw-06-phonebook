import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/contactsSlice';
import { contactsSelector } from '../../store/contactsSelectors';
import css from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;

    if (!name || !number) {
      alert('Please enter name and number');
      return;
    }

    const isContactExists = contacts.some(contact => contact.name === name);

    if (!isContactExists) {
      const id = nanoid();
      dispatch(addContact({ id, name, number }));
      reset();
    } else {
      alert(`Contact with name ${name} already exists.`);
    }
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <div className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className={css.input}
            type="tel"
            placeholder="Number"
            name="number"
            value={formData.number.replace(/[^0-9.]/g, '')}
            onChange={handleChange}
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Form;
