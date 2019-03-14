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
  Dimensions,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import HeaderBar from "./../components/HeaderBar";
import { _contactMessage } from "../redux/actions";
import Toast from "react-native-simple-toast";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class ContactScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  componentDidMount() {
    this.animation ? this.animation.play(0, 100) : null;
  }
  handleSubmit = () => {
    let { name, phone, email, message } = this.state;
    this.props._contactMessage(name, phone, email, message);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      Toast.show(nextProps.message, Toast.SHORT);
    }
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <LottieView
              source={require("./../assets/messagea7a.json")}
              ref={animation => {
                this.animation = animation;
              }}
              autoPlay
              style={{ width: 300, height: 300 }}
            />

            <TextInput
              placeholder="Nombre"
              style={[styles.textinput, { width: 0.8 * sWidth }]}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              underlineColorAndroid="transparent"
            />
            <TextInput
              placeholder="Telefono"
              style={[styles.textinput, { width: 0.8 * sWidth }]}
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              keyboardType="phone-pad"
              underlineColorAndroid="transparent"
            />
            <TextInput
              placeholder="Correo electronico"
              style={[styles.textinput, { width: 0.8 * sWidth }]}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              underlineColorAndroid="transparent"
            />

            <TextInput
              multiline={true}
              style={[styles.textinput, { width: 0.8 * sWidth, height: 120 }]}
              placeholder="Mensaje"
              value={this.state.message}
              onChangeText={message => this.setState({ message })}
              underlineColorAndroid="transparent"
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={this.handleSubmit}
                style={{
                  backgroundColor: "#4b2727",
                  borderRadius: 30,
                  width: "40%",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#e48d31" }}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View
            style={{
              padding: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Información
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
                  justifyContent: "space-around",
                  width: 0.8 * sWidth
                }}
              >
                <Icon name="map-marker" size={45} color={"#4b2727"} />
                <View style={{ width: 0.7 * sWidth }}>
                  <Text>
                    Calle 20 No. 9-90 Oficina 202-203, Centro Plaza de Bolívar,
                    Tunja, Boyacá Colombia
                  </Text>
                </View>
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
                <View style={{ width: 0.7 * sWidth }}>
                  <Text>(8) 742 0150 Ext. 220</Text>
                </View>
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
                <View style={{ width: 0.7 * sWidth }}>
                  <Text>info@artesaniasdeboyaca.com</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25
  },
  textinput: {
    borderColor: "grey",
    borderRadius: 25,
    borderWidth: 1,
    textAlign: "center",
    height: 40,
    paddingVertical: 0
  }
});

const mapStateToProps = state => ({
  isLoading: state.client.isLoading,
  message: state.client.message
});
const mapDispatchToProps = dispatch => ({
  _contactMessage: (name, phone, email, message) =>
    dispatch(_contactMessage(name, phone, email, message))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen);
