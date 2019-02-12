import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import HeaderBar from "../components/HeaderBar";
import { connect } from "react-redux";
import ProductRow from "./../components/ProductRow";
import {
  _fetchProducts,
  _fetchSubCategories,
  _fetchProductsBySubCat
} from "./../redux/actions";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class CategoryDetailScreen extends PureComponent {
  state = {
    products: []
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />,
      title: navigation.getParam("firstName", "detalle")
    };
  };
  id = this.props.navigation.getParam("id");
  firstSub = this.props.navigation.getParam("firstSub");
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View
      key={item.id.toString()}
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

  componentWillMount() {
    this.props._fetchSubCategories(this.id);
    this.props._fetchProductsBySubCat(this.firstSub);
  }
  hydrateProducts = () => {
    this.props._fetchProductsBySubCat(this.firstSub);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.subCategories ? (
          <ScrollView
            horizontal={true}
            alwaysBounceHorizontal={true}
            style={{
              paddingBottom: 5,
              borderBottomColor: "#D3D3D3",
              borderBottomWidth: 1
            }}
          >
            {this.props.subCategories.map(data => (
              <ImageBackground
                key={data.id.toString()}
                source={{ uri: data.image }}
                style={{
                  width: 90,
                  height: 45,
                  marginHorizontal: 10,
                  marginTop: 5
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props._fetchProductsBySubCat(data.id);
                    this.props.navigation.setParams({ firstName: data.name });
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(75,39,39, 0.4)",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View>
                    <Text style={{ color: "white" }}>{data.name}</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            ))}
          </ScrollView>
        ) : (
          <View />
        )}
        {this.props.isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" color="orange" />
          </View>
        ) : (
          <FlatList
            data={this.props.subProducts}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            numColumns={2}
            refreshing={false}
            onRefresh={this.hydrateProducts}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  subCategories: state.categories.subCategoriesList,
  subProducts: state.subCategoryProducts,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchProductsBySubCat: id => dispatch(_fetchProductsBySubCat(id)),
  _fetchSubCategories: id => dispatch(_fetchSubCategories(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetailScreen);
