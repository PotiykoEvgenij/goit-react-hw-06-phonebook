import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, productsReduser } from './Contacts/contactsSlice';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from "redux";
// import contactsReducer from './Contacts/contactsSlice';
// import filterReducer  from './Contacts/filterSlice';

export const store = configureStore({
    reducer: {
    contacts: contactsReducer,
}})

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
// });

// export const persistor = persistStore(storage);