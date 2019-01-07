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
import { _fetchOneProduct, _addToCart } from "../redux/actions";
import { connect } from "react-redux";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class ProductRow extends React.Component {
  state = {};

  render() {
    return (
      <View
        style={{
          width: 0.46 * sWidth,
          maxHeight: 0.38 * sHeight
        }}
      >
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate("ProductDetail", {
              id: this.props.id,
              name: this.props.name,
              // describtion: this.props.description,
              price: this.props.price,
              vendorName: this.props.seller_name
            })
          }
        >
          <View>
            <Image
              source={{ uri: this.props.first_image }}
              style={{
                width: 0.45 * sWidth,
                height: 0.25 * sHeight,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                marginTop: 5
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
                  {this.props.name.substring(0, 24)}
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
                  {this.props.price} $
                </Text>
                <TouchableOpacity
                  onPress={() => this.props._addToCart(this.props.id, 1)}
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
                <Text style={{ fontSize: 12, color: "black" }}>
                  {this.props.seller_name.substring(0, 24)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchOneProduct: id => dispatch(_fetchOneProduct(id)),
  _addToCart: (id, quantity) => dispatch(_addToCart(id, quantity))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ProductRow));
