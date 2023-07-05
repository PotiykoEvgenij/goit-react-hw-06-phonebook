import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [
        {
        contacts: [],
        filter: ""
        }
    ],
    reducers: {
        addContact: (state, action) {
            return [...state, action.payload];
        },
        deleteContact(state, action) {
            return state.filter(({ contact }) => contact.id !== action.payload);
        },
        filterContact(state, action) {
            return action.payload;
        }
    },
});

export const addContact = contactsSlice.actions.addContact;
export const deleteContact = contactsSlice.actions.deleteContact;
export const filterContact = contactsSlice.actions.filterContact;

export const contactsReducer = contactsSlice;