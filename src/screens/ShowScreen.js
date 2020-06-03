import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam("id")
	);

	return (
		<View>
			<Text style={{ fontSize: 20 }}>
				{blogPost.id} - {blogPost.title}
			</Text>
		</View>
	);
};

export default ShowScreen;
