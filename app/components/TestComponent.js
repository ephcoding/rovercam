import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestComponent = ({ ...props }) => {
	console.log(">> props >>\n", props);

	return <Text>testing...</Text>;
};

export default TestComponent;

const S = StyleSheet.create({});
