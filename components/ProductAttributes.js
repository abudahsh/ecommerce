import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class ProductAttributes extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 25 }}>
        {this.props.product.seller ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            {this.props.product.additional_attributes.map(data => (
              <Text style={{ color: "#4b2727" }}>
                {data.name}: {data.value}
              </Text>
            ))}

          </View>
        ) : (
          <View style={{justifyContent:'center', alignItems:'center'}} >
            <Text>sin atributos</Text>
          </View>
        )}
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
)(ProductAttributes);
