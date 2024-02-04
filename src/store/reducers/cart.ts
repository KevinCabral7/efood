import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardapioItem } from "../../Pages/Home";

type CartState = {
  items: CardapioItem[];
  isOpen: boolean;
  isPaying: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  isPaying: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const alreadyAdd = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (alreadyAdd) {
        alert("você já adicionou este item.");
      } else {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    toCheckout: (state) => {
      state.isPaying = true;
    },
    toCart: (state) => {
      state.isPaying = false;
    },
    clearState: (state) => {
      state.isPaying = false;
      state.items = [];
    },
  },
});

export const { add, open, close, remove, toCheckout, toCart, clearState } =
  cartSlice.actions;
export default cartSlice.reducer;
