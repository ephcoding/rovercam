import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RoverStats = ({ roverInfo }) => {
  const { name, launch_date, landing_date, max_date, total_photos } = roverInfo;

  return (
    <View style={S.container}>
      <Text style={S.title}>{name}</Text>
      <Text style={S.text}>Launched: {launch_date}</Text>
      <Text style={S.text}>Landed: {landing_date}</Text>
      <Text style={S.text}>Last Transmission: {max_date}</Text>
      <Text style={S.text}>Pic Count: {total_photos}</Text>
    </View>
  );
};

export default RoverStats;

const S = StyleSheet.create({
  container: {
    borderColor: "#0066ff",
    borderWidth: 3,
    height: 250,
    padding: 20,
    margin: 25,
  },
  text: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
