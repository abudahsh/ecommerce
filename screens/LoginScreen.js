import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import { _loginUser } from "./../redux/actions";
import { connect } from "react-redux";
import { store } from "./../redux/store";
class LoginScreen extends React.Component {
  state = {
    email: "",
    Password: ""
  };
  handleLogin = () => {
    this.props._loginUser(this.state.email, this.state.Password);
  };
  componentWillUpdate() {
    if (store.getState().client.isAuthenticated) {
      this.props.navigation.navigate("Cart");
    }
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <TextInput
          style={{ width: "60%" }}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={{ width: "60%" }}
          placeholder="Password"
          onChangeText={Password => this.setState({ Password })}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{ backgroundColor: "purple" }}
          onPress={this.handleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <Text>If you don't have account, you can</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ fontWeight: "bold" }}>Register</Text>
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
  _loginUser: (username, Password) => dispatch(_loginUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
