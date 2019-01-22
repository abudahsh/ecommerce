/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {View, Text} from 'react-native'
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import { NetworkProvider , ReduxNetworkProvider} from "react-native-offline";
import WelcomeSwitch from "./navigators";
import OfflineNotice from "./components/OfflineNotice";

//console.disableYellowBox = true;

let RootComp = class Root extends React.Component {
    
    
  render() {
      return (
          <ReduxNetworkProvider>
            {this.props.network.isConnected?null:<OfflineNotice />}
            <WelcomeSwitch />
          </ReduxNetworkProvider>
      );
  }
}

Root = connect((state) => ({
  network: state.network,
}))(RootComp);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Root />
      </Provider>
    );
  }
}
