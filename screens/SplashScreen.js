import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Image
          source={require("./../assets/ic_launcher.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }
}

export default SplashScreen;
