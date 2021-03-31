import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AppLayout from "./components/AppLayout";
import CoinOverview from "./components/CoinOverView";
import MainPage from "./components/MainPage";

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <MainPage />
      </AppLayout>
    );
  }
}

export default CoinApp;
