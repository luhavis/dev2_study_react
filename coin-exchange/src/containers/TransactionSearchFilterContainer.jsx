import { connect } from "react-redux";
import { setFilter } from "../actions/searchFilterReducer";
import { requestTransactionList } from "../actions/transactionPackActions";
// import { setTransactionList } from "../actions/transactionActions";
// import { requestTransactionList } from "../actions/transactionActions";

import TransactionSearchFilter from "../components/TransactionSearchFilter";

export default connect(null, { requestTransactionList, setFilter })(
  TransactionSearchFilter
);
