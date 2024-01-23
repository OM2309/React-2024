import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.carts.push(action.payload);
    },
    remove(state, action) {
      const id = action.payload;
      state.carts = state.carts.filter((item) => item.id != id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
