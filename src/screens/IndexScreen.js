import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost } = useContext(Context);

	//<Button title="Add Post" onPress={addBlogPost} />
	return (
		<View style={styles.view}>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => `${blogPost.id}`}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("ShowPost", {
									id: item.id,
								})
							}
						>
							<View style={styles.listView}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity
									onPress={() => deleteBlogPost(item.id)}
								>
									<Feather style={styles.icon} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
				<Feather style={styles.plusIcon} name="plus" />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	listView: {
		flexDirection: "row",
		paddingVertical: 20,
		paddingHorizontal: 10,
		justifyContent: "space-between",
		borderTopWidth: 1,
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},

	view: {
		flex: 1,
		backgroundColor: "#fff",
	},

	plusIcon: {
		fontSize: 30,
		paddingRight: 5,
	},
});

export default IndexScreen;
