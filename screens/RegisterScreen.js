import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import { withNavigation } from "react-navigation";

import { connect } from "react-redux";
import { _registerUser } from "./../redux/actions";
import { store } from "./../redux/store";
class RegisterScreen extends React.Component {
  handleLogin = () => {
    this.props._registerUser(this.state.email, this.state.Password);
  };
  componentWillUpdate() {
    if (store.getState().client.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }
  }
  state = {
    email: "",
    firstName: "",
    surName: "",
    phone: "",
    Password: ""
  };
  render() {
    return (
      <View style={styles.loginContainer}>
        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4",
            marginBottom: 5
          }}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4",
            marginBottom: 5
          }}
          placeholder="firstName"
          onChangeText={firstName => this.setState({ firstName })}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4",
            marginBottom: 5
          }}
          placeholder="surName"
          onChangeText={surName => this.setState({ surName })}
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4",
            marginBottom: 5
          }}
          placeholder="phone"
          onChangeText={phone => this.setState({ phone })}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={{
            width: 0.6 * sWidth,
            borderRadius: 10,
            height: 40,
            backgroundColor: "#e4e4e4"
          }}
          placeholder="Password"
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
          <Text style={{ color: "#e48d31", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _registerUser: (username, Password) => dispatch(_registerUser())
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
