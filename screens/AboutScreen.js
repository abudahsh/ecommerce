import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> AboutScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AboutScreen;
