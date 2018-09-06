import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import HeaderBar from "../components/HeaderBar";
sWidth = Dimensions.get("window").width;
fakeData = [{}, {}, {}, {}, {}, {}, {}];
class VendorDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  state = {};
  _renderItem = ({ item }) => (
    <View>
      <Image
        source={require("./../assets/product3.jpg")}
        style={{ width: 0.33 * sWidth, height: 300 }}
      />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("./../assets/product3.jpg")}
              style={{ height: 150, width: 150, marginRight: 10 }}
            />
          </View>
          <View style={{ flexWrap: "wrap" }}>
            <Text>Name: Mahmoud Shoes</Text>
            <Text>Adress: beside gov building, gom ST</Text>
            <Text>Telephone:0203032043</Text>
            <Text>Rating: 4.5</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Products</Text>
        </View>

        <FlatList
          data={fakeData}
          renderItem={this._renderItem}
          kkeyExtractor={this._keyExtractor}
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default VendorDetailScreen;
