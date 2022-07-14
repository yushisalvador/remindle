import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>
          Helping You Remember Whats Important
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff4e1",
  },

  button: {
    backgroundColor: "#0782F9",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "4rem",
  },

  mainText: {
    marginTop: 30,
    color: "black",
    padding: 16,
    marginLeft: "1.4rem",
    textAlign: "left",
    fontSize: 40,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
});
