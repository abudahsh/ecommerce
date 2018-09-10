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
  TextInput
} from "react-native";
import Swiper from "react-native-swiper";
import StarRating from "react-native-star-rating";
import HeaderBar from "../components/HeaderBar";
import Icon from "react-native-vector-icons/FontAwesome";
import ProdctTabs from "../components/ProductTabs";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
falseData = [{}, {}, {}, {}];
class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
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

  //enables users to change rating, remove it in this page and keep it only in vendor screen
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    const { navigation } = this.props;

    const price = navigation.getParam("price", "00.0");
    const vendorName = navigation.getParam("vendorName", "vendor name");
    const vendorDesc = navigation.getParam(
      "vendorDesc",
      "The best place ever "
    );

    return (
      <ScrollView style={styles.container}>
        <View style={{ height: 0.3 * sHeight }}>
          <Swiper width={sWidth}>
            {falseData.map(data => (
              <Image source={require("./../assets/product2.jpg")} />
            ))}
          </Swiper>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text>{"price: " + price}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text>Num: </Text>
            <TextInput
              value={this.state.num}
              onChangeText={num => this.setState({ num })}
              style={{
                width: 30,
                height: 40,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center"
              }}
            />
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ num: String(Number(this.state.num) + 1) })
                }
              >
                <Icon name="arrow-up" size={15} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ num: String(Number(this.state.num) - 1) })
                }
              >
                <Icon name="arrow-down" size={15} />
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
          <TouchableOpacity>
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
                Add to cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", flex: 1, height: 150 }}>
          <ProdctTabs />
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
            Vendor Information
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("VendorDetail")}
        >
          <View style={{ flexDirection: "row", flex: 1, margin: 10 }}>
            <View>
              <Image
                source={require("./../assets/product3.jpg")}
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
              <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#4b2727" }}
                >
                  {vendorName}
                </Text>
                <StarRating
                  disabled={true}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  halfStar={"ios-star-half"}
                  iconSet={"Ionicons"}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor={"#ffd203"}
                  starSize={25}
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
                  backgroundColor: "#f7f7f7"
                }}
              >
                <Text style={{ paddingHorizontal: 6 }}>{vendorDesc}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProductDetailScreen;
