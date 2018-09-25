import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  handleMinus = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  handlePlus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          marginHorizontal: 20,
          marginVertical: 7,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingRight: 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
          elevation: 5,
          height: 110
        }}
      >
        <View>
          <Image
            source={require("./../assets/product4.jpg")}
            style={{ width: 80, height: 70 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", color: "#4b2727" }}>
            Item Label
          </Text>
          <Text style={{ color: "#4b2727" }}>Vendor Label</Text>
          <Text style={{ color: "#e48d31" }}>300$</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", paddingRight: 3 }}>
            <TouchableWithoutFeedback onPress={this.handleMinus}>
              <EvilIcons name="minus" size={25} color="black" />
            </TouchableWithoutFeedback>

            <Text style={{ fontWeight: "bold", fontSize: 12, color: "black" }}>
              {this.state.count}
            </Text>
            <TouchableWithoutFeedback onPress={this.handlePlus}>
              <EvilIcons name="plus" size={25} color="black" />
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              backgroundColor: "#e48d31",
              height: 25,
              marginTop: 7,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>600$</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CartItem;
