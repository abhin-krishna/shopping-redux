import { legacy_createStore } from "redux";
import shoppingReducer from "./shoppingReducer";

const store=legacy_createStore(shoppingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store