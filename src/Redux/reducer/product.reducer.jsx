import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  LOADING_STOP,
  PRODUCT_LOADING,
  UPDATE_PRODUCT,
} from "../Actiontype";

const initialState = {
  isLoading: false,
  product: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        error: null,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: [...state.product, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: state.product.filter((v) => v.id != action.payload),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: state.product.map((v) => {
          console.log(v.id);
          if (v.id === action.payload) {
            return action.payload;
          } else {
            return v;
          }
        }),
      };
    default:
      return state;
  }
};
