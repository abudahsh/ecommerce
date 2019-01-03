import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import StarRating from "react-native-star-rating";
import { _fetchOneVendor } from "../redux/actions";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
sHight = Dimensions.get("screen").height;
sWidth = Dimensions.get("screen").width;
class VendorRow extends Component {
  constructor(props) {
    super(props);
    this.state = { starCount: 3 };
  }
  handlePress=()=>{
    this.props._fetchOneVendor(this.props.id)
    this.props.navigation.navigate("VendorDetail")
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          minHeight: 0.2 * sHight,
          padding: 8,
          borderBottomColor: "#b7a195",
          borderBottomWidth: 1,
          maxHeight: 0.25 * sHight
        }}
      >
        <TouchableWithoutFeedback
          onPress={this.handlePress}
          style={{
            paddingBottom: 5,
            justifyContent: "center"
          }}
        >
          <Image
            source={require("./../assets/product4.jpg")}
            style={{
              height: 0.35 * sWidth,
              width: 0.35 * sWidth,
              borderRadius: 19,
              marginRight: 10
            }}
          />
        </TouchableWithoutFeedback>
        <View style={{ width: 0.55 * sWidth }}>
          <View >
            <TouchableOpacity
              onPress={this.handlePress}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#4b2727",
                  marginRight: 5
                }}
              >
                {this.props.name}
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
            <View style={{maxHeight:0.12 * sHight}}>
            <Text style={{ color: "#e48d31", maxHeight: 0.12 * sHight }}>
            {this.props.description}
          </Text>
            </View>
          
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchOneVendor: id => dispatch(_fetchOneVendor(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(VendorRow));

