import React from "react";
import { withNavigation } from "react-navigation";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { _fetchProducts, _fetchSubCategories, _fetchProductsBySubCat } from "./../redux/actions";
import { connect } from "react-redux";
(sWidth = Dimensions.get("window").width),
  (sHeight = Dimensions.get("window").height);
class CategoryRow extends React.Component {
  state = {};
  handleClick=()=>{
    this.props.navigation.navigate("CategoryDetail", {id:this.props.id, firstSub:this.props.first_subcat_id})
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}
      >
        <ImageBackground
          source={{uri:this.props.image}}
          style={{
            width: sWidth,
            height: 0.2 * sHeight,

            marginBottom: 5
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(75,39,39, 0.4)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ borderWidth: 1, borderColor: "white" }}>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 32, padding:10 }}
              >
                {this.props.name}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  //need to be changed with category products fetch
  _fetchSubCategories : (id) => dispatch(_fetchSubCategories(id))
});
export default connect(null, mapDispatchToProps) (withNavigation(CategoryRow));
