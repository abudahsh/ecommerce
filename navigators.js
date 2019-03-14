import React, { Component } from "react";
import { Animated, Dimensions, View } from "react-native";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
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
import OrderScreen from "./screens/OrderScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import CategoryProductDetailScreen from "./screens/CategoryProductDetailScreen";
sHeight = Dimensions.get("window").height;

stackNav = {
  headerStyle: {
    backgroundColor: "#4b2727",
    height: 0.06 * sHeight,
    minHeight: 30
  },
  headerTintColor: "#e48d31"
};
const NewsStack = createStackNavigator(
  {
    News: {
      screen: NewsScreen,
      navigationOptions: {
        title: "Novedades"
      }
    }
  },
  {
    initialRouteName: "News",
    defaultNavigationOptions: stackNav
  }
);
const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: "Información"
      }
    }
  },
  {
    initialRouteName: "About",
    defaultNavigationOptions: stackNav
  }
);
const ContactStack = createStackNavigator(
  {
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        title: "Contacto"
      }
    }
  },
  {
    initialRouteName: "Contact",
    defaultNavigationOptions: stackNav
  }
);
const ProductStack = createStackNavigator(
  {
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        title: "Orden"
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Inicio"
      }
    },
    ProductDetail: {
      screen: ProductDetailScreen
    },
    VendorDetail: {
      screen: VendorDetailScreen,
      navigationOptions: {
        title: "Artesano"
      }
    },

    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: "Carrito"
      }
    },
    Auth: {
      screen: AuthScreen,
      navigationOptions: {
        title: "Autenticación"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Perfil"
      }
    },
    Vendors: {
      screen: VendorListScreen,
      navigationOptions: {
        title: "Artesanos"
      }
    },
    Programmers: {
      screen: ProgrammersScreen,
      navigationOptions: {
        title: "Programa"
      }
    },
    ChangePassword: {
      screen: ChangePasswordScreen,
      navigationOptions: {
        title: "Cambia la contraseña"
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: stackNav
  }
);

const CatStack = createStackNavigator(
  {
    CategoriesList: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Categorías"
      }
    },
    CategoryDetail: {
      screen: CategoryDetailScreen
    },
    CategoryProductDetail: { screen: CategoryProductDetailScreen }
  },
  {
    initialRouteName: "CategoriesList",
    defaultNavigationOptions: stackNav
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

export default createAppContainer(WelcomeSwitch);
