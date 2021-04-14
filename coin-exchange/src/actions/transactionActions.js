import Api from "../Api";

export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}

export function requestTransactionList(params) {
  return (dispatch) => {
    Api.get("/transactions", { params }).then(({ data }) =>
      dispatch(setTransactionList(data))
    );
  };
}
