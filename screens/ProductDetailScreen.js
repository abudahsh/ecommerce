import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
sWidth = Dimensions.get("window").width;
fakeData = [{}, {}, {}, {}];
class ProductDetailScreen extends Component {
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
