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
  Animated,
  NetInfo,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import ProductRow from "./../components/ProductRow";
import { _fetchProducts } from "./../redux/actions";
import HeaderBar from "../components/HeaderBar";
import Toast from "react-native-simple-toast";

sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };

  _keyExtractor = (item, index) => item.id.toString();
  _renderItem = ({ item }) => (
    <View
      key={item.index}
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
    this.hydratePage();
  }
  hydratePage = () => {
    this.props._fetchProducts();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      Toast.show(nextProps.message, Toast.SHORT);
    }
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      );
    } else if (this.props.products.length > 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.products}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            numColumns={2}
            refreshing={false}
            onRefresh={this.hydratePage}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={this.hydratePage}>
            <Text>Reload</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
  products: state.products,
  isLoading: state.client.isLoading,
  isConnected: state.network.isConnected,
  message: state.network.message
});
const mapDispatchToProps = dispatch => ({
  _fetchProducts: () => dispatch(_fetchProducts())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
