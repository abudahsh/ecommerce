import * as React from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const FirstRoute = () => <View />;
const SecondRoute = () => <View />;

export default class ProdctTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Description" },
      { key: "second", title: "Details" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    _renderIndicator = () => ({});

    return (
      <View>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const color = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                inputIndex => (inputIndex === i ? "#e48d31" : "white")
              )
            });
            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}
              >
                <View>
                  <Animated.Text style={{ color, paddingLeft: 30 }}>
                    {route.title}
                  </Animated.Text>
                  <Animated.View
                    style={{
                      height: 2,
                      backgroundColor: color,
                      width: Dimensions.get("window").width / 2,
                      marginTop: 10
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        renderIndicator={this._renderIndicator}
        initialLayout={{
          height: Dimensions.get("window").height / 3,
          width: Dimensions.get("window").width
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: "row",
    marginHorizontal: 20
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  }
});
