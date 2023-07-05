import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/Contacts/contactsSlice';
// import { selectFilteredContacts } from 'redux/functions/'
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
  
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
          <li key={contact.id}>
          <span className={styles.contact}>{contact.name}: {contact.number}</span>
          <button onClick={() => deleteContact(contact.id)} className={styles.contactButton}>&#10060;</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};