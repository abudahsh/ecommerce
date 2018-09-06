import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class ProductRow extends React.Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate("ProductDetail", {
              name: "Awesome Product",
              describtion: "This product is the best in our city, try it",
              price: 1299,
              vendorName: "Oddaa",
              vendorDesc: "WE are working since 1932"
            })
          }
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
                    borderTopLeftRadius: 25,
                    justifyContent: "center"
                  }}
                >
                  <Icon
                    name="shopping-bag"
                    size={20}
                    color="white"
                    style={{
                      paddingRight: 10,
                      paddingVertical: 5,
                      paddingLeft: 3
                    }}
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
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default withNavigation(ProductRow);
