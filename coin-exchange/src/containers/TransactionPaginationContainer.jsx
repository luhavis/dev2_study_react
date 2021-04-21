import { connect } from "react-redux";
import {
  FETCH_TRANSACTION_LIST,
  requestTransactionList,
} from "../actions/transactionPackActions";
import TransactionPagination from "../components/TransactionPagination";

const mapStateToProps = (state) => {
  // const { pagination, loading, ids } = state.transactions;
  const { pagination, loadingState, ids } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];

  const { number, size } = pagination;

  return {
    searchParams: state.searchFilterReducer.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading,
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionPagination);
