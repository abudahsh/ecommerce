import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { withNavigation } from "react-navigation";

class ProductRow extends React.Component {
  render() {
    return (
      <View style={{ paddingLeft: 6 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetail")}
        >
          <View>
            <Image
              source={require("./../assets/product1.jpg")}
              style={{ width: 170, height: 200 }}
            />
            <Text>Product blah</Text>
            <Text style={{ color: "blue" }}>Price: 900</Text>
            <Text style={{ fontSize: 12 }}>Product blah blah blah</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ProductRow);
