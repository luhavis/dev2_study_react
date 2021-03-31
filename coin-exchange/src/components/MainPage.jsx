import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CoinOverview from "./CoinOverView";
import TransactionList from "./TransactionList";

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionList />
      </React.Fragment>
    );
  }
}

export default MainPage;
