import { ADD_DISCOUNT, GET_DISCOUNT } from "../Actiontype";

export const getDiscount = () => (dispatch) => {
  dispatch({ type: GET_DISCOUNT });
};

export const addDiscount = (data) => (dispatch) => {
  dispatch({ type: ADD_DISCOUNT, payload: data });
};
