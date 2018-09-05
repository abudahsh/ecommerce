import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions
} from "react-native";
import { _loginUser } from "./../redux/actions";
import { connect } from "react-redux";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";

import { withNavigation } from "react-navigation";
sWidth = Dimensions.get("window").width;

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    email: "",
    Password: ""
  };
  handleLogin = () => {
    this.props._loginUser(this.state.email, this.state.Password);
  };
  componentWillUpdate() {
    if (store.getState().client.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }
  }
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
            backgroundColor: "#e4e4e4"
          }}
          placeholder="Password"
          onChangeText={Password => this.setState({ Password })}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#4b2727",
            width: 0.4 * sWidth,
            height: 30,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
          onPress={this.handleLogin}
        >
          <Text style={{ color: "#e48d31", fontWeight: "bold" }}>Login</Text>
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
)(withNavigation(LoginScreen));
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
