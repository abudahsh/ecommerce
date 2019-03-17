import React, { Component } from "react";
import { View, Text, WebView } from "react-native";

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  orderHtml = this.props.navigation.getParam("html");
  handleNav = webViewState => {
    if (
      webViewState.url.indexOf(
        "http://www.artesaniasdeboyaca.com/?merchantId"
      ) > -1
    ) {
      this.props.navigation.navigate("Cart");
      // console.log(webViewState);
    }
  };
  render() {
    return (
      <WebView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        originWhitelist={["*"]}
        source={{ html: this.orderHtml }}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        onNavigationStateChange={this.handleNav}
      />
    );
  }
}

export default OrderScreen;
