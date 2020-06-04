import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const BlogPostForm = ({ navigation, onSubmit, InitialValues }) => {
	console.log(
		"inicialValues: " + InitialValues.title + InitialValues.content
	);
	const [title, setTitle] = useState(InitialValues.title);
	const [content, setContent] = useState(InitialValues.content);

	return (
		<View style={styles.view}>
			<Text style={styles.label}>Enter title:</Text>
			<TextInput
				value={title}
				style={styles.input}
				onChangeText={(newTitle) => setTitle(newTitle)}
			></TextInput>
			<Text style={styles.label}>Enter content:</Text>
			<TextInput
				value={content}
				style={styles.input}
				onChangeText={(newContent) => setContent(newContent)}
			></TextInput>
			<View style={styles.button}>
				<Button
					title="Save post"
					onPress={() => onSubmit(title, content)}
				/>
			</View>
		</View>
	);
};

BlogPostForm.defaultProps = {
	InitialValues: { title: "", content: "" },
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
export default BlogPostForm;
