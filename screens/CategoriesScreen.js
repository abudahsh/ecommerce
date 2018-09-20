import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import CategoryRow from "./../components/CategoryRow";
import { store } from "./../redux/store";
import { _fetchCategories } from "./../redux/actions";
import { connect } from "react-redux";
import HeaderBar from "../components/HeaderBar";

anotherData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];

class CategoriesScreen extends Component {
  onLayout = e => {
    const { width, height } = Dimensions.get("window");
    this.setState({ width, height });
    console.warn(width, height);
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      style={{ borderColor: "#D3D3D3", borderWidth: StyleSheet.hairlineWidth }}
    >
      <CategoryRow {...item} />
    </View>
  );

  componentDidMount() {
    this.props._fetchCategories();
  }
  render() {
    return (
      <View
        style={{ flex: 1, width: this.state.width }}
        onLayout={this.onLayout}
      >
        <FlatList
          data={this.props.categories}
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

const mapStateToProps = state => ({
  categories: state.categories,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchCategories: () => dispatch(_fetchCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesScreen);
