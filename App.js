/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Swiper from "react-native-swiper";
import AboutScreen from "./screens/AboutScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import GetStartScreen from "./screens/GetStartScreen";

const MainTabs = createBottomTabNavigator(
  {
    News: NewsScreen,
    Categories: CategoriesScreen,
    Home: HomeScreen,
    Contact: ContactScreen,
    About: AboutScreen
  },
  { initialRouteName: "Home" }
);
const WelcomeSwitch = createSwitchNavigator(
  {
    GetStart: GetStartScreen,
    Tabs: MainTabs
  },
  { initialRouteName: "GetStart" }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WelcomeSwitch />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  }
});
