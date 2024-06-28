import { ADD_FAVORITE, REMOVE_FAVORITE } from "../Actiontype";

export const addFavorite = (id) => (dispatch) => {
  console.log("check what is coming<<<", id);
  dispatch({ type: ADD_FAVORITE, payload: { pid: id, qty: 1 } });
};
export const deleteFavorite = (id) => (dispatch) => {
  console.log("check what is coming<<<", id);
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};


