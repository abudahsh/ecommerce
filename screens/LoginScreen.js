import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { _loginUser } from "./../redux/actions";
import { connect } from "react-redux";
import HeaderBar from "../components/HeaderBar";

import { withNavigation } from "react-navigation";
sWidth = Dimensions.get("window").width;

class LoginScreen extends React.Component {
  
  
  state = {
    email: "mohamedabdelhameed34@gmail.com",
    Password: "hh",

  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  }
  handleLogin = () => {
    this.props._loginUser(this.state.email, this.state.Password);  
  };
  componentWillUpdate() {
    if (this.props.isAuthenticated) {
      this.props.navigation.navigate("Home");
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
            value={this.state.email}
            placeholder="Email"
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
              textAlign:'center'
            }}
            placeholder="Password"
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
          {this.props.isConnected?
        <Text>Online</Text>  :
        <Text>Offline</Text>
        }
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated,
  isConnected:state.client.isConnected,
  isLoading: state.client.isLoading,
  isConnected: state.network.isConnected
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
