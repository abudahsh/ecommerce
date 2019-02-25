import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { _changePassword } from '../redux/actions';
import { connect } from 'react-redux'
import Toast from 'react-native-simple-toast';
class ChangePasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',

    };
  }
  handleSubmit = () => {
    this.props._changePassword(this.state.oldPassword, this.state.newPassword)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      Toast.show(nextProps.message, Toast.SHORT)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ?
          <ActivityIndicator size="large" color="orange" />
          :
          <View>
            <TextInput
              style={styles.input}
              placeholder="Contraseña anterior"
              value={this.state.oldPassword}
              onChangeText={oldPassword => this.setState({ oldPassword })}
              autoCapitalize="none"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              placeholder="Nueva contraseña"
              value={this.state.newPassword}
              onChangeText={newPassword => this.setState({ newPassword })}
              autoCapitalize="none"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit} >
              <Text style={{ color: "white", padding: 5 }}>Cambia la contraseña</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  message: state.client.message,
  isAuthenticated: state.client.isAuthenticated,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _changePassword: (oldPassword, newPassword) => dispatch(_changePassword(oldPassword, newPassword)),

})
export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 0.6 * sWidth,
    borderRadius: 10,
    height: 40,
    backgroundColor: "#e4e4e4",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e48d31",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    minWidth: 100,
  }
})