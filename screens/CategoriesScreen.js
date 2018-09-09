import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
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
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {};
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      style={{ borderColor: "gray", borderWidth: StyleSheet.hairlineWidth }}
    >
      <CategoryRow {...item} />
    </View>
  );

  componentDidMount() {
    this.props._fetchCategories();
  }
  render() {
    return (
      <View style={styles.container}>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
