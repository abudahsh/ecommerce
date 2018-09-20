import React from "react";
import { View, Text } from "react-native";

class ProductAttributes extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#4b2727" }}>Height: 5 inch</Text>
          <Text style={{ color: "#4b2727" }}>Width: 9 inch</Text>
        </View>

        <Text style={{ color: "#4b2727" }}>Material: Paper</Text>
      </View>
    );
  }
}

export default ProductAttributes;
