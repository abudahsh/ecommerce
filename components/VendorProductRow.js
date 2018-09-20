import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
class VendorProductRow extends Component {
  onLayout = e => {
    const { width, height } = Dimensions.get("window");
    this.setState({ width, height });
    console.warn(width, height);
  };

  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ProductDetail")}
        onLayout={this.onLayout}
        style={{
          borderColor: "#b7a195",
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          width: 0.47 * this.state.width,
          height: 0.6 * this.state.width,
          backgroundColor: "white"
        }}
      >
        <Image
          source={require("./../assets/product2.jpg")}
          style={{
            width: 0.35 * this.state.width,
            height: 0.35 * this.state.width,
            borderRadius: 0.175 * this.state.width,
            marginBottom: 20
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
