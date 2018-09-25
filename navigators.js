import React, { Component } from "react";
import { Animated, Dimensions, View } from "react-native";
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

import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import CategoryDetailScreen from "./screens/CategoryDetailScreen";
import AuthScreen from "./screens/AuthScreen";
import VendorListScreen from "./screens/VendorsListScreen";
import ProgrammersScreen from "./screens/ProgrammersScreen";
sHeight = Dimensions.get("window").height;

const NewsStack = createStackNavigator(
  {
    News: {
      screen: NewsScreen,
      navigationOptions: {
        title: "News"
      }
    }
  },
  {
    initialRouteName: "News",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight,
        minHeight: 30
      },
      headerTintColor: "#e48d31"
    }
  }
);
const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: "About"
      }
    }
  },
  {
    initialRouteName: "About",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight,
        minHeight: 30
      },
      headerTintColor: "#e48d31"
    }
  }
);
const ContactStack = createStackNavigator(
  {
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        title: "Contact"
      }
    }
  },
  {
    initialRouteName: "Contact",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight,
        minHeight: 30
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

    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: "Cart"
      }
    },
    Auth: {
      screen: AuthScreen,
      navigationOptions: {
        title: "Profile"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile"
      }
    },
    Vendors: {
      screen: VendorListScreen,
      navigationOptions: {
        title: "Vendors"
      }
    },
    Programmers: {
      screen: ProgrammersScreen,
      navigationOptions: {
        title: "Programmers"
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#4b2727",
        height: 0.06 * sHeight,
        minHeight: 30
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
        height: 0.06 * sHeight,
        minHeight: 30
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
    initialRouteName: "About",

    tabBarOptions: {
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "#4b2727",
      style: {
        height: 0.06 * sHeight,
        minHeight: 30
      }
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
