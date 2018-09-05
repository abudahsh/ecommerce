import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import HeaderBar from "../components/HeaderBar";
import Icon from "react-native-vector-icons/FontAwesome";
import ProdctTabs from "../components/ProductTabs";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
fakeData = [{}, {}, {}, {}];
class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  state = {};

  _renderItem = () => (
    <Image
      source={require("./../assets/product1.jpg")}
      style={{ width: 150, height: 200 }}
    />
  );
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "Product Name");
    const describtion = navigation.getParam(
      "describtion",
      "Product's describtion"
    );
    const price = navigation.getParam("price", "00.0");
    const vendorName = navigation.getParam("vendorName", "vendor name");
    const vendorDesc = navigation.getParam("vendorDesc", "The best place ever");

    return (
      <View style={styles.container}>
        <View style={{ height: "45%" }}>
          <Swiper style={{ flex: 1 }} width={sWidth}>
            {fakeData.map(data => (
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
          <Text>Num: 1</Text>
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
        <ProdctTabs />

        <Text>{name}</Text>
        <Text>{describtion}</Text>
        <Text>{vendorName}</Text>
        <Text>{vendorDesc}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProductDetailScreen;
