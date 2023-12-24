import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addContact,
  deleteContact,
  setFilter,
  setContacts,
} from '../store/contactsSlice';
import LazyForm from './Form/Form';
import LazyContacts from './Contacts/Contacts';
import LazyFilter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    if (storedContacts.length > 0) {
      dispatch(setContacts(storedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, dispatch]);

  const formSubmitHandler = data => {
    const { name } = data;

    if (isContactNameExists(name)) {
      alert('This name is already in the contacts!');
      return;
    }

    dispatch(addContact(data));
  };

  const isContactNameExists = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    if (!filter.trim()) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <LazyForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <LazyFilter value={filter} onChange={changeFilter} />
      <LazyContacts
        contacts={visibleContacts}
        deleteContact={deleteContactHandler}
      />
    </div>
  );
};

export default App;
