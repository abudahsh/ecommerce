import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryRow from "./../components/CategoryRow";
anotherData = [
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
  {},
  {},
  {},
  {},
  {},
  {}
];

class CategoriesScreen extends Component {
  state = {};
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      style={{ borderColor: "gray", borderWidth: StyleSheet.hairlineWidth }}
    >
      <CategoryRow {...item} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={anotherData}
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
