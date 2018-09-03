import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Animated
} from "react-native";
import { connect } from "react-redux";
import ProductRow from "./../components/ProductRow";
import { _fetchProducts } from "./../redux/actions";
import { store } from "./../redux/store";
import HeaderBar from "../components/HeaderBar";

sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "white",
        borderColor: "#e5e5e5",
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopColor: "#e5e5e5",
        borderRadius: 15,
        marginHorizontal: 0.02 * sWidth,
        marginVertical: 8
      }}
    >
      <ProductRow {...item} />
    </View>
  );
  componentDidMount() {
    this.props._fetchProducts();
    console.log(store.getState());
    console.log(this.props.products);
    console.log(this.props.isLoading);
  }
  componentWillUnmount() {
    console.log(this.props.products);
    console.log(this.props.isLoading);
  }
  render() {
    if (!this.props.products) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.products}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            numColumns={2}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  products: state.products,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchProducts: token => dispatch(_fetchProducts())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
