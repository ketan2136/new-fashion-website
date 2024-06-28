import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  checkData: [],
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkoutData",
  initialState,
  reducers: {
    addTocheckData: (state, action) => {
      console.log("sliceData", state, action.payload);
      // Assuming you want to add the payload to checkData array
    //   state.checkData.push(action.payload);
    },
  },
});

// Correctly export the action from checkoutSlice.actions
export const { addTocheckData } = checkoutSlice.actions;

// Correctly export the reducer from checkoutSlice.reducer
export default checkoutSlice.reducer;
