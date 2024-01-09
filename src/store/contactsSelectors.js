import {  createSelector } from '@reduxjs/toolkit';
const selectContacts = state => state.contacts;

export const contactsSelector = state => selectContacts(state);

export const selectFilteredContacts = createSelector(
  state => state.contacts,
  state => state.filter,
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);