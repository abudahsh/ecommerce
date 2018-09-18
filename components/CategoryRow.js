import React from "react";
import { withNavigation } from "react-navigation";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

class CategoryRow extends React.Component {
  onLayout = e => {
    const { width, height } = Dimensions.get("window");
    this.setState({ width, height });
    console.warn(width, height);
  };

  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };
  render() {
    return (
      <TouchableOpacity
        onLayout={this.onLayout}
        onPress={() => this.props.navigation.navigate("CategoryDetail")}
      >
        <ImageBackground
          source={require("./../assets/category1.jpg")}
          style={{
            width: this.state.width,
            height: 0.2 * this.state.height,

            marginBottom: 5
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(75,39,39, 0.4)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ borderWidth: 1, borderColor: "white" }}>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 32 }}
              >
                Clothes
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CategoryRow);
