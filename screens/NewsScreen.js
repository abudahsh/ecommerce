import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";
import NewsRow from "./../components/NewsRow";

fakeData = [{}, {}, {}];
class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    isOpen: false,
    isDisabled: false,
    swipeToClose: true,
    sliderValue: 0.3
  };
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View>
      <NewsRow {...item} />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={fakeData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewsScreen;
