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
  SectionList
} from "react-native";
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
  _renderItem = ({ item }) => {
    return <CartItem {...item} />;
  };

  componentDidMount() {
    this.props._fetchCart();
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="orange" />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <SectionList
            contentContainerStyle={{ marginLeft: 15, marginRight: 15 }}
            renderItem={({ item, index, section }) => <CartItem {...item} />}
            renderSectionHeader={({
              section: { seller, number_of_products }
            }) => (
              <View
                style={{
                  height: 30,
                  backgroundColor: "#4b2727",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ fontWeight: "bold", color: "white", paddingLeft: 5 }}
                >
                  {seller.substring(0, 25)}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    paddingRight: 5
                  }}
                >
                  Productos ({number_of_products})
                </Text>
              </View>
            )}
            renderSectionFooter={({ section: { payment_form, amount } }) => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#f7f6f5",
                  justifyContent: "space-between",
                  paddingBottom: 15,
                  paddingHorizontal: 10,
                  borderBottomLeftRadius: 45,
                  borderBottomRightRadius: 45,
                  alignItems: "center"
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "#4b2727", marginRight: 5 }}>
                    Total:{" "}
                  </Text>
                  <Text style={{ color: "#e48d31", fontSize: 16, padding: 5 }}>
                    $ {amount}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#4b2727",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    marginLeft: 30,
                    marginRight: 5,
                    marginTop: 5,
                    borderRadius: 10
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("Order", {
                      html: payment_form
                    })
                  }
                >
                  <Text style={{ color: "white", padding: 5 }}>Pagar</Text>
                </TouchableOpacity>
              </View>
            )}
            sections={this.props.cart}
            keyExtractor={index => index}
          />

          {/*
        
      
        
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
        */}
        </View>
      );
    }
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
  cart: state.cart.cart,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchCart: () => dispatch(_fetchCart())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
