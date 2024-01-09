import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({children, style}) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir"
  }
})

export default AppText;