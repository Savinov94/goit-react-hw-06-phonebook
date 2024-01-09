import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';
import css from './Contacts.module.css';
import { selectFilteredContacts } from '../../store/contactsSelectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
export default Contacts;
