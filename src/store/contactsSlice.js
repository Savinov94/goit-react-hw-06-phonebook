import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setContacts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, setContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
