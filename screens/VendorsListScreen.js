import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { _fetchVendors } from "./../redux/actions";
import VendorRow from "../components/VendorRow";
import HeaderBar from "./../components/HeaderBar";
wrongData = [{}, {}, {}, {}];
class VendorListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <HeaderBar />
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({ item }) => (
    <View>
      <VendorRow {...item} />
    </View>
  );
  componentDidMount() {
    this.props._fetchVendors();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.vendors}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  vendors: state.vendors,
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchVendors: () => dispatch(_fetchVendors())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VendorListScreen);
