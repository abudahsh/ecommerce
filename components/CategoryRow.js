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
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;

class CategoryRow extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("CategoryDetail")}
      >
        <ImageBackground
          source={require("./../assets/category1.jpg")}
          style={{
            width: sWidth,
            height: 0.2 * sHeight,

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
            <View style={{ borderWidth: 2, borderColor: "white" }}>
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
