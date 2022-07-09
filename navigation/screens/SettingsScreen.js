import * as React from "react";
import { StyleSheet } from "react-native";
import SettingsComponent from "../../components/SettingsComponent";

export default function SettingsScreen({ navigation }) {
  const menuData = [
    {
      title: "About",
      definition: "About the App, About the team",
    },
    {
      title: "Feedback & Help",
      definition: "Contacts us",
    },
    {
      title: "Screen",
      definition: "Enable Dark Mode!",
    },
  ];

  return <SettingsComponent menuData={menuData} />;
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // list: {
  //   flex: 1,
  //   width: "100%",
  //   marginTop: 24,
  // },
});
