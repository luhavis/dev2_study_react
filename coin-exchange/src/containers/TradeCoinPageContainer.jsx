import { connect } from "react-redux";
import { createTransaction } from "../actions/transactionPackActions";
// import { createTransaction } from "../actions/transactionActions";

import TradeCoinPage01 from "../components/TradeCoinPage01";

export default connect(null, { createTransaction })(TradeCoinPage01);
