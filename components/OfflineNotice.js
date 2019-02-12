import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
const { width } = Dimensions.get("window");
class OfflineNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isConnected: nextProps.isConnected });
    console.log("changed");
  }
  render() {
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: "#b52424",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width
  },
  offlineText: {
    color: "#fff"
  }
});

export default connect(state => ({
  isConnected: state.network.isConnected
}))(OfflineNotice);
