import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const cartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    addTocart: (state, action) => {
      
      let item = state.data.some((v) => v.cid === action.payload.cid);

      if (item) {
        let index = state.data.findIndex((v) => v.cid === action.payload.cid);
        state.data[index].qty++;
        // item.qty++
      } else {
        state.data.push(action.payload);
      }

      state.data = state.data;
      state.isLoading = state.false;
      state.error = state.null;
    },
    incrementCart: (state, action) => {
      let item = state.data.findIndex((v) => v.cid === action.payload);
      console.log(item);
      state.data[item].qty++;

      state.item = state.item;
      state.isLoading = state.false;
      state.error = state.null;
    },
    decrementCart: (state, action) => {
      let item = state.data.findIndex((v) => v.cid === action.payload);
      console.log(item);
      state.data[item].qty--;

      state.item = state.item;
      state.isLoading = state.false;
      state.error = state.null;
    },
    removeCart: (state, action) => {
      state.data = state.data.filter((v) => v.cid !== action.payload);
    },
  },
});

export const { addTocart, incrementCart, decrementCart, removeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
