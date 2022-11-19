import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";

const Screen1 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={{ color: "#343A40", fontWeight: "bold", fontSize: "17" }}>
          Shoes
        </Text>

        <Button title="ALL" />
        <Button title="Ultraboost" />
        <Button title="Adilette" />
        <Button title="Superstar" />
      </View>

      <View style={styles.shop}>
        <View style={styles.item}>
          <TouchableOpacity>
            <Image
              source={require("../../images/bg.png")}
              style={{ width: 200, height: 190, resizeMode: "contain" }}
            />
            <Image
              source={require("../../images/1shoes.png")}
              style={styles.shoes}
            />

            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.add}>Sepete Ekle</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../images/bg.png")}
              style={{ width: 200, height: 190, resizeMode: "contain" }}
            />
            <Image
              source={require("../../images/1shoes.png")}
              style={styles.shoes}
            />

            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.add}>Sepete ekle</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity>
            <Image
              source={require("../../images/bg2.png")}
              style={{ width: 200, height: 190, resizeMode: "contain" }}
            />
            <Image
              source={require("../../images/2shoes.png")}
              style={styles.shoes}
            />
            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.add}>Sepete ekle</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../images/bg2.png")}
              style={{ width: 200, height: 190, resizeMode: "contain" }}
            />
            <Image
              source={require("../../images/2shoes.png")}
              style={styles.shoes}
            />
            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.add}>Sepete ekle</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity>
            <Image
              source={require("../../images/bg3.png")}
              style={{ width: 200, height: 190, resizeMode: "contain" }}
            />
            <Image
              source={require("../../images/3shoes.png")}
              style={styles.shoes}
            />
            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.add}>Sepete ekle</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../images/bg3.png")}
              style={{ width: 200, height: 190, resizeMode: "contain" }}
            />
            <Image
              source={require("../../images/3shoes.png")}
              style={styles.shoes}
            />
            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.add}>Sepete ekle</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { Screen1 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFC107",
  },
  shop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  shoes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  shoes: {
    width: 330,
    height: 330,
    resizeMode: "contain",
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -60,
    marginTop: -50,
  },
  add: {
    padding: 5,
    width: "70%",
    borderRadius: 10,
    textAlign: "center",
    marginVertical:5,
    backgroundColor:'#7952B3',
    color:'white',
    overflow:'hidden'
  },
});
