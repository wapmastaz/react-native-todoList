// import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Button,
	Alert,
	Platform,
	StatusBar,
	Dimensions,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/componenets/AppText';
import colors from './app/config/colors';
import AppButton from './app/componenets/AppButton';
import Card from './app/componenets/Card';
import ListingsDetailScreen from './app/screens/ListingsDetailScreen';

export default function App() {
	return (
		<ListingsDetailScreen/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},

	cardContainer: {
		backgroundColor: '#f8f4f4',
		padding: 20,
		flex: 1,
		paddingTop: 100
	},
});
