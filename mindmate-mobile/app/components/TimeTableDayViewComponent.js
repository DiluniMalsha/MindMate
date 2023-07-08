import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TimeTableRecordComponent from "./TimeTableRecordComponent";

function TimeTableDayViewComponent({ day }) {
  return (
    <ScrollView>
      <TimeTableRecordComponent
        from="08:00 AM"
        to="10:00 AM"
        task="Maths Homework"
      />
      <TimeTableRecordComponent
        from="10:00 AM"
        to="11:00 AM"
        task="Reading Books"
      />
      <TimeTableRecordComponent
        from="11:00 AM"
        to="12:00 PM"
        task="Relaxing Time"
      />
      <TimeTableRecordComponent
        from="12:00 PM"
        to="13:00 PM"
        task="Lunch Time"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
  },
});

export default TimeTableDayViewComponent;
