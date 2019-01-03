import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from "react-native";
import CategoryRow from "./../components/CategoryRow";
import { _fetchCategories } from "./../redux/actions";
import { connect } from "react-redux";
import HeaderBar from "../components/HeaderBar";
sWidth = Dimensions.get("window").width;
sheight = Dimensions.get("window").height;


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
      <View style={{ flex: 1, width: sWidth }}>
        {this.props.isLoading ? (
           <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <ActivityIndicator size="large" color="orange" />
          </View>
        ) : (
          <FlatList
          data={this.props.categories}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
         
        )}
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
  categories: state.categories.categoriesList,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchCategories: () => dispatch(_fetchCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesScreen);
