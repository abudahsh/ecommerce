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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Vendors")}
          style={{
            backgroundColor: "blue",
            height: 0.44 * sHeight,
            borderBottomWidth: 50,
            borderRightWidth: 50,
            borderBottomColor: "black",
            borderRightColor: "black"
          }}
        >
          <Text style={{ color: "white" }}>Hi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: "red", height: 0.44 * sHeight }}
        >
          <Text style={{ color: "white" }}>Hi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default AboutScreen;
