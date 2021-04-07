import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CoinOverview from "./CoinOverView";
import TransactionList from "./TransactionList";
import TransactionListContainer from "../containers/TransactionListContainer";

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionListContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
