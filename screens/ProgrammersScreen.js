import React, { Component } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
employees = [{name:'Dr. Sergio Armando Tolosa Acevedo', desc:'Secretario de Productividad, Tic y Gestión del Conocimiento, Es administrador de empresas con estudios de maestría en dirección de empresas y especializaciones en finanzas y alta gerencia en mercadotecnia. Cuenta con más de 20 años de experiencia laboral en cargos directivos y empresas de Boyacá.', image:require("./../assets/person1.jpg")}, {name:'Ing. William Orlando Vargas', desc:'Director Tic, Es ingeniero de sistemas, magíster en dirección estratégica de tecnologías de la información y las comunicaciones. Se ha desempeñado como asesor TIC en el sector público. En su experiencia profesional está la ejecución de proyectos en pro de la apropiación de las TIC.', image:require("./../assets/person2.jpg")}, {name:'Ing. Elianeth Gómez', desc:'Directora de Productividad, Es ingeniera de alimentos, con maestría en ingeniería y gerencia de cadenas agrícolas y maestría en estrategias territoriales y ambientales, en el ámbito local. Cuenta con experiencia en liderazgo de proyectos dirigidos al sector empresarial y de desarrollo local.', image:require("./../assets/person3.jpg")}];
class ProgrammersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 15,
            marginVertical: 30,
            
          }}
        >
          <Image
            source={require("./../assets/team.jpg")}
            style={{ width: 250, height: 220 }}
          />
          <View style={{ width: 280, height: 5, backgroundColor: "#e48d31" }} />
          <Text style={{ color: "#e48d31", fontWeight: "bold", fontSize: 18 }}>
            Programa Artesanias de Boyaca
          </Text>
          <Text
            style={{ marginHorizontal: 10, color: "#e48d31", fontSize: 12 }}
          >
            El programa Artesanías de Boyacá siendo el fruto de un proceso de transformación administrativa y productiva, que ha liderado la Secretaría de Productividad, TIC y Gestión del Conocimiento de la Gobernación de Boyacá, viene trabajando en cuatro líneas de apoyo y fortalecimiento, de una parte preservando y protegiendo la identidad cultural del territorio, artesano innovador adoptando el mejoramiento de procesos, capacitación y diseño, así como el estímulo hacia la asociatividad y formalización como artesano emprendedor y el impulso hacia el artesano competitivo a través de la búsqueda de modernos canales de comercialización.
          </Text>
        </View>

        <View style={{ marginHorizontal: 7 }}>
          <FlatList
            data={employees}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 0.33,
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginLeft: 10
                }}
              >
                <View
                  style={{
                    width: 82,
                    height: 82,
                    borderRadius: 41,
                    backgroundColor: "#e48d31",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                  />
                </View>

                <Text style={{ color: "#e48d31", fontSize: 13 }}>{item.name}</Text>
                <Text style={{ fontSize: 11 }}>
                  {item.desc}
                </Text>
              </View>
            )}
            numColumns={3}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ProgrammersScreen;
