import { connect } from "react-redux";
import {
  createTransaction,
  CREATE_TRANSACTION,
} from "../actions/transactionPackActions";
// import { createTransaction } from "../actions/transactionActions";

import TradeCoinPage01 from "../components/TradeCoinPage01";

const mapStateToProps = (state) => {
  const { loadingState } = state.transactions;
  const loading = loadingState[CREATE_TRANSACTION];
  return { loading };
};

export default connect(mapStateToProps, { createTransaction })(TradeCoinPage01);
