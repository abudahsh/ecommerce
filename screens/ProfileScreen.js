import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";
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
  componentWillMount() {
    if (this.props.isAuthenticated == false) {
      this.props.navigation.navigate("Auth");
    }
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
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

          <TouchableOpacity
            style={{
              backgroundColor: "#e48d31",
              width: 100,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15
            }}
          >
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
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
const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated
});

export default connect(mapStateToProps)(ProfileScreen);
