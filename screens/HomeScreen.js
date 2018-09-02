import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import ProductRow from "./../components/ProductRow";
import { _fetchProducts } from "./../redux/actions";
import { store } from "./../redux/store";

sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./../assets/Icons/arrow.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./../assets/Icons/search.png")}
              style={{ width: 25, height: 25, marginHorizontal: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (store.getState().client.isAuthenticated) {
                navigation.navigate("Cart");
              }
              navigation.navigate("Login");
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
                navigation.navigate("Profile");
              }
              navigation.navigate("Login");
            }}
          >
            <Image
              source={require("./../assets/Icons/account.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      )
    };
  };
  state = {};
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
    this.props._fetchProducts("kjlerweryhierywerywriuyrwuyrwrrw776r7wr7w");
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
