import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import VendorRow from "../components/VendorRow";
wrongData = [{}, {}, {}, {}];
class VendorListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View>
      <VendorRow {...item} />
    </View>
  );
  render() {
    return (
      <View>
        <FlatList
          data={wrongData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default VendorListScreen;
