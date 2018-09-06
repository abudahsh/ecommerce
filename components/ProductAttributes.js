import React from "react";
import { View, Text } from "react-native";

class ProductAttributes extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Height: 5 inch</Text>
          <Text>Width: 9 inch</Text>
        </View>

        <Text>Material: Paper</Text>
      </View>
    );
  }
}

export default ProductAttributes;
