import React from "react";
import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modalbox";
sWidth = Dimensions.get("window").width;
sHeight = Dimensions.get("window").height;
class NewsRow extends React.Component {
  state = {
    isOpen: false,
    isDisabled: false,
    swipeToClose: true,
    sliderValue: 0.3
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderBottomColor: "#D3D3D3",
          borderRightColor: "#D3D3D3",
          borderBottomRightRadius: 7,
          borderTopRightRadius: 7,
          borderRadius: 7,
          borderWidth: 1,
          marginHorizontal: 20,
          marginVertical: 7,
          borderLeftColor: "white",
          borderTopColor: "white"
        }}
      >
        <TouchableOpacity onPress={() => this.refs.modal1.open()}>
          <Image
            source={{ uri: this.props.image }}
            style={{ width: sWidth - 52, height: 0.2 * sHeight, margin: 5 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {this.props.title}
          </Text>
          <Text style={{ marginHorizontal: 5 }}>
            {this.props.details.substring(0, 100)}
          </Text>
        </TouchableOpacity>

        <Modal
          coverScreen={true}
          style={styles.modal}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}
        >
          <ScrollView style={styles.modal}>
            <Text style={styles.text}>{this.props.title}</Text>
            <Image
              source={{ uri: this.props.image }}
              style={{ width: sWidth, height: 0.4 * sHeight }}
            />
            <Text>{this.props.modified_at.substring(0, 10)}</Text>
            <Text style={{ marginHorizontal: 5 }}>{this.props.details}</Text>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

export default NewsRow;
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    width: sWidth,
    height: sHeight,
    zIndex: 100,
    marginTop: 20
  },

  modal2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }
});
