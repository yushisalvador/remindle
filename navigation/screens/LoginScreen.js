import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { auth, firebase } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import {
  collection,
  doc,
  setDoc,
  getFirestore,
  getDoc,
} from "firebase/firestore";

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleRegister = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userCredentials.user;
      const uid = user.uid;
      const db = getFirestore();
      await setDoc(doc(db, "users", uid), {
        id: uid,
        email: userEmail,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userCredentials.user;
      const uid = user.uid;
      const db = getFirestore();
      if ((await getDoc(doc(db, "users", uid))).exists()) {
        navigation.navigate("Home");
      } else {
        alert("cannot find user");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.appName}>REMINDLE</Text>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 250, height: 250 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={userEmail}
          style={styles.input}
          onChangeText={(text) => setUserEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={userPassword}
          style={styles.input}
          onChangeText={(text) => setUserPassword(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: "80%",
  },

  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "#f9c065",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#000000",
    borderWidth: 1,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutlineText: {
    color: "#f9c065",
    fontWeight: "700",
    fontSize: 16,
  },

  appName: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Monospace",
    color: "#f9c065",
  },
});
