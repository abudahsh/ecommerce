import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";

class LoginScreen extends React.Component {
  state = {
    email: "",
    Password: ""
  };
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
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
