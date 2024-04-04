import { configureStore } from "@reduxjs/toolkit";
import roomquestSliceReducer from "./slices/roomquestSlice";

export const store = configureStore({
  reducer: { 
    carts: roomquestSliceReducer.reducer,
  }
});
