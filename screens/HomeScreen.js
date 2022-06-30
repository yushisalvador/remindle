import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/core";
import { FullWindowOverlay } from "react-native-screens";
const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/cake.jpg")}
        resizeMode="cover"
        blurRadius={2}
        style={styles.bgImage}
      >
        <View>
          <Text style={styles.mainText}>
            Welcome, {auth.currentUser?.email}
          </Text>
          <Text style={styles.mainText}>
            Helping You Remember Whats Important
          </Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    fontSize: "1rem",
  },
  mainText: {
    marginTop: 30,
    color: "white",
    padding: 16,
    marginLeft: "1.4rem",
    textAlign: "left",
    fontSize: "2.6rem",
    lineSpacing: 10,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
});
