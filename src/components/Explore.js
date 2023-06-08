import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://links.papareact.com/pyp").then((response) =>
        response.json().then((data) => setData(data))
      );
    };
    fetchData();
  });

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "500 " }}>Explore More</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
