import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";

const OpportunityScreen = () => {
	return (
		<BackgroundImage
			imgSrc={require("../../assets/img/opportunity.jpg")}
		></BackgroundImage>
	);
};

export default OpportunityScreen;

const styles = StyleSheet.create({});
