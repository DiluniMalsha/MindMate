import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function SettingsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
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

export default SettingsScreen;
