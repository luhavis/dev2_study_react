import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log("액션 개체", action);
  console.log("저장소 상태", store.getStore());
  return nextRunner(action);
};

export default (initState) =>
  createStore(
    combineReducers(reducers),
    initState,
    applyMiddleware(customMiddleware)
  );
