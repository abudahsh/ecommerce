import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class HeaderBar extends React.Component {
  state = {
    searchWidth: new Animated.Value(10),
    searchOpacity: new Animated.Value(0)
  };
  searchClicked = () => {
    Animated.parallel([
      Animated.timing(this.state.searchWidth, {
        toValue: 100,
        duration: 500
      }),
      Animated.timing(this.state.searchOpacity, {
        toValue: 1,
        duration: 500
      })
    ]).start();
  };

  render() {
    return (
      <Animated.View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center"
        }}
      >
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Ionicon
            name="ios-arrow-down"
            size={35}
            color="white"
            style={{ paddingTop: 3 }}
          />
        </TouchableOpacity>
        <Animated.View
          style={{
            position: "absolute",
            width: this.state.searchWidth,
            opacity: this.state.searchOpacity
          }}
        >
          <TextInput placeholder="Search" />
        </Animated.View>

        <TouchableOpacity
          onPress={this.searchClicked}
          style={{
            backgroundColor: "white",
            width: 26,
            height: 26,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 13
          }}
        >
          <Icon
            name="search"
            size={17}
            color="#4b2727"
            style={{ paddingBottom: 2 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            marginHorizontal: 10,
            width: 26,
            height: 26,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 13
          }}
          onPress={() => {
            if (this.props.isAuthenticated == true) {
              this.props.navigation.navigate("Cart");
            } else if (this.props.isAuthenticated == false) {
              this.props.navigation.navigate("Auth");
            }
          }}
        >
          <Icon
            name="shopping-bag"
            size={17}
            color="#4b2727"
            style={{ paddingBottom: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 26,
            height: 26,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 13
          }}
          onPress={() => {
            if (this.props.isAuthenticated == true) {
              this.props.navigation.navigate("Profile");
            } else if (this.props.isAuthenticated == false) {
              this.props.navigation.navigate("Auth");
            }
          }}
        >
          <Icon name="user" size={20} color="#4b2727" />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.client.isAuthenticated
});

export default connect(mapStateToProps)(withNavigation(HeaderBar));
