import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
  ImageBackground
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
        <ImageBackground
          source={require("./../assets/about.jpg")}
          style={{ width: sWidth, height: 0.9 * sHeight }}
        >
          <View
            style={{
              height: 0.45 * sHeight,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 20
            }}
          >
            <Text style={{ color: "white" }}>
              Get to know all Boyaca team now!
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Programmers")}
              style={{
                borderColor: "#e48d31",
                borderRadius: 15,
                height: 35,
                borderWidth: 2,
                justifyContent: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Programa Artesanias de Boyaca
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 0.45 * sHeight,
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: 20
            }}
          >
            <Text style={{ color: "white" }}>Get to see all our vendors</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Vendors")}
              style={{
                borderColor: "#e48d31",
                borderRadius: 15,
                height: 35,
                borderWidth: 2,
                justifyContent: "center",
                paddingHorizontal: 7,
                marginLeft: 35
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                P r e f i l e s
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
