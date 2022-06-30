import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./navigation/screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./navigation/screens/HomeScreen";
import Main from "./navigation/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return <Main />;
}

const styles = StyleSheet.create({});
