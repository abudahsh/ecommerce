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
          <Text>Price: 900 L.E</Text>
          <Text>Num: 1</Text>
        </View>
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
