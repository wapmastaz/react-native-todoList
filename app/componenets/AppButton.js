import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, onPress, style, textStyle, color = 'primary' }) {
	return (
		<TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}, style]} onPress={onPress}>
			<Text style={[styles.text, textStyle]}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase'
  }
})

export default AppButton;
