import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Platform
} from "react-native";
import StarRating from "react-native-star-rating";
import HeaderBar from "../components/HeaderBar";
import VendorProductRow from "../components/VendorProductRow";

import { _fetchOneVendor } from "../redux/actions";
import { connect } from "react-redux";

fakeData = [{}, {}, {}, {}, {}, {}, {}];
sWidth = Dimensions.get("window").width;
SHeight = Dimensions.get("window").height;
class VendorDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  state = {
    starCount: 3.5
  };
  _renderItem = ({ item }) => (
    <View style={{ marginLeft: 0.1 * sWidth, marginBottom: 0.08 * sWidth }}>
      <VendorProductRow {...item} />
    </View>
  );
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "1");
    this.props._fetchOneVendor(id);
  }
  render() {
    let {
      avatar,
      name,
      description,
      address,
      phone_number,
      rate,
      seller_products,
      number_of_rates
    } = this.props.vendor;
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size={Platform.OS === "android" ? 30 : 1}
            color="orange"
          />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View
            style={{ flexDirection: "row", padding: 10 }}
            onLayout={this.onLayout}
          >
            <View>
              <Image
                source={require("./../assets/product3.jpg")}
                style={{
                  height: 0.25 * sWidth,
                  width: 0.25 * sWidth,
                  marginRight: 10
                }}
              />
            </View>
            <View style={{ width: 0.5 * sWidth }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textStyle}>Name: </Text>
                <Text style={styles.infoStyle}>{name}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textStyle}>Adress: </Text>
                <Text style={styles.infoStyle}>{address}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textStyle}>Telephone: </Text>
                <Text style={styles.infoStyle}>{phone_number}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <StarRating
                  containerStyle={{ width: 100, marginRight: 7 }}
                  disabled={false}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  halfStar={"ios-star-half"}
                  iconSet={"Ionicons"}
                  maxStars={5}
                  rating={rate}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor={"#ffd203"}
                  starSize={18}
                />
                <Text style={styles.infoStyle}>({number_of_rates})</Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                marginLeft: 10,
                color: "#4b2727",
                fontWeight: "bold",
                fontSize: 16
              }}
            >
              Description :
            </Text>
            <Text
              style={{
                marginHorizontal: 15,
                marginVertical: 5,
                color: "gray",
                fontSize: 11
              }}
            >
              {this.props.vendor.description}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: "#4b2727",
                marginBottom: 10
              }}
            >
              Products
            </Text>
            <View
              style={{
                width: 0.6 * sWidth,
                backgroundColor: "#4b2727",
                height: 3,
                marginBottom: 8
              }}
            />
          </View>

          <FlatList
            data={seller_products}
            renderItem={this._renderItem}
            kkeyExtractor={this._keyExtractor}
            numColumns={2}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  textStyle: {
    color: "#e48d31",
    fontWeight: "bold",
    fontSize: 14
  },
  infoStyle: {
    color: "#4b2727",
    fontSize: 12
  }
});

const mapStateToProps = state => ({
  vendor: state.currentVendor,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchOneVendor: id => dispatch(_fetchOneVendor(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VendorDetailScreen);
