import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      const isContactExists = state.contacts.some(
        contact => contact.name === name
      );

      if (!isContactExists) {
        state.contacts.push({ id, name, number });
      } else {
        console.log(`Contact with name ${name} already exists.`);
      }
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectFilteredContacts = state => {
  const { contacts, filter } = state.contacts;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
