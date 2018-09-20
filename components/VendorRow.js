import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";
import { withNavigation } from "react-navigation";
sHight = Dimensions.get("screen").height;
sWidth = Dimensions.get("screen").width;
class VendorRow extends Component {
  constructor(props) {
    super(props);
    this.state = { starCount: 3 };
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          minHeight: 0.2 * sHight,
          padding: 8,
          borderBottomColor: "#b7a195",
          borderBottomWidth: 1
        }}
      >
        <View
          style={{
            paddingRight: 10,
            paddingBottom: 5,
            justifyContent: "center"
          }}
        >
          <Image
            source={require("./../assets/product4.jpg")}
            style={{
              height: 0.2 * sHight,
              width: 0.2 * sHight,
              borderRadius: 12
            }}
          />
        </View>
        <View style={{ width: 0.55 * sWidth }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("VendorDetail")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#4b2727",
                  marginRight: 5
                }}
              >
                Vendor Name
              </Text>
            </TouchableOpacity>
            <StarRating
              containerStyle={{ width: 70 }}
              disabled={true}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={rating => this.onStarRatingPress(rating)}
              fullStarColor={"#ffd203"}
              starSize={18}
            />
          </View>

          <Text style={{ color: "#e48d31", height: 0.2 * sHight }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(VendorRow);
