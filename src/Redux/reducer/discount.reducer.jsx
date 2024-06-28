import { ADD_DISCOUNT, GET_DISCOUNT } from "../Actiontype";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const discountReducer = (state = initialState, action) => {
  console.log("discount", action, state);

  switch (action.type) {
    case GET_DISCOUNT:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_DISCOUNT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};


