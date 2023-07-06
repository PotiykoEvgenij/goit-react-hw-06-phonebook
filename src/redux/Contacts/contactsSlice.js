import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
// export const addContact = contactsSlice.actions.addContact;
// export const deleteContact = contactsSlice.actions.deleteContact;
// export const filterContact = contactsSlice.actions.filterContact;

// export const contactsReducer = contactsSlice;