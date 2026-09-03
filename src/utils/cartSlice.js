import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla (older) Redux => DON'T MUTATE and returing was mandatory
      //   const newItemState = [...state];
      //   newItemState.items.push(action.payload);
      //   return newItemState;

      // Redux using immer library to modify the state.
      // current state > Draft State > New State to redux

      //New Redux toolkit => Mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      //RTK : either Mutate the existing state or return new state
      //Option 1:
      //state.items = [];
      // Option 2:
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
