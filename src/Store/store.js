import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { graphDataApi } from "../services/graphApi";
import graphReducer from "./features/forexGraph/forexGraphSlice";
import userReducer from "./features/users/usersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  graphData: graphReducer,
  userData: userReducer,
  [graphDataApi.reducerPath]: graphDataApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)