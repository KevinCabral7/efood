import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardapioItem } from "../../Pages/Home";

type CartState = {
  items: CardapioItem[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
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
  },
});

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;
