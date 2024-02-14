import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      //redux - in old redux library we could not mutate the state directly
      //return [...state, action.payload];
      state.push(action.payload);
    },
    remove(state, action) {
      console.log(action.payload);
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
