import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, Image } from "react-native";
import HeaderBar from "../components/HeaderBar";
import { connect } from "react-redux";
import ProductRow from "./../components/ProductRow";
import { _fetchProducts } from "./../redux/actions";
class CategoryDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
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
    //need to be changed with category products fetch
    this.props._fetchProducts();
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
        <View style={{ flex: 1 }}>
          <ScrollView horizontal={true}>
            {anotherData.map(data => (
              <Image
                source={require("./../assets/product3.jpg")}
                style={{ width: 80, height: 60 }}
              />
            ))}
          </ScrollView>
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
