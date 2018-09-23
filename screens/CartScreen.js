import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput
} from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";
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
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          marginHorizontal: 20,
          justifyContent: "space-around",
          backgroundColor: "white",
          borderColor: "#5e5b5b",
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderTopLeftRadius: 15,

          borderTopColor: "#5e5b5b",
          borderRadius: 15,
          marginHorizontal: 15,
          marginVertical: 8,
          paddingLeft: 15
        }}
      >
        <View>
          <Image
            source={require("./../assets/product4.jpg")}
            style={{ width: 60, height: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", color: "#4b2727" }}>
            Item Label
          </Text>
          <Text style={{ color: "#4b2727" }}>Vendor Label</Text>
          <Text style={{ color: "orange" }}>300$</Text>
        </View>
        <View>
          <TextInput
            placeholder="1"
            value={1}
            style={{ width: 40, height: 30 }}
          />
          <View style={{ backgroundColor: "orange" }}>
            <Text>600$</Text>
          </View>
        </View>
      </View>
    );
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
            backgroundColor: "red",
            opacity: 0.1,
            width: 365,
            height: 100,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CartScreen;
