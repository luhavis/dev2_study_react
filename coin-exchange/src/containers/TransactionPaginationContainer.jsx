import { connect } from "react-redux";
import { requestTransactionList } from "../actions/transactionPackActions";
import TransactionPagination from "../components/TransactionPagination";

const mapStateToProps = (state) => {
  const { pagination, loading, ids } = state.transactions;
  const { number, size } = pagination;
  return {
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
