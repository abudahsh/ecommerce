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
var image = require("./../assets/about.jpg");
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
          source={image}
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
              ¡Conoce a los líderes del proyecto!
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
                Programa de Artesanías de Boyacá
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
            <Text style={{ color: "white" }}>Ver todos los artesanos</Text>
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
                P e r f i l e s
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ position: "absolute", right: 20, bottom: 30 }}>
            <Text style={{ color: "white", fontSize: 14 }}>
              Desarrollado por RTNBIT S.A.S.{" "}
            </Text>
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
