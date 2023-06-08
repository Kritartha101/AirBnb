import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Inspiration For Your Next trip
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={{ marginTop: 10, margin: 10 }}>
          <Image
            style={{
              width: 190,
              height: 150,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }}
            source={{
              uri: "https://i.pinimg.com/originals/b7/5f/da/b75fdaff1a53ea1cd53a7d1ac8b38c75.jpg",
            }}
          />
          <View
            style={{
              backgroundColor: "orange",
              width: 190,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Kasha
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "400", color: "#fff" }}>
              70km
            </Text>
          </View>
        </Pressable>

        <Pressable style={{ marginTop: 10, margin: 10 }}>
          <Image
            style={{
              width: 190,
              height: 150,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }}
            source={{
              uri: "https://data.1freewallpapers.com/download/dream-house.jpg",
            }}
          />
          <View
            style={{
              backgroundColor: "orange",
              width: 190,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Abhas
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "400", color: "#fff" }}>
              160km
            </Text>
          </View>
        </Pressable>

        <Pressable style={{ marginTop: 10, margin: 10 }}>
          <Image
            style={{
              width: 190,
              height: 150,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }}
            source={{
              uri: "https://cutewallpaper.org/21/hdphoto-download/Downloadfull-hd-wallpaper-download-1080p-in-2019-Nature-.jpg",
            }}
          />
          <View
            style={{
              backgroundColor: "orange",
              width: 190,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Webnua
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "400", color: "#fff" }}>
              300km
            </Text>
          </View>
        </Pressable>

        <Pressable style={{ marginTop: 10, margin: 10 }}>
          <Image
            style={{
              width: 190,
              height: 150,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JaRuZKF_iJQOmWs6yAozQHmpnVNV17YJe9WWa3PTW78SkMHkm5D3Rfs-_JSAmNwS5wE&usqp=CAU",
            }}
          />
          <View
            style={{
              backgroundColor: "orange",
              width: 190,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              Habaus
            </Text>
            <Text style={{ fontSize: 14, fontFamily: "400", color: "#fff" }}>
              200Km
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
