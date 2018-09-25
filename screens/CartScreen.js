import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";
import CartItem from "../components/CartItem";
sWidth = Dimensions.get("window").width;
cartOtems = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];
class CartScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {};
  _renderItem = () => {
    return <CartItem />;
  };
  _keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={cartOtems}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        <View
          style={{
            flex: 1,
            position: "absolute",
            zIndex: 100,
            bottom: 0,
            left: 0,
            backgroundColor: "#dadada",
            opacity: 0.8,
            width: sWidth,
            height: 100,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            paddingHorizontal: 50,
            paddingTop: 20
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={styles.textStyle}>SUBTOTAL</Text>
            <Text style={styles.textStyle}>1800$</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.textStyle}>IVA</Text>
            <Text style={styles.textStyle}>0$</Text>
          </View>
          <View
            style={{
              height: 2,
              width: 0.72 * sWidth,
              backgroundColor: "#4b2727",
              justifyContent: "center"
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.textStyle}>Total</Text>
            <Text style={styles.textStyle}>1800$</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "#4b2727"
  }
});

export default CartScreen;
