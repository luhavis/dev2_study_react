import { connect } from "react-redux";
import {
  FETCH_TRANSACTION_LIST,
  requestTransactionList,
} from "../actions/transactionPackActions";
import TransactionPagination from "../components/TransactionPagination";
import { transactionListLoadingStateSelector } from "../selectors/transactionSelectors";

// const mapStateToProps = (state) => {
//   // const { pagination, loading, ids } = state.transactions;
//   const { pagination, loadingState, ids } = state.transactions;
//   const loading = loadingState[FETCH_TRANSACTION_LIST];

//   const { number, size } = pagination;

//   return {
//     searchParams: state.searchFilterReducer.params,
//     pageNumber: number || 1,
//     hasNext: ids.length === size,
//     loading,
//   };
// };

const mapStateToProps = (state) => {
  const { pagination, loading, ids } = state.transactions;
  const { number, size } = pagination;

  return {
    searchParams: state.searchFilterReducer.params,
    hasNext: ids.length === size,
    loading: transactionListLoadingStateSelector(state),
    pageNumber: number || 1,
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionPagination);
