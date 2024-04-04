import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const roomquestSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.push(action.payload);
    },
    removeRoom: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addRoom, removeRoom } = roomquestSlice.actions;
export default roomquestSlice.reducer;
