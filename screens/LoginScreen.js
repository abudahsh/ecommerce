import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid
} from "react-native";
import { _loginUser } from "./../redux/actions";
import { connect } from "react-redux";
import HeaderBar from "../components/HeaderBar";
import Toast from "react-native-simple-toast";
import { withNavigation } from "react-navigation";
sWidth = Dimensions.get("window").width;

class LoginScreen extends React.Component {
  state = {
    email: "",
    Password: ""
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  handleLogin = () => {
    this.props._loginUser(this.state.email, this.state.Password);
  };
  componentWillUpdate() {
    if (this.props.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated == false) {
      Toast.show(nextProps.message, Toast.SHORT);
    }
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      );
    } else {
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
            value={this.state.email}
            placeholder="Correo Electronico/Usuario"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
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
            placeholder="Contraseña"
            value={this.state.Password}
            onChangeText={Password => this.setState({ Password })}
            autoCapitalize="none"
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
            <Text style={{ color: "#e48d31", fontWeight: "bold" }}>Entrar</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading,
  message: state.client.message
});

const mapDispatchToProps = dispatch => ({
  _loginUser: (email, Password) => dispatch(_loginUser(email, Password))
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
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
