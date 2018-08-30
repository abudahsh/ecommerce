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
  TouchableOpacity,
  Dimensions
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

sHeight = Dimensions.get("window").height;

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
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/Icons/arrow.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/Icons/search.png")}
              style={{ width: 25, height: 25, marginHorizontal: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("./assets/Icons/cart.png")}
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/Icons/account.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight
      },
      headerTintColor: "#e48d31"
    }
  }
);

const MainTabs = createBottomTabNavigator(
  {
    News: {
      screen: NewsScreen,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (
          <Image
            source={require("./assets/Icons/news1.png")}
            style={{ height: 35, width: 40 }}
          />
        )
      }
    },
    Categories: {
      screen: CategoriesScreen,

      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (
          <Image
            source={require("./assets/Icons/categ1.png")}
            style={{ height: 35, width: 40 }}
          />
        )
      }
    },
    ProductStack: {
      screen: ProductStack,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (
          <Image
            source={require("./assets/Icons/home1.png")}
            style={{ height: 35, width: 35 }}
          />
        )
      }
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (
          <Image
            source={require("./assets/Icons/mail1.png")}
            style={{ height: 35, width: 40 }}
          />
        )
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: (
          <Image
            source={require("./assets/Icons/about1.png")}
            style={{ height: 35, width: 40 }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "ProductStack",
    tabBarOptions: {
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "#4b2727"
    }
  }
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
