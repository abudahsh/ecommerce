import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
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
      <View
        onLayout={this.onLayout}
        style={{
          borderColor: "black",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8
        }}
      >
        <Image
          source={require("./../assets/product2.jpg")}
          style={{
            width: 0.3 * this.state.width,
            height: 100,
            borderRadius: 50
          }}
        />
        <Text>Product Name</Text>
        <Text>$ 60.00</Text>
      </View>
    );
  }
}

export default VendorProductRow;
