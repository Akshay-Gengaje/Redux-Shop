import { createSlice } from "@reduxjs/toolkit";
const STATUSES = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUSES.IDEL,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk

export function fetchProducts() {
  return async function (dispatch, getState) {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDEL));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));

      console.log(error);
    }
  };
}
