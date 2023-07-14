import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from "../config/colors";
function TimeTableDayViewComponent({ day }) {
  const tasks = [
    {
      id: 1,
      from: "08:00 AM",
      to: "10:00 AM",
      task: "Reading Books",
    },
    {
      id: 2,
      from: "08:00 AM",
      to: "10:00 AM",
      task: "Reading Books",
    },
    {
      id: 3,
      from: "08:00 AM",
      to: "10:00 AM",
      task: "Reading Books",
    },
  ];

  const editRecord = (id) => {
    console.log("Edit Record " + id);
  };

  const deleteRecord = (id) => {
    console.log("Delete Record " + id);
  };

  return (
    <SwipeListView
      data={tasks}
      renderItem={(data, rowMap) => (
        <View style={styles.container}>
          <View style={styles.time}>
            <Text style={styles.timeText}>{data.item.from}</Text>
            <Text style={styles.timeText}>to</Text>
            <Text style={styles.timeText}>{data.item.to}</Text>
          </View>
          <View style={styles.task}>
            <Text style={styles.taskText}>{data.item.task}</Text>
          </View>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableHighlight
            onPress={() => editRecord(data.item.id)}
            style={[styles.backRightButton, styles.backRightButtonLeft]}
          >
            <Ionicons name="create-outline" size={20} color="white" />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => deleteRecord(data.item.id)}
            style={[styles.backRightButton, styles.backRightButtonRight]}
          >
            <Ionicons name="trash-outline" size={20} color="white" />
          </TouchableHighlight>
        </View>
      )}
      leftOpenValue={0}
      rightOpenValue={-145}
      disableRightSwipe
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  time: {
    width: "29%",
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  task: {
    width: "70%",
    justifyContent: "center",
  },
  timeText: {
    fontFamily: "LatoBold",
    fontSize: 15,
    color: colors.white,
  },
  taskText: {
    fontFamily: "LatoBold",
    fontSize: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
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
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 5,
  },
  backRightButton: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    alignItems: "center",
  },
  backRightButtonText: {
    fontFamily: "LatoBold",
    color: colors.white,
  },
  backRightButtonLeft: {
    backgroundColor: colors.blue,
    right: 115,
  },
  backRightButtonRight: {
    backgroundColor: colors.red,
    right: 40,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default TimeTableDayViewComponent;
