import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
// import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";
import TransactionPagination from "./TransactionPagination";
import axios from "axios";
import Api from "../Api";
import TransactionSearchFilterContainer from "../containers/TransactionSearchFilterContainer";

class TransactionList extends PureComponent {
  // state = {
  //   transactions: [],
  //   loading: true,
  // };

  componentDidMount() {
    // axios
    //   .get("http://localhost:4000/transactions", { params: { code: "BTC" } })
    //   .then((response) => this.setState({ transactions: response.data }));
    // Api.get("http://localhost:4000/transactions", {
    //   params: { code: "BTC" },
    // }).then((response) => this.setState({ transactions: response.data }));
    // Api.get("/transactions").then(({ data }) => {
    //   this.props.setTransactionList(data);
    // });
    this.props.requestTransactionList();
  }

  render() {
    // const { transactions, loading } = this.props;
    // const { transactions, loading } = this.state;
    const { transactions, loading } = this.props;

    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        {/* <TransactionPagination /> */}
      </div>
    );
  }
}

// TransactionList.propTypes = {};

TransactionList.defaultProps = {
  transactions: [],
  // setTransactionList: () => {},
  requestTransactionList: () => {},
};

export default TransactionList;
