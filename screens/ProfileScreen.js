import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";
import { _fetchProfile, _updateProfile, _logoutUser } from "../redux/actions";
import Toast from "react-native-simple-toast";
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    email: "",
    username: "",
    fullName: "",
    nationalID: "",
    phone: "",
    address: ""
  };
  componentWillMount() {
    if (this.props.isAuthenticated == false) {
      this.props.navigation.navigate("Auth");
    }
  }
  componentDidMount() {
    this.props._fetchProfile();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      email: nextProps.user.email,
      username: nextProps.user.username,
      fullName: nextProps.user.fullName,
      nationalID: nextProps.user.nationalID,
      phone: nextProps.user.phone,
      address: nextProps.user.address
    });

    if (!nextProps.isAuthenticated) {
      this.props.navigation.navigate("Auth");
    }

    if (nextProps.message) {
      Toast.show(nextProps.message, Toast.SHORT);
    }
  }
  handleUpdate = () => {
    let { fullName, nationalID, address, phone } = this.state;
    this.props._updateProfile(fullName, nationalID, address, phone);
  };
  handleLogout = () => {
    this.props._logoutUser();
  };

  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="orange" />
        </View>
      );
    } else {
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              value={this.state.email}
              placeholder="Correo Electronico"
              onChangeText={email => this.setState({ email })}
              editable={false}
            />
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              placeholder="Usuario"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              editable={false}
            />
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              value={this.state.fullName}
              placeholder="Nombre completo"
              onChangeText={fullName => this.setState({ fullName })}
              editable={true}
            />
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              value={this.state.nationalID}
              placeholder="Identificación nacional"
              onChangeText={nationalID => this.setState({ nationalID })}
              editable={true}
            />
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              value={this.state.phone}
              placeholder="Teléfono"
              onChangeText={phone => this.setState({ phone })}
            />
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              value={this.state.address}
              placeholder="Dirección"
              onChangeText={address => this.setState({ address })}
            />
            <TouchableOpacity
              onPress={this.handleUpdate}
              style={[styles.button, { marginTop: 40 }]}
            >
              <Text style={{ color: "white", padding: 5 }}>Guardar</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginHorizontal: 20,
              justifyContent: "space-between",
              marginTop: 100
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ChangePassword")}
            >
              <Text style={{ color: "white", padding: 5 }}>
                Cambia la contraseña
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.handleLogout}>
              <Text style={{ color: "white", padding: 5 }}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center"
  },
  textInputStyle: {
    backgroundColor: "#dedede",
    borderRadius: 12,
    paddingHorizontal: 10,
    margin: 7,
    height: 30,
    width: 250,
    textAlign: "center",
    paddingVertical: 0
  },
  button: {
    backgroundColor: "#e48d31",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    minWidth: 100
  }
});
const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading,
  message: state.client.message
});
const mapDispatchToProps = dispatch => ({
  _fetchProfile: () => dispatch(_fetchProfile()),
  _updateProfile: (fullName, nationalID, address, phone_number) =>
    dispatch(_updateProfile(fullName, nationalID, address, phone_number)),
  _logoutUser: () => dispatch(_logoutUser())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
