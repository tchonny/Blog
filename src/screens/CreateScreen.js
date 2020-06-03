import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const { addBlogPost } = useContext(Context);

	return (
		<View style={styles.view}>
			<Text style={styles.label}>Enter title:</Text>
			<TextInput
				style={styles.input}
				onChangeText={(newTitle) => setTitle(newTitle)}
			></TextInput>
			<Text style={styles.label}>Enter content:</Text>
			<TextInput
				style={styles.input}
				onChangeText={(newContent) => setContent(newContent)}
			></TextInput>
			<View style={styles.button}>
				<Button
					title="Save post"
					onPress={() =>
						addBlogPost(title, content, () =>
							navigation.navigate("Index")
						)
					}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 10,
	},
	label: {
		fontSize: 22,
		marginTop: 5,
	},
	input: {
		borderWidth: 1,
		fontSize: 18,
		marginTop: 5,
	},
	button: {
		alignSelf: "center",
		padding: 20,
		margin: 20,
		borderWidth: 2,
	},
});
export default CreateScreen;
