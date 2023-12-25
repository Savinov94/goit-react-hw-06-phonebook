import LazyForm from './Form/Form';
import LazyContacts from './Contacts/Contacts';
import LazyFilter from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/contactsSlice';

const App = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>

      <LazyForm />
      <h2>Contacts</h2>
      <LazyFilter value={filter} onChange={handleFilterChange} />
      <LazyContacts />
    </div>
  );
};

export default App;
