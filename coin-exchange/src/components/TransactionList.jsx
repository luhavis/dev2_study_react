import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";
import TransactionPagination from "./TransactionPagination";

class TransactionList extends PureComponent {
  state = {
    transactions: [
      {
        id: "btx_01",
        name: "비트코인(BTX)",
        totalPrice: "123,123,000,000원",
        currentPrice: "4,200,000원",
        datetime: "2019/01/20 08:23:22",
      },
    ],
    loading: true,
  };

  render() {
    // const { transactions, loading } = this.props;
    const { transactions, loading } = this.state;

    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPagination />
      </div>
    );
  }
}

TransactionList.propTypes = {};

export default TransactionList;
