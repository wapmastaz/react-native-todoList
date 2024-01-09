import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from '../componenets/AppText';
import Task from '../componenets/Task';
import AddTask from '../componenets/AddTask';

function HomeScreen(props) {
	return (
		<ImageBackground resizeMode='cover' blurRadius={10}  source={require('../assets/bg.png')} style={styles.container}>
			<AppText style={styles.title}>Today’s tasks</AppText>
			<Task title={'Like 👍'} />
			<Task title={'Comment 📢'} />
			<Task title={'Subscribe 🙃'} />

			<View style={styles.addTaskContainer}>
				<AddTask />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGray,
		paddingTop: 100,
		paddingHorizontal: 20,
	},
	title: {
		color: colors.white,
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 30,
	},
	addTaskContainer: {
		position: 'absolute',
		bottom: 20,
    width: '100%',
    left: 20
	},
});
export default HomeScreen;
