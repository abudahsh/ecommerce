import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

class CategoryRow extends React.Component {
  render() {
    return (
      <View style={{ paddingLeft: 6 }}>
        <Image
          source={require("./../assets/product1.jpg")}
          style={{ width: 170, height: 200 }}
        />
        <Text style={{ fontWeight: "bold" }}>Clothes</Text>

        <Text style={{ fontSize: 12 }}>Product blah blah blah</Text>
      </View>
    );
  }
}

export default CategoryRow;
