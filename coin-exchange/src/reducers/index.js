import createReducers from "../lib/createReducers";
import notificationReducer from "./notificationReducer";
import searchFilterReducer from "./searchFilterReducer";
import transactions from "./transactionsReducer";

const apiReducers = createReducers("transactions");
export default {
  // transactions,
  ...apiReducers,
  notificationReducer,
  searchFilterReducer,
};
