import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AppModal = ({ modalVisible, setModalVisible, title, modalBody }) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon name="close" size={27} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.body}>{modalBody}</View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "nowrap",
  },

  modalView: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 4,
    minHeight: 300,
  },
  header: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 25,
    marginLeft: "10px",
  },
  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
