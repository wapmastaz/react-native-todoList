import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';

import {MaterialCommunityIcons} from '@expo/vector-icons/Ionicons';

function AddTask(props) {
	const [taskTitle, setTaskTitle] = useState('');
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.inputText}
				placeholder='Add New Task!'
				onChangeText={(newText) => setTaskTitle(newText)}
				defaultValue={taskTitle}
			/>
			<AppButton
				style={styles.button}
				title={'Add'}
        color='white'
        textStyle={styles.buttonTextStyle}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	button: {
		width: 60,
    height: 60,
    borderRadius: 52,
	},
	inputText: {
		backgroundColor: colors.white,
		width: "auto",
		height: 45,
		borderRadius: 60,
		paddingHorizontal: 20,
		fontSize: 20,
    flexGrow: 1
	},
  buttonTextStyle: {
    color: colors.primary
  }
});

export default AddTask;
