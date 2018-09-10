import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    email: store.getState().user.email,
    firstName: store.getState().user.firstName,
    surName: store.getState().user.surName,
    phone: store.getState().user.phone
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> ProfileScreen </Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          value={this.state.surName}
          onChangeText={surName => this.setState({ surName })}
        />
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />

        <TouchableOpacity style={{ backgroundColor: "orange" }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInputStyle: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 10,
    margin: 7,
    width: 250
  }
});

export default ProfileScreen;
