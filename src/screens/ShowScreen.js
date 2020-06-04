import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam("id")
	);

	return (
		<View>
			<Text style={{ fontSize: 20 }}>
				{blogPost.id} - {blogPost.title}
				{blogPost.content}
			</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("EditPost", {
						id: navigation.getParam("id"),
					})
				}
			>
				<EvilIcons name="pencil" size={35} />
			</TouchableOpacity>
		),
	};
};

export default ShowScreen;
