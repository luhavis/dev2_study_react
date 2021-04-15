import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import PropTypes from "prop-types";
import AppLayout from "./components/AppLayout";
import CoinOverview from "./components/CoinOverView";
import MainPage from "./components/MainPage";
import configureStore from "./store/configureStore";
import TransactionList from "./components/TransactionList";
import ModalProvider from "./ModalProvider";
import NotificationContainer from "./containers/NotificationContainer";
import TransactionListContainer from "./containers/TransactionListContainer";

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <CoinOverview />
            <TransactionListContainer />
            <NotificationContainer />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
