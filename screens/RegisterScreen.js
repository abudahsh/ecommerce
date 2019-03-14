import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";

import { connect } from "react-redux";
import { _registerUser } from "./../redux/actions";
import { store } from "./../redux/store";
import Toast from "react-native-simple-toast";
class RegisterScreen extends React.Component {
  handleLogin = () => {
    var { email, username, Password, nationalID, fullName } = this.state;
    this.props._registerUser(email, username, Password, nationalID, fullName);
  };
  componentWillUpdate() {
    if (store.getState().client.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }
  }
  state = {
    email: "",
    username: "",
    fullName: "",
    nationalID: "",
    Password: ""
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      Toast.show(nextProps.message, Toast.SHORT);
    }
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.loginContainer}
      >
        <View>
          <TextInput
            key={"correo electrónico"}
            style={{
              width: 0.6 * sWidth,
              borderRadius: 10,
              height: 40,
              backgroundColor: "#e4e4e4",
              marginBottom: 5,
              textAlign: "center"
            }}
            placeholder={"correo electrónico"}
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid="transparent"
            returnKeyLabel="siguiente"
            returnKeyType="next"
          />
          <TextInput
            style={{
              width: 0.6 * sWidth,
              borderRadius: 10,
              height: 40,
              backgroundColor: "#e4e4e4",
              marginBottom: 5,
              textAlign: "center"
            }}
            key={"Usuario"}
            placeholder="Usuario"
            value={this.state.username}
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
            returnKeyLabel="siguiente"
            returnKeyType="next"
          />
          <TextInput
            style={{
              width: 0.6 * sWidth,
              borderRadius: 10,
              height: 40,
              backgroundColor: "#e4e4e4",
              marginBottom: 5,
              textAlign: "center"
            }}
            key={"Nombres"}
            placeholder="Nombre completo"
            value={this.state.fullName}
            onChangeText={fullName => this.setState({ fullName })}
            underlineColorAndroid="transparent"
            returnKeyLabel="siguiente"
            returnKeyType="next"
          />

          <TextInput
            style={{
              width: 0.6 * sWidth,
              borderRadius: 10,
              height: 40,
              backgroundColor: "#e4e4e4",
              marginBottom: 5,
              textAlign: "center"
            }}
            key="nacional"
            placeholder="Identificación nacional"
            keyboardType="numeric"
            value={this.state.nationalID}
            onChangeText={nationalID => this.setState({ nationalID })}
            underlineColorAndroid="transparent"
            returnKeyLabel="siguiente"
            returnKeyType="next"
          />
          <TextInput
            style={{
              width: 0.6 * sWidth,
              borderRadius: 10,
              height: 40,
              backgroundColor: "#e4e4e4",
              textAlign: "center"
            }}
            key={"contraseña"}
            placeholder="Contraseña"
            value={this.state.Password}
            onChangeText={Password => this.setState({ Password })}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            returnKeyLabel="enviar"
            returnKeyType="go"
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={this.handleLogin}
              style={{
                backgroundColor: "#4b2727",
                width: 0.4 * sWidth,
                height: 40,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
              }}
            >
              <Text style={{ color: "#e48d31", fontWeight: "bold" }}>
                Guardor
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading,
  message: state.client.message
});
const mapDispatchToProps = dispatch => ({
  _registerUser: (email, username, Password, nationalID, fullName) =>
    dispatch(_registerUser(email, username, Password, nationalID, fullName))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(RegisterScreen));
const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center"
  }
});
