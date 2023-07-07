import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactsFilter } from "./ContactFilter/ContactFilter";
import { addContact, deleteContact } from "redux/Contacts/contactsSlice";
import { selectContacts, selectFilteredName } from "redux/selectors";
import { setFilter } from "../redux/Contacts/filterSlice";

export const App = () => {  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredName);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={handleAddContact} />
      <h2>Contacts</h2>
      <ContactsFilter filter={filter} setFilter={setFilter}/>
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} handleDeleteContact={handleDeleteContact} />
      ) : (
          <p>There are no contacts in your phonebook.</p>
      )}
    </div>
  );
};
