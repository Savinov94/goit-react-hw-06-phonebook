
const selectContacts = state => state.contacts.contacts;

export const contactsSelector = state => selectContacts(state);