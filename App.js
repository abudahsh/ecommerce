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
  createSwitchNavigator,
  createStackNavigator
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
import ProductDetailScreen from "./screens/ProductDetailScreen";
import VendorDetailScreen from "./screens/VendorDetailScreen";

const ProductStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    },
    ProductDetail: {
      screen: ProductDetailScreen,
      navigationOptions: {
        title: "Detail"
      }
    },
    VendorDetail: {
      screen: VendorDetailScreen,
      navigationOptions: {
        title: "Vendor"
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerRight: (
        <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
          <TouchableOpacity>
            <Text>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ paddingHorizontal: 10 }}>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
);

const MainTabs = createBottomTabNavigator(
  {
    News: NewsScreen,
    Categories: CategoriesScreen,
    ProductStack: {
      screen: ProductStack,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Contact: ContactScreen,
    About: AboutScreen
  },
  { initialRouteName: "ProductStack" }
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
