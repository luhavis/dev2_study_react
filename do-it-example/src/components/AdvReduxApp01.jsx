import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

class AdvReduxApp extends Component {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    this.store.dispatch({
      type: 'RESET_LOADING',
    });
    this.store.dispatch({
      type: 'SET_USER',
      payload: { name: 'Park', age: 24 },
    });
  }

  render() {
    return;
    <Provider store={this.store}>AdvReduxApp</Provider>;
  }
}

export default AdvReduxApp;
