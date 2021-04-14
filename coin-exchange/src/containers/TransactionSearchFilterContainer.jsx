import { connect } from "react-redux";
// import { setTransactionList } from "../actions/transactionActions";
import { requestTransactionList } from "../actions/transactionActions";
import TransactionSearchFilter from "../components/TransactionSearchFilter";

export default connect(null, { requestTransactionList })(
  TransactionSearchFilter
);
