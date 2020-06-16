import { combineReducers } from "redux"
import login from "./loginReducer"
import categories from "./listReducer"
export default combineReducers({
  login,
  categories
})