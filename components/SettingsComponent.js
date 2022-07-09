import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function SettingsComponent({ menuData }) {
  return (
    <ScrollView style={styles.container}>
      {menuData.map(({ title, definition, index }) => (
        <TouchableOpacity key={title}>
          <View style={styles.singleMenu}>
            <Text style={styles.mainText}>{title}</Text>
            <Text style={styles.subText}>{definition}</Text>
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  singleMenu: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 20,
  },
  mainText: {
    fontSize: 17,
    fontWeight: 600,
  },
  subText: {
    fontSize: 14,
    color: "grey",
    fontWeight: 400,
  },
  divider: {
    height: 0.5,
    backgroundColor: "grey",
  },
});
