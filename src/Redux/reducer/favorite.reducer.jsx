import { ADD_FAVORITE, REMOVE_FAVORITE } from "../Actiontype";

const initialState = {
  item: [],
  isLoading: false,
  error: null,
};

export const favoriteReducer = (state = initialState, action) => {
  console.log("favorite", action.payload);
  switch (action.type) {
    case ADD_FAVORITE:
      let item = state.item.find((v) => v.pid === action.payload.pid);

      // console.log(item);
      let newfav;

      if (item) {
        newfav = state.item.filter((v) => v.pid === action.payload.pid);
        state.item = newfav;
        localStorage.setItem("cartItem", JSON.stringify(state.item));
      } else {
        state.item.push(action.payload);
      localStorage.setItem("cartItem", JSON.stringify(state.item));
      }

      console.log(newfav);

      return {
        item: state.item,
        loading: false,
        error: null,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        item: action.payload,
      };
    
    default:
      return state; // Add a default case to return the initial state
  }
};
