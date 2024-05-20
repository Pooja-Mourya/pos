// src/redux/slices/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantity: 0,
  price: 1, 
  total: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
      state.total = state.quantity * state.price;
    },
    decrement: (state) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
        state.total = state.quantity * state.price;
      }
    },
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
