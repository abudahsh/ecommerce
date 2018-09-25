import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import HeaderBar from "../components/HeaderBar";
import { connect } from "react-redux";
import ProductRow from "./../components/ProductRow";
import { _fetchProducts } from "./../redux/actions";
import { store } from "./../redux/store";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class CategoryDetailScreen extends Component {
  state = {};
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
    //need to be changed with category products fetch
    this.props._fetchProducts();
  }

  render() {
    if (store.getState().client.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
          }}
        >
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <ScrollView style={{ flex: 1 }}>
          <ScrollView
            horizontal={true}
            alwaysBounceHorizontal={true}
            style={{
              paddingBottom: 5,
              borderBottomColor: "#D3D3D3",
              borderBottomWidth: 1
            }}
          >
            {anotherData.map(data => (
              <ImageBackground
                source={require("./../assets/product3.jpg")}
                style={{
                  width: 90,
                  height: 45,
                  marginHorizontal: 10,
                  marginTop: 5
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
                    <Text style={{ color: "white" }}>Clothes</Text>
                  </View>
                </View>
              </ImageBackground>
            ))}
          </ScrollView>
          <FlatList
            data={this.props.products}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            numColumns={2}
          />
        </ScrollView>
      );
    }
  }
}
const mapStateToProps = state => ({
  products: state.products, //need to be changed with category products fetch
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  //need to be changed with category products fetch
  _fetchProducts: token => dispatch(_fetchProducts())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetailScreen);
