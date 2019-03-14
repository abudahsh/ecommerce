import React from "react";
import { ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
class ProductDesc extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={{ marginHorizontal: 25, flex: 1 }}
      >
        <Text style={{ color: "#4b2727", textAlign: "justify" }}>
          {this.props.description}
        </Text>
      </ScrollView>
    );
  }
}

export default ProductDesc;
