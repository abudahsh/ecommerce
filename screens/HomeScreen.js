import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
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

class HomeScreen extends Component {
  state = {};
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      style={{ borderColor: "gray", borderWidth: StyleSheet.hairlineWidth }}
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
    flex: 1
  }
});

export default HomeScreen;
