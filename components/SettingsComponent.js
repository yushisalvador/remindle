import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";

export default function SettingsComponent({ menuData }) {
  return (
    <SafeAreaView>
      {menuData.map(({ title, definition, index }) => (
        <TouchableOpacity key={title}>
          <View>
            <Text>{title}</Text>
            <Text>{definition}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
