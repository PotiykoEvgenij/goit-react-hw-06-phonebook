import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import contactsReducer from './functions/contactsSlice';
import filterReducer from './functions/filterSlice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistor(storage);