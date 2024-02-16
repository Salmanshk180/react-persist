import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: persistedReducer,
});
export default store;
export const persistor = persistStore(store);
