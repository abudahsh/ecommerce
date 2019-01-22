import React, { Component } from 'react';
import { View, Text , WebView} from 'react-native';

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  orderHtml = this.props.navigation.getParam('html')
  render() {
    return (
      
        <WebView 
        style={{flex:1, justifyContent:'center', alignItems:'center'}}
        originWhitelist={['*']}
        source={{html:this.orderHtml}} 
        scalesPageToFit={true}
        javaScriptEnabled={true}

        >
        
        </WebView>
    
    );
  }
}

export default OrderScreen;
