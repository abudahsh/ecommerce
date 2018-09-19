import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
sHight = Dimensions.get("screen").height;
class VendorRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{ flexDirection: "row", minHeight: 0.25 * sHight, padding: 8 }}
      >
        <View style={{ paddingRight: 10, paddingBottom: 5 }}>
          <Image
            source={require("./../assets/product4.jpg")}
            style={{ height: 0.2 * sHight, width: 0.2 * sHight }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#e48d31" }}>
            Vendor Name
          </Text>
        </View>
        <View>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
        </View>
      </View>
    );
  }
}

export default VendorRow;
