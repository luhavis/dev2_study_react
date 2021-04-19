import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";
import { SET_TRANSACTION_LIST } from "../actions/transactionActions";
import thunk from "redux-thunk";
import notificationEffects from "../middlewares/notificationEffects";
import transactionEffects from "../middlewares/transactionEffects";

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log("액션 개체", action);
  console.log("리듀서 실행 전", store.getState());
  const result = nextRunner(action);
  // console.log("저장소 상태", store.getStore());
  console.log("리듀서 실행 후", store.getState());
  return result;
};

const customMiddleware1 = () => (nextRunner) => (action) => {
  if (action.type === SET_TRANSACTION_LIST) {
    return nextRunner({
      ...action,
      payload: [
        {
          id: 0,
          code: "DOIT",
          name: "두잇코인(DOIT)",
          totalPrice: 10000000,
          currentPrice: 25000,
          datetime: "현재시간",
        },
      ],
    });
  }

  return nextRunner(action);
};

const customMiddleware2 = (store) => (nextRunner) => (action) => {
  console.log("미들웨어2 전달된 액션 개체", action);
  console.log("미들웨어2 실행 전", store.getState());
  const result = nextRunner(action);
  console.log("미들웨어2 실행 후", store.getState());
  return result;
};

export default (initState) =>
  createStore(
    combineReducers(reducers),
    initState,
    //applyMiddleware(customMiddleware1, customMiddleware2),
    //composeWithDevTools(applyMiddleware(thunk))
    composeWithDevTools(
      applyMiddleware(thunk, notificationEffects, transactionEffects)
    )
  );
