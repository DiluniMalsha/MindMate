import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { TouchableHighlight } from "react-native";

function TimeTableRecordComponent({ from, to, task }) {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{from}</Text>
        <Text style={styles.timeText}>to</Text>
        <Text style={styles.timeText}>{to}</Text>
      </View>
      <View style={styles.task}>
        <Text style={styles.taskText}>{task}</Text>
        <View style={styles.buttonBar}>
          <View style={styles.space}></View>
          <TouchableHighlight
            style={styles.editButton}
            onPress={() => console.log("Edit Button Pressed")}
          >
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.deleteButton}
            onPress={() => console.log("Delete Button Pressed")}
          >
            <Text style={styles.deleteButtonText}>DELETE</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    maxHeight: 80,
    marginTop: 10,
  },
  time: {
    width: "29%",
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: "1%",
  },
  task: {
    width: "69%",
  },
  timeText: {
    fontFamily: "LatoBold",
    fontSize: 15,
    color: colors.white,
  },
  taskText: {
    fontFamily: "LatoBold",
    fontSize: 15,
    height: "50%",
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "center",
    padding: 5,
  },
  buttonBar: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
  },
  space: {
    width: "45%",
  },
  editButton: {
    width: "25%",
    height: "80%",
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 3,
  },
  editButtonText: {
    fontFamily: "LatoBold",
    fontSize: 13,
  },
  deleteButton: {
    width: "25%",
    height: "80%",
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 3,
  },
  deleteButtonText: {
    fontFamily: "LatoBold",
    fontSize: 13,
    color: colors.white,
  },
});

export default TimeTableRecordComponent;
