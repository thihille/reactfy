import { combineReducers } from "redux";
import search from "./search";
import albuns from "./albuns";

export default combineReducers({
  search,
  albuns
})