import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> ProfileScreen </Text>
        <Text>{store.getState().user.email}</Text>
        <Text>{store.getState().user.token}</Text>
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

export default ProfileScreen;
