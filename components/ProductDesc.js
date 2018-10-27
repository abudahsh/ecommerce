import React from "react";
import { View, Text } from "react-native";

class ProductDesc extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ color: "#4b2727" }}>
          Este producto es el mejor en nuestra ciudad, pruébalo.
        </Text>
      </View>
    );
  }
}

export default ProductDesc;
