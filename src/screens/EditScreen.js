import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	const { state, editBlogPost } = useContext(Context);

	const blogPost = state.find((blogPost) => {
		return blogPost.id === id;
	});
	return (
		<BlogPostForm
			InitialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => {
					navigation.pop();
				});
			}}
		/>
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
export default EditScreen;
