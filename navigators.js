import React, { Component } from "react";
import { Animated, Dimensions } from "react-native";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AboutScreen from "./screens/AboutScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import GetStartScreen from "./screens/GetStartScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import VendorDetailScreen from "./screens/VendorDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";
sHeight = Dimensions.get("window").height;

const NewsStack = createStackNavigator(
  {
    News: { screen: NewsScreen }
  },
  {
    initialRouteName: "News",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight
      },
      headerTintColor: "#e48d31"
    }
  }
);
const AboutStack = createStackNavigator(
  {
    About: { screen: AboutScreen }
  },
  {
    initialRouteName: "About",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight
      },
      headerTintColor: "#e48d31"
    }
  }
);
const ContactStack = createStackNavigator(
  {
    Contact: { screen: ContactScreen }
  },
  {
    initialRouteName: "Contact",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight
      },
      headerTintColor: "#e48d31"
    }
  }
);
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
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login"
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: "Register"
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: "Cart"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile"
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight
      },
      headerTintColor: "#e48d31"
    }
  }
);

const CatStack = createStackNavigator(
  {
    CategoriesList: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Categories"
      }
    },
    CategoryDetail: {
      screen: CategoryDetailScreen,
      navigationOptions: {
        title: "CategoryDetail"
      }
    }
  },
  {
    initialRouteName: "CategoriesList",
    navigationOptions: {
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
      screen: NewsStack,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Icon
            name="newspaper-o"
            size={25}
            color={focused ? "#e48d31" : "white"}
          />
        )
      }
    },
    Categories: {
      screen: CatStack,

      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Icon name="list" size={25} color={focused ? "#e48d31" : "white"} />
        )
      }
    },
    ProductStack: {
      screen: ProductStack,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={30} color={focused ? "#e48d31" : "white"} />
        )
      }
    },
    Contact: {
      screen: ContactStack,
      navigationOptions: {
        tabBarLabel: () => null,

        tabBarIcon: ({ focused }) => (
          <Icon
            name="envelope-o"
            size={25}
            color={focused ? "#e48d31" : "white"}
          />
        )
      }
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Icon
            name="info-circle"
            size={25}
            color={focused ? "#e48d31" : "white"}
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

export default WelcomeSwitch;