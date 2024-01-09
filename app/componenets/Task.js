import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

const Task = ({ title, isComplete = true }) => {
	return (
		<View style={styles.taskCard}>
			<View style={styles.taskDetails}>
				<View style={styles.circleBox}></View>
				<AppText
					style={{ textDecorationLine: isComplete ? 'line-through' : 'none' }}
				>
					{title}
				</AppText>
			</View>
			<View style={styles.circleDot}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	taskCard: {
		flexDirection: 'row',
		backgroundColor: colors.white,
		borderRadius: 15,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: colors.lightGray,
		height: 53,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		marginVertical: 5,
	},

	taskDetails: {
		flexDirection: 'row',
		gap: 15,
	},

	circleBox: {
		width: 24,
		height: 24,
		borderRadius: 5,
		backgroundColor: colors.lightPrimary,
		opacity: 40,
	},

	circleDot: {
		width: 12,
		height: 12,
		borderRadius: 5,
		borderStyle: 'solid',
		borderWidth: 2,
		backgroundColor: colors.white,
		borderColor: colors.lightPrimary,
	},
});

export default Task;
