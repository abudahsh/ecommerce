import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class ProductRow extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ProductDetail")}
        >
          <View>
            <Image
              source={require("./../assets/product3.jpg")}
              style={{
                width: 0.45 * sWidth,
                height: 0.28 * sHeight,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15
              }}
            />
            <View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#894e2e",
                    fontWeight: "bold"
                  }}
                >
                  Product blah
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10
                }}
              >
                <Text style={{ color: "black", paddingTop: 5, paddingLeft: 7 }}>
                  900 $
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#e48d31",
                    paddingLeft: 10,
                    borderBottomLeftRadius: 25,
                    borderTopLeftRadius: 25
                  }}
                >
                  <Image
                    source={require("./../assets/Icons/cart.png")}
                    style={{ height: 30, width: 30, marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image
                  source={require("./../assets/Icons/profile.png")}
                  style={{ height: 15, width: 15 }}
                />
                <Text style={{ fontSize: 12, color: "black" }}>Vendor</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ProductRow);
