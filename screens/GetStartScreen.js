import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getStarted } from "./../redux/actions";
import { store } from "./../redux/store";
import Swiper from "react-native-swiper";

class GetStartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    this.props.getStarted();
    console.log("state" + store.getState().user.gotStarted);

    this.props.navigation.navigate("Tabs");
  };

  render() {
    return (
      <Swiper
        index={2}
        loop={false}
        showsPagination={!store.getState().user.gotStarted}
      >
        <View style={styles.container1}>
          <Text>WE CAME</Text>
        </View>
        <View style={styles.container2}>
          <Text>WE SAW</Text>
        </View>
        <View style={styles.container}>
          <Text>We CONQUER</Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              backgroundColor: "yellow",
              bottom: 70
            }}
            onPress={this.handleClick}
          >
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple"
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
});
const mapStateToProps = state => ({
  gotStarted: state.user.gotStarted
});
export default connect(
  mapStateToProps,
  { getStarted }
)(GetStartScreen);
