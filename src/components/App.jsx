import LazyForm from './Form/Form';
import LazyContacts from './Contacts/Contacts';
import LazyFilter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <LazyForm />
      <h2>Contacts</h2>
      <LazyFilter />
      <LazyContacts />
    </div>
  );
};

export default App;
