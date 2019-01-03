import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {connect} from 'react-redux'
import { _fetchCart, _addToCart } from "../redux/actions";
sWidth = Dimensions.get('window').width
sHeight = Dimensions.get('window').height
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.quantity };
  }
 
  handleMinus = () => {
    if (this.state.count > 0) {
      this.props._addToCart(this.props.product.id, -1)
      this.props._fetchCart()
    }
  };
  handlePlus = () => {
    this.props._addToCart(this.props.product.id, 1)
    this.props._fetchCart()
  };
  componentWillReceiveProps(nextProps){
    console.log('props',nextProps)
    this.setState({count:nextProps.quantity})
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1,          
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f7f6f5",
          height: 0.15 * sHeight,
          borderBottomColor:'#ffffff',
          borderBottomWidth:1
        }}
      >
        <View>
          <Image
            source={{uri:this.props.product.image}}
            style={{ width: 80, height: 70 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", color: "#4b2727", width:0.4* sWidth }}>
            {this.props.product.name}
          </Text>
          <Text style={{ color: "#e48d31" }}>{this.props.product.price}$</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", paddingRight: 3 }}>
            <TouchableWithoutFeedback onPress={this.handleMinus}>
              <EvilIcons name="minus" size={25} color="black" />
            </TouchableWithoutFeedback>

            <Text style={{ fontWeight: "bold", fontSize: 12, color: "black" }}>
              {this.state.count}
            </Text>
            <TouchableWithoutFeedback onPress={this.handlePlus}>
              <EvilIcons name="plus" size={25} color="black" />
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              backgroundColor: "#e48d31",
              height: 25,
              marginTop: 7,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>{(this.props.product.price * this.props.quantity).toFixed(2)}$</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.client.isLoading
});
const mapDispatchToProps = dispatch => ({
  _fetchCart: () => dispatch(_fetchCart()),
  _addToCart: (product_id, quantity) => dispatch(_addToCart(product_id, quantity))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
