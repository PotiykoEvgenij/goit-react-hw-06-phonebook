import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './Contacts/contactsSlice';
import filterReducer from './Contacts/filterSlice';
// import reducer from "./reducer";
// import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from "redux-persist";
// import { contactsReducer } from './Contacts/contactsSlice';
// import { getDefaultNormalizer } from "@testing-library/react";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export default store;
// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// export const persistor = persistStore(store);
// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

