import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ScrollView
} from "react-native";
import StarRating from "react-native-star-rating";
import HeaderBar from "../components/HeaderBar";
import VendorProductRow from "../components/VendorProductRow";

sWidth = Dimensions.get("window").width;
fakeData = [{}, {}, {}, {}, {}, {}, {}];
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
    <View style={{ marginLeft: 0.02 * sWidth, marginBottom: 6 }}>
      <VendorProductRow {...item} />
    </View>
  );
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("./../assets/product3.jpg")}
              style={{ height: 150, width: 150, marginRight: 10 }}
            />
          </View>
          <View>
            <Text>Name: Mahmoud Shoes</Text>
            <Text>Adress: beside gov building, gom ST</Text>
            <Text>Telephone:0203032043</Text>
            <StarRating
              containerStyle={{ width: 100 }}
              disabled={false}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={rating => this.onStarRatingPress(rating)}
              fullStarColor={"#ffd203"}
              starSize={18}
            />
          </View>
        </View>

        <View>
          <Text style={{ marginLeft: 10 }}>Description :</Text>
          <Text style={{ marginHorizontal: 15, marginVertical: 5 }}>
            Adress: beside gov building, gom STAdress: beside gov building, gom
            STAdress: beside gov building, gom STAdress: beside gov building,
            gom ST
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Products</Text>
        </View>

        <FlatList
          data={fakeData}
          renderItem={this._renderItem}
          kkeyExtractor={this._keyExtractor}
          numColumns={3}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default VendorDetailScreen;
