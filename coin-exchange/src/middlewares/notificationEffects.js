import { showMessage } from "../actions/notificationActions";
import { SET_ERROR } from "../actions/transactionActions";

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  }
  return nextRunner(action);
};
