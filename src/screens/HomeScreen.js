import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Explore from "../components/Explore";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Card />
      <Explore />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
