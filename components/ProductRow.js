import React from 'react'
import {Image, Text, View, TouchableOpacity} from 'react-native'


class ProductRow extends React.Component{

    render(){
        return (

            <View style={{paddingLeft:6}}>
                
                <Image source={require('./../assets/product1.jpg')}  style={{width:170, height:200}}/>
                <Text>Product blah</Text>
                <Text style={{color:'blue'}}>Price: 900</Text>
                <Text style={{fontSize:12}}>Product blah blah blah</Text>
            </View>
        )
    }
}

export default ProductRow