import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class ProductAttributes extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 25 }}>
        {this.props.attributes.length > 0 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            {this.props.attributes.map((data, index) => (
              <Text style={{ color: "#4b2727" }} key={index}>
                {data.name}: {data.value}
              </Text>
            ))}
          </View>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>sin atributos</Text>
          </View>
        )}
      </View>
    );
  }
}

export default ProductAttributes;
