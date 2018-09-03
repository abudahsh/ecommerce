import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { store } from "./../redux/store";

sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class ContactScreen extends Component {
  state = {};

  render() {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            height: 0.06 * sHeight,
            backgroundColor: "#4b2727",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./../assets/Icons/arrow.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("./../assets/Icons/search.png")}
              style={{ width: 25, height: 25, marginHorizontal: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (store.getState().client.isAuthenticated) {
                this.props.navigation.navigate("Cart");
              }
              this.props.navigation.navigate("Login");
            }}
          >
            <Image
              source={require("./../assets/Icons/cart.png")}
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (store.getState().client.isAuthenticated) {
                this.props.navigation.navigate("Profile");
              }
              this.props.navigation.navigate("Login");
            }}
          >
            <Image
              source={require("./../assets/Icons/account.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={{ color: "#4b2727", fontSize: 25 }}>Asunto</Text>
          <TextInput
            placeholder="servicio al cliente"
            style={{ width: "70%" }}
          />
          <Text style={{ color: "#4b2727", fontSize: 25 }}>
            Correo electronico
          </Text>
          <TextInput
            placeholder="example@website.com"
            style={{ width: "70%" }}
          />
          <Text style={{ color: "#4b2727", fontSize: 25 }}>Mensaje</Text>
          <TextInput
            style={{ width: "70%", height: 120 }}
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#4b2727",
              borderRadius: 30,
              width: "40%",
              height: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>ENVAIR</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
            Information
          </Text>
          <ImageBackground
            source={require("./../assets/Rectangle.png")}
            style={{ width: 0.8 * sWidth, height: 0.3 * sHeight }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Icon name="map-marker" size={45} color={"#4b2727"} />
              <Text>blah blah blah blah blah blah</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Icon name="phone" size={45} color={"#4b2727"} />
              <Text>blah blah blah blah blah blah</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Icon name="send" size={35} color={"#4b2727"} />
              <Text>blah blah blah blah blah blah</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25
  }
});

export default ContactScreen;
