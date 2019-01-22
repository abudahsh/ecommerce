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
import store from "./../redux/store";
import Toast from 'react-native-simple-toast'
class RegisterScreen extends React.Component {
  handleLogin = () => {
    var { email, username, firstName, lastName, Password } = this.state;
    this.props._registerUser(email, username, firstName, lastName, Password);
  };
  componentWillUpdate() {
    if (store.getState().client.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }
  }
  state = {
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    Password: ""
  };
  componentWillReceiveProps(nextProps){
    if (nextProps.message){
      Toast.show(nextProps.message, Toast.SHORT)
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.loginContainer}>
        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4",
            marginBottom: 5,
            textAlign: "center"
          }}
          placeholder="correo electrónico"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          underlineColorAndroid="transparent"
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
          placeholder="nombre de usuario"
          value={this.state.username}
          autoCapitalize="none"
          onChangeText={username => this.setState({ username })}
          underlineColorAndroid="transparent"
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
          placeholder="nombre de pila"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
          underlineColorAndroid="transparent"
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
          placeholder="apellido"
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
          underlineColorAndroid="transparent"
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
          placeholder="número de teléfono"
          keyboardType="numeric"
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4",
            textAlign: "center"
          }}
          placeholder="contraseña"
          value={this.state.Password}
          onChangeText={Password => this.setState({ Password })}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          onPress={this.handleLogin}
          style={{
            backgroundColor: "#4b2727",
            width: 0.4 * sWidth,
            height: 40,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#e48d31", fontWeight: "bold" }}>Guardor</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading,
  message:state.client.message
});
const mapDispatchToProps = dispatch => ({
  _registerUser: (email, username, firstName, lastName, Password) =>
    dispatch(_registerUser(email, username, firstName, lastName, Password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(RegisterScreen));
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
