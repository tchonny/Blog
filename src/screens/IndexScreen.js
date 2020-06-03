import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = () => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);

	return (
		<View>
			<Text>Index Screen</Text>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blogPost) => `${blogPost.id}`}
				renderItem={({ item }) => {
					return (
						<View style={styles.view}>
							<Text style={styles.title}>
								{item.title} - {item.id}
							</Text>
							<TouchableOpacity
								onPress={() => deleteBlogPost(item.id)}
							>
								<Feather style={styles.icon} name="trash" />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		paddingVertical: 20,
		paddingHorizontal: 10,
		justifyContent: "space-between",
		borderTopWidth: 1,
		borderEndWidth: 3,
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},
});

export default IndexScreen;
