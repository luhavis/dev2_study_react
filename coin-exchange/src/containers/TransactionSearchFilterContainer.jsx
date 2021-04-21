import { connect } from "react-redux";
import { setFilter } from "../actions/searchFilterActions";
import { requestTransactionList } from "../actions/transactionPackActions";
// import { setTransactionList } from "../actions/transactionActions";
// import { requestTransactionList } from "../actions/transactionActions";

import TransactionSearchFilter from "../components/TransactionSearchFilter";


const mapStateToProps  = state => ({
  initValues: state.searchFilterReducer.params
})

export default connect(mapStateToProps, { requestTransactionList, setFilter })(
  TransactionSearchFilter
);
