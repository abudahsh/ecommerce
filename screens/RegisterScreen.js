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
import  store  from "./../redux/store";
class RegisterScreen extends React.Component {
  handleLogin = () => {
    var {email, username, firstName, lastName, Password} = this.state
    this.props._registerUser(email, username, firstName, lastName, Password);
  };
  componentWillUpdate() {
    if (store.getState().client.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }
  }
  state = {
    email: "",
    username:'',
    firstName: "",
    lastName: "",
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
            marginBottom: 5,
            textAlign:'center'
          }}
          placeholder="Email"
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
            textAlign:'center'
          }}
          placeholder="username"
          value={this.state.username}
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
            textAlign:'center'
          }}
          placeholder="firstName"
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
            textAlign:'center'
          }}
          placeholder="surName"
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
            textAlign:'center'
          }}
          placeholder="phone"
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
            textAlign:'center'
          }}
          placeholder="Password"
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
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _registerUser: (email, username, firstName, lastName, Password) => dispatch(_registerUser(email, username, firstName, lastName, Password))
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
