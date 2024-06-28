import { combineReducers } from "redux";
import { productReducer } from "./product.reducer";
import { favoriteReducer } from "./favorite.reducer";
import cartSlice from "../slice/cartSlice";
import { discountReducer } from "./discount.reducer";


export const rootReducher = combineReducers({
  product: productReducer,
  item: favoriteReducer,
  cart: cartSlice,
  discount: discountReducer,
});



