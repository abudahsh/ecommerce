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
  Dimensions,
  ActivityIndicator,
  Platform
} from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";
import { _fetchCart } from "../redux/actions";

sWidth = Dimensions.get("window").width;

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
  componentDidMount() {
    this.props._fetchCart();
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size={Platform.OS === "android" ? 30 : 1}
            color="orange"
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={this.props.cart}
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

const mapStateToProps = state => ({
  cart: state.cart,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchCart: () => dispatch(_fetchCart())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
