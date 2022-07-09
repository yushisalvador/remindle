import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import AppModal from "./Modals/AppModal";

export default function SettingsComponent({
  menuData,
  modalVisible,
  setModalVisible,
}) {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="Contact Us"
        modalBody={
          <View>
            <Text style={{ fontSize: 18 }}>
              For account deletion, bug reports and feedbacks, please email us
              at <b>aremindly.gmail.com</b>
            </Text>
          </View>
        }
      />
      <ScrollView style={styles.container}>
        {menuData.map(({ title, definition, index, onPress }) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View style={styles.singleMenu}>
              <Text style={styles.mainText}>{title}</Text>
              <Text style={styles.subText}>{definition}</Text>
            </View>
            <View style={styles.divider} />
          </TouchableOpacity>
        ))}
        {/* <View>
          {modalVisible && (
            <ContactUsModal
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          )}
        </View> */}
      </ScrollView>
    </>
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
