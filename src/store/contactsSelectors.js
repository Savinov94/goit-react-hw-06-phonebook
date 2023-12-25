import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.contacts;

export const contactsSelector = createSelector(
  selectContacts,
  contacts => contacts
);
