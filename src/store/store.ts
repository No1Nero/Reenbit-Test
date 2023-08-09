import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tripsReducer } from "./tripsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const reducer = combineReducers({
    trips: tripsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof store.getState>;
