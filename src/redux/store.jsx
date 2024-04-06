import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomquestSliceReducer from "./slices/roomquestSlice";

export const store = configureStore({
  reducer: combineReducers({
    carts: roomquestSliceReducer,
  }),
});
