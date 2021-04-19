import {
  showMessage,
  SHOW_NOTIFICATION,
  hideMessage,
} from "../actions/notificationActions";
import { SET_ERROR } from "../actions/transactionActions";

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    setTimeout(hide, 4000);
  }
  return nextRunner(action);
};
