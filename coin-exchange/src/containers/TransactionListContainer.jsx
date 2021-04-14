import { connect } from "react-redux";
// import { setTransactionList } from "../actions/transactionActions";
import { requestTransactionList } from "../actions/transactionActions";
import TransactionList from "../components/TransactionList";

const mapStateToProps = (state) => {
  const { ids, entities } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions };
};
const mapDispatchToProps = {
  // setTransactionList,
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
