import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            width: 220,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 16,
            padding: 6,
          }}
        >
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            style={{ color: "black", fontSize: 16, paddingHorizontal: 10 }}
            placeholder="Where you want to go"
          />
        </View>

        <Pressable
          style={{
            backgroundColor: "#fff",
            width: 120,
            borderRadius: 12,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Text
            style={{
              color: "red",
              padding: 10,
              textAlign: "center",
              fontSize: 17,
              fontWeight: "600",
            }}
          >
            I'm flexible
          </Text>
        </Pressable>
        <View
          style={{ marginRight: "auto", marginLeft: "auto", marginBottom: 20 }}
        >
          <Text style={styles.text}>Not Sure Where to Go?</Text>
          <Text style={[styles.text, { textAlign: "center" }]}>Perfect</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
