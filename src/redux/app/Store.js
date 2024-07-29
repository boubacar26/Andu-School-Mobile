import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseApi } from "../slices/apiMananger";

const persistConfig = {
  key: "exempleRoot",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([baseApi.middleware]);
  },
  devTools: true,
});

export const persistor = persistStore(store);
