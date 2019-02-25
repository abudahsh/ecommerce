import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { connect } from "react-redux";
import { _getStarted } from "./../redux/actions";
import { store } from "./../redux/store";
import Swiper from "react-native-swiper";
class GetStartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleClick = () => {
    this.props._getStarted();

    this.props.navigation.navigate("Tabs");
  };

  render() {
    return (
      <Swiper
        index={0}
        loop={false}
        showsPagination={true}
        activeDotStyle={{
          backgroundColor: "#e48d31"
        }}
      >
        <View style={styles.container1}>
          <ImageBackground
            source={require("./../assets/3.jpg")}
            style={{
              width: sWidth,
              height: sHeight,

              marginBottom: 5
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "#4b2727",
                paddingTop: 20
              }}
            >
              <Image
                source={require("./../assets/Logodouble.png")}
                style={{
                  width: 0.8 * sWidth,
                  height: 0.4 * sWidth,
                  marginLeft: 20
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(75,39,39, 0.75)",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={{ width: 0.90 * sWidth, marginTop: -30, maxHeight: 0.6 * sHeight }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 18,
                    fontFamily: 'Arial',
                    textAlign: 'justify'
                  }}
                >
                  El producto artesanal de Boyacá involucra cultura, tradición y
                  saberes ancestrales, los artesanos dedicados son innovadores,
                  conocen diversas técnicas, poseen habilidad y destreza manual,
                  las materias primas son su fortaleza por la diversidad
                  existente en la región, por lo tanto, son productos
                  auténticos, utilitarios y decorativos y gozan de
                  reconocimiento por su calidad, pero carecían de una plataforma
                  en línea.{" "}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container1}>
          <ImageBackground
            source={require("./../assets/1.jpg")}
            style={{
              width: sWidth,
              height: sHeight,

              marginBottom: 5
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "#4b2727",
                paddingTop: 20
              }}
            >
              <Image
                source={require("./../assets/Logodouble.png")}
                style={{
                  width: 0.8 * sWidth,
                  height: 0.4 * sWidth,
                  marginLeft: 20
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(75,39,39, 0.75)",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={{ width: 0.90 * sWidth, marginTop: -30, maxHeight: 0.6 * sHeight }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: 'Arial',
                    fontSize: 18,
                    textAlign: 'justify'
                  }}
                >
                  La importancia de buscar la cercanía entre las artesanías
                  boyacenses en culturas y ambientes nacionales e
                  internacionales, genero la importancia de competir en esos
                  mercados, gracias al apoyo de sistemas consolidado de
                  información que permitan hacer un buen proceso de mercadeo del
                  sector artesanal de Boyacá.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container1}>
          <ImageBackground
            source={require("./../assets/2.jpg")}
            style={{
              width: sWidth,
              height: sHeight,

              marginBottom: 5
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                backgroundColor: "#4b2727",
                paddingTop: 20
              }}
            >
              <Image
                source={require("./../assets/Logodouble.png")}
                style={{
                  width: 0.8 * sWidth,
                  height: 0.4 * sWidth,
                  marginLeft: 20
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(75,39,39, 0.75)",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={{ width: 0.90 * sWidth, marginTop: -30, maxHeight: 0.6 * sHeight }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: 'Arial',
                    fontSize: 18,
                    textAlign: 'justify'
                  }}
                >
                  La oportunidad central está en que los artesanos de la región
                  aprovechen el esquema de comercialización de sus productos a
                  través de la industria TIC de Boyacá, con el fin de alcanzar
                  mayores índices de competitividad y posicionamiento en los
                  mercados más importantes de desarrollo y crecimiento del
                  sector.{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  backgroundColor: "#e48d31",
                  bottom: 70,
                  borderRadius: 25,
                  minHeight: 30
                }}
                onPress={this.handleClick}
              >
                <Text style={{ padding: 15, color: "white" }}>Empezar</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple"
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
});
const mapStateToProps = state => ({
  gotStarted: state.client.gotStarted
});
export default connect(
  mapStateToProps,
  { _getStarted }
)(GetStartScreen);
