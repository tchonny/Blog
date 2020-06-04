import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);

	return (
		<View style={styles.view}>
			<BlogPostForm
				onSubmit={(title, content) => {
					addBlogPost(title, content, () => {
						navigation.navigate("Index");
					});
				}}
			/>
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
