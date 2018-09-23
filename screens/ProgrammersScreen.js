import React, { Component } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
employees = [{}, {}, {}];
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
            marginBottom: 30
          }}
        >
          <Image
            source={require("./../assets/hehehe.png")}
            style={{ width: 250, height: 220 }}
          />
          <View style={{ width: 280, height: 5, backgroundColor: "#e48d31" }} />
          <Text style={{ color: "#e48d31", fontWeight: "bold", fontSize: 18 }}>
            Programa Artesanias de Boyaca
          </Text>
          <Text
            style={{ marginHorizontal: 10, color: "#e48d31", fontSize: 12 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>

        <View style={{ marginHorizontal: 7 }}>
          <FlatList
            data={employees}
            renderItem={() => (
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
                    source={require("./../assets/salah1.jpg")}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                  />
                </View>

                <Text style={{ color: "#e48d31", fontSize: 13 }}>Mo Salah</Text>
                <Text style={{ fontSize: 11 }}>
                  Lorem Ipsum is simply dummy text of the printing
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
