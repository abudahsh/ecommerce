import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";

class RegisterScreen extends React.Component {
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
          style={{ width: "60%" }}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={{ width: "60%" }}
          placeholder="firstName"
          onChangeText={firstName => this.setState({ firstName })}
        />
        <TextInput
          style={{ width: "60%" }}
          placeholder="surName"
          onChangeText={surName => this.setState({ surName })}
        />

        <TextInput
          style={{ width: "60%" }}
          placeholder="phone"
          onChangeText={phone => this.setState({ phone })}
        />
        <TextInput
          style={{ width: "60%" }}
          placeholder="Password"
          onChangeText={Password => this.setState({ Password })}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterScreen;
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
