import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";
import ProductListReducer from "./ProductListReducer";
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  productList: ProductListReducer,
});
export default rootReducer;
