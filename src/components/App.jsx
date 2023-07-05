import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { fetchContacts,  addContact, deleteContact, setFilter } from "redux/Contacts/contactsSlice";

export const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (id) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={contacts} filter={filter} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};
