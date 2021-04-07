import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import PropTypes from "prop-types";
import AppLayout from "./components/AppLayout";
import CoinOverview from "./components/CoinOverView";
import MainPage from "./components/MainPage";
import configureStore from "./store/configureStore";
import TransactionList from "./components/TransactionList";
import ModalProvider from "./ModalProvider";

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <CoinOverview />
            <TransactionList />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
