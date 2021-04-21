import { connect } from "react-redux";
import {
  FETCH_TRANSACTION_LIST,
  requestTransactionList,
} from "../actions/transactionPackActions";
// import { setTransactionList } from "../actions/transactionActions";
// import { requestTransactionList } from "../actions/transactionActions";

import TransactionList from "../components/TransactionList";
import {
  loadingStateSelector,
  transactionListSelector,
  transactionListLoadingStateSelector,
} from "../selectors/transactionSelectors";

const mapStateToProps = (state) => {
  // const { ids, entities, loading } = state.transactions;
  // const { ids, entities, loadingState } = state.transactions;
  // const loading = loadingState[FETCH_TRANSACTION_LIST];
  // const transactions = ids.map((id) => entities[id]);

  // return { transactions, loading };

  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state),
  };
};
const mapDispatchToProps = {
  // setTransactionList,
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
