import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SettingsComponent from "../../components/SettingsComponent";
import { auth } from "../.././config/firebase";
import { useNavigation } from "@react-navigation/core";

export default function SettingsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menuData = [
    {
      title: "About",
      definition: "About the App, About the team",
      onPress: () => {},
    },
    {
      title: "Feedback & Help",
      definition: "Contact us",
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      title: "Screen",
      definition: "Enable Dark Mode!",
      onPress: () => {},
    },
    {
      title: "Logout",
      definition: "You will have to login again",
      onPress: () => {
        handleSignOut();
      },
    },
  ];

  return (
    <View>
      <SettingsComponent
        menuData={menuData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
