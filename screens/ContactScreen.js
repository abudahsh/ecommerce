import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ContactScreen extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> ContactScreen </Text>
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

export default ContactScreen;
