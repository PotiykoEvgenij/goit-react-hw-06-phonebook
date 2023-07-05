import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactReducer, filterReducer } from './Contacts/contactsSlice';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});

export default reducer;