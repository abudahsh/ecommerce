import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
class ProductDesc extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ color: "#4b2727" }}>
          {this.props.product.description}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  product: state.currentProduct,
  isLoading: state.client.isLoading
});

export default connect(
  mapStateToProps,
  null
)(ProductDesc);
