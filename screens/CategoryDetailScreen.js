import React, { Component } from "react";
import { View, Text } from "react-native";
import HeaderBar from "../components/HeaderBar";

class CategoryDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  state = {};

  render() {
    return (
      <View>
        <Text> CategoryDetailScreen </Text>
      </View>
    );
  }
}

export default CategoryDetailScreen;
