import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { auth } from "../.././config/firebase";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
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
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>Welcome, {auth.currentUser?.email}</Text>
        <Text style={styles.mainText}>
          Helping You Remember Whats Important
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: "4rem",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "4rem",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  mainText: {
    marginTop: 30,
    color: "white",
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
