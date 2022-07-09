import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";

function OccasionsScreen({ navigation }) {
  const [occasions, setOccasions] = React.useState([
    {
      name: "bday",
      date: {
        year: "every",
        month: 4,
        day: 12,
      },
      reminder_days_before: 7,
      reminder_time: { hours: 9, minutes: 30 },
      note: "",
    },
  ]);
  const addOccasion = (occasion) => {
    setOccasions([...occasions, occasion]);
  };
  const deleteOccasion = (i) => {
    const newOccasions = [...occasions];
    newOccasions.splice(i, 1);
    setOccasions(newOccasions);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={() => navigation.navigate("Home")}>GO HOME</Text>
      <Text onPress={() => navigation.navigate("NewOccasionForm")}>
        ADD OCCASION
      </Text>
      {occasions.map((o, i) => (
        <OccasionView
          key={i}
          occasion={o}
          handleDelete={() => deleteOccasion(i)}
        />
      ))}
    </View>
  );
}

function OccasionView({ occasion, handleDelete }) {
  return (
    <View>
      <Text>{occasion.name}</Text>
      <Text>Date: {formatDate(occasion.date)}</Text>
      <Text>Remind me [ {occasion.reminder_days_before} ] days before</Text>
      <Text>
        At [ {occasion.reminder_time.hours}:{occasion.reminder_time.minutes} ]
      </Text>
      <Text>Notes: [ {occasion.note} ]</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

function formatDate({ year, month, day }) {
  return `Year: ${year}, Month: ${month}, Day: ${day}`;
}

function NewOccasionForm({ navigation, handleAddOccasion }) {
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [note, setNote] = React.useState("");
  return (
    <ScrollView>
      <Text>Add New Occasion</Text>
      <DatePicker mode="calendar" date={date} onDateChange={setDate} />
      <DatePicker mode="time" time={time} onTimeChange={setTime} />
      <TextInput onChangeText={setNote} value={note} placeholder="note" />
      <TouchableOpacity onPress={handleAddOccasion} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// TODO: deduplicate
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "90%",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    marginTop: "1rem",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});

export { OccasionsScreen, NewOccasionForm };
