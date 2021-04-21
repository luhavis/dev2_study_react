import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import AppLayout from "./components/AppLayout";
import CoinOverview from "./components/CoinOverView";
import MainPage from "./components/MainPage";
import configureStore from "./store/configureStore";
import TransactionList from "./components/TransactionList";
import ModalProvider from "./ModalProvider";
import NotificationContainer from "./containers/NotificationContainer";
import TransactionListContainer from "./containers/TransactionListContainer";
import NotFound from "./components/NotFound";

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
