import createReducers from "../lib/createReducers";
import notificationReducer from "./notificationReducer";
import routerReducer from "./routerReducer";
import searchFilterReducer from "./searchFilterReducer";
import transactions from "./transactionsReducer";

const apiReducers = createReducers("transactions", "users");
export default {
  // transactions,
  ...apiReducers,
  notificationReducer,
  searchFilterReducer,
  routerReducer,
};
