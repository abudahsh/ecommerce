import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderBar from "../components/HeaderBar";

class VendorDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> VendorDetailScreen </Text>
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

export default VendorDetailScreen;
