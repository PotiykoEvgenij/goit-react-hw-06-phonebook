import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './Contacts/contactsSlice';
import filterReducer from './Contacts/filterSlice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export default store;

