import React from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";
class ProductDesc extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={true} style={{ marginHorizontal: 25, flex: 1 }}>
        <Text style={{ color: "#4b2727", textAlign: 'justify' }}>
          {this.props.product.description}
        </Text>
      </ScrollView>
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
