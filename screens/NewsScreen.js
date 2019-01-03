import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import HeaderBar from "../components/HeaderBar";
import NewsRow from "./../components/NewsRow";
import { connect } from "react-redux";
import { _fetchNews } from "../redux/actions";

fakeData = [{}, {}, {}];
class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  state = {
    isOpen: false,
    isDisabled: false,
    swipeToClose: true,
    sliderValue: 0.3
  };
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View>
      <NewsRow {...item} />
    </View>
  );
  componentDidMount() {
    this.props._fetchNews();
  }
  render() {
    return (
      <View style={styles.container}>
      {this.props.isLoading? 
       <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <ActivityIndicator size="large" color="orange" />
      </View>
      : 
        <FlatList
          data={this.props.news}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      }
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
  news: state.news,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchNews: () => dispatch(_fetchNews())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsScreen);
