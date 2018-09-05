import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  TextInput
} from "react-native";
import { store } from "./../redux/store";
import { withNavigation } from "react-navigation";
class HeaderBar extends React.Component {
  state = {
    searchWidth: new Animated.Value(0),
    searchOpacity: new Animated.Value(0)
  };
  searchClicked = () => {
    Animated.parallel([
      Animated.timing(this.state.searchWidth, {
        toValue: 50,
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
          paddingHorizontal: 10,
          alignItems: "center"
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("./../assets/Icons/arrow.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={{
            width: this.state.searchWidth,
            opacity: this.state.searchOpacity
          }}
        />
        <TouchableOpacity onPress={this.searchClicked}>
          <Image
            source={require("./../assets/Icons/search.png")}
            style={{ width: 25, height: 25, marginHorizontal: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (store.getState().client.isAuthenticated) {
              this.props.navigation.navigate("Cart");
            }
            this.props.navigation.navigate("Auth");
          }}
        >
          <Image
            source={require("./../assets/Icons/cart.png")}
            style={{ width: 25, height: 25, marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (store.getState().client.isAuthenticated) {
              this.props.navigation.navigate("Profile");
            }
            this.props.navigation.navigate("Auth");
          }}
        >
          <Image
            source={require("./../assets/Icons/account.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default withNavigation(HeaderBar);
