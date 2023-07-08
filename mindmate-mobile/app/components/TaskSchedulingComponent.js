import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
function TaskSchedulingComponent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Daily Time Table</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
});

export default TaskSchedulingComponent;
