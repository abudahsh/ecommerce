import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Platform
} from "react-native";
import Swiper from "react-native-swiper";
import StarRating from "react-native-star-rating";
import HeaderBar from "../components/HeaderBar";
import Icon from "react-native-vector-icons/FontAwesome";
import ProdctTabs from "../components/ProductTabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import {
  _fetchCategoryOneProduct,
  _addToCart,
  _fetchOneVendor
} from "./../redux/actions";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
falseData = [{}, {}, {}, {}];
class CategoryProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />,
      title: navigation.getParam("name", "Detalle")
    };
  };

  state = {
    starCount: 3.5,
    num: "1"
  };

  _renderItem = () => (
    <Image
      source={require("./../assets/product1.jpg")}
      style={{ width: 150, height: 200 }}
    />
  );
  componentWillMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "1");
    this.props._fetchCategoryOneProduct(id);
  }
  //enables users to change rating, remove it in this page and keep it only in vendor screen
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  handleAddToCart = () => {
    this.props._addToCart(this.props.product.id, this.state.num);
  };
  handleNavToVendor = () => {
    this.props._fetchOneVendor(this.props.product.seller.id);
    this.props.navigation.navigate("VendorDetail");
  };

  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} color="orange" />
        </View>
      );
    } else if (this.props.product.images) {
      return (
        <ScrollView style={styles.container}>
          <View style={{ height: 0.3 * sHeight }}>
            <Swiper
              width={sWidth}
              dotStyle={{ backgroundColor: "white" }}
              activeDotStyle={{
                backgroundColor: "#e48d31"
              }}
            >
              {this.props.product.images.map(data => (
                <Image
                  key={data.order}
                  source={{ uri: data.image }}
                  style={{ width: sWidth, height: 0.3 * sHeight }}
                />
              ))}
            </Swiper>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 4,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#e48d31",
                  paddingRight: 10
                }}
              >
                Precio :
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#e48d31" }}
              >
                $ {this.props.product.price}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#e48d31",
                borderRadius: 5
              }}
            >
              <TextInput
                value={this.state.num}
                onChangeText={num => this.setState({ num })}
                style={{
                  minWidth: 36,
                  height: 40,

                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                  paddingLeft: 10,
                  paddingVertical: 0
                }}
              />
              <View>
                <TouchableOpacity
                  onPress={
                    this.state.num < 99
                      ? () =>
                          this.setState({
                            num: String(Number(this.state.num) + 1)
                          })
                      : () => null
                  }
                >
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={15}
                    color="#e48d31"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={
                    this.state.num > 1
                      ? () =>
                          this.setState({
                            num: String(Number(this.state.num) - 1)
                          })
                      : () => null
                  }
                >
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={15}
                    color="#e48d31"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 0.1 * sHeight,

              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={this.handleAddToCart}>
              <View
                style={{
                  padding: 15,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e48d31",
                  width: 0.4 * sWidth,
                  height: 0.06 * sHeight,
                  borderRadius: 15,
                  paddingVertical: 12
                }}
              >
                <Icon name="shopping-bag" size={20} color="white" />
                <Text
                  style={{ fontWeight: "bold", paddingLeft: 6, color: "white" }}
                >
                  Añadir al Carrito
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              height: Platform.OS === "ios" ? 150 : 0.4 * sHeight
            }}
          >
            <ProdctTabs
              description={this.props.product.description}
              attributes={this.props.product.additional_attributes}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#b7a195",
              borderBottomWidth: 2,
              marginHorizontal: 25
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#4b2727" }}>
              Información del vendedor
            </Text>
          </View>

          <TouchableOpacity onPress={this.handleNavToVendor}>
            <View style={{ flexDirection: "row", flex: 1, margin: 10 }}>
              <View>
                <Image
                  source={{ uri: this.props.product.seller.avatar }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: 1,
                    borderColor: "orange"
                  }}
                />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 0.7 * sWidth }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#4b2727"
                    }}
                  >
                    {this.props.product.seller.name}
                  </Text>
                  <StarRating
                    disabled={true}
                    emptyStar={"ios-star-outline"}
                    fullStar={"ios-star"}
                    halfStar={"ios-star-half"}
                    iconSet={"Ionicons"}
                    maxStars={5}
                    rating={this.props.product.seller.rate}
                    selectedStar={rating => this.onStarRatingPress(rating)}
                    fullStarColor={"#ffd203"}
                    starSize={25}
                    containerStyle={{ width: 0.3 * sWidth }}
                  />
                </View>

                <View
                  style={{
                    borderBottomColor: "#D3D3D3",
                    borderRightColor: "#D3D3D3",
                    borderBottomEndRadius: 7,
                    borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderBottomRightRadius: 7,
                    width: 0.75 * sWidth,
                    minHeight: 50,
                    borderTopRightRadius: 7,
                    borderTopColor: "white",
                    borderBottomLeftRadius: 7,
                    borderLeftColor: "white",
                    borderTopLeftRadius: -30,
                    backgroundColor: "#f7f7f7",
                    marginLeft: 2
                  }}
                >
                  <Text style={{ paddingHorizontal: 6 }}>
                    {this.props.product.seller.description}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} color="orange" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const mapStateToProps = state => ({
  product: state.currentCategoryProduct,

  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchCategoryOneProduct: id => dispatch(_fetchCategoryOneProduct(id)),
  _addToCart: (id, quantity) => dispatch(_addToCart(id, quantity)),
  _fetchOneVendor: id => dispatch(_fetchOneVendor(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryProductDetailScreen);
