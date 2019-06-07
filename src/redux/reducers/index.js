import { combineReducers } from "redux";
import search from "./search";
import albuns from "./albuns";
import album from "./album";

export default combineReducers({
  search,
  albuns,
  album
})