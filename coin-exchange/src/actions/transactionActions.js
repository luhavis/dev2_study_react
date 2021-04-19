import Api from "../Api";
import { showMessage } from "./notificationActions";

export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";
export const LOADING_TRANSACTION_LIST = "transaction/LOADING_TRANSACTION_LIST";
export const SET_ERROR = "transaction/SET_ERROR";

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}

export function requestTransactionList(params) {
  return (dispatch) => {
    dispatch(loading());
    Api.get("/transactions", { params }).then(
      ({ data }) => dispatch(setTransactionList(data)),
      (error) => {
        dispatch(setError(error.response.data.errorMessage));
        // dispatch(showMessage(error.response.data.errorMessage, true));
      }
    );
  };
}

export function loading() {
  return {
    type: LOADING_TRANSACTION_LIST,
  };
}

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
}
