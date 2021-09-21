import { combineReducers } from "redux";

import city from "./City";
import filter from "./Filter"

export default combineReducers({
    city,
    filter
});