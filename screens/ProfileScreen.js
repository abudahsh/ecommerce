import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { store } from "./../redux/store";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
