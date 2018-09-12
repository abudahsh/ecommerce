import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
sWidth = Dimensions.get("window").width;
class VendorProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
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
          style={{ width: 0.3 * sWidth, height: 100, borderRadius: 50 }}
        />
        <Text>Product Name</Text>
        <Text>$ 60.00</Text>
      </View>
    );
  }
}

export default VendorProductRow;
