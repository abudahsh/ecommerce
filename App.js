/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import { NetworkProvider } from "react-native-offline";
import WelcomeSwitch from "./navigators";

//console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WelcomeSwitch />
      </Provider>
    );
  }
}
