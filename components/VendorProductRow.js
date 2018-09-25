import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class VendorProductRow extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ProductDetail")}
        style={{
          borderColor: "#b7a195",
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          width: 0.35 * sWidth,
          height: 0.45 * sWidth,
          backgroundColor: "white"
        }}
      >
        <Image
          source={require("./../assets/product4.jpg")}
          style={{
            width: 0.25 * sWidth,
            height: 0.25 * sWidth,
            borderRadius: 0.175 * sWidth,
            marginVertical: 9
          }}
        />
        <Text style={{ fontWeight: "bold", color: "#4b2727" }}>
          Product Name
        </Text>
        <Text style={{ color: "#4b2727" }}>$ 60.00</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(VendorProductRow);
