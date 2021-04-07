import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";

export default (initState) =>
  createStore(combineReducers(reducers), initState, composeWithDevTools());
