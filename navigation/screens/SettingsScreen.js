import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SettingsComponent from "../../components/SettingsComponent";

export default function SettingsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
  ];

  return (
    <SettingsComponent
      menuData={menuData}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
}
