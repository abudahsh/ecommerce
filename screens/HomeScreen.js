import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import ProductRow from "./../components/ProductRow";

otherData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class HomeScreen extends Component {
  state = {};
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "white",
        borderColor: "#e5e5e5",
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopColor: "#e5e5e5",
        borderRadius: 15,
        marginHorizontal: 0.025 * sWidth,
        marginVertical: 8
      }}
    >
      <ProductRow {...item} />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={otherData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc"
  }
});

export default HomeScreen;
