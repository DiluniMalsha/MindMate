import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

function ChangePasswordComponent(props) {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.changePassword}>
          <Text style={styles.changePasswordTitle}>Change Password</Text>
          <View style={styles.changePasswordForm}>
            <View style={styles.formFieldFull}>
              <Text style={styles.label}>Current Password</Text>
              <TextInput
                style={styles.formInput}
                placeholder={"Enter Current Password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"password"}
              ></TextInput>
            </View>

            <View style={styles.formFieldFull}>
              <Text style={styles.label}>New Password</Text>
              <TextInput
                style={styles.formInput}
                placeholder={"Enter New Password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"password"}
              ></TextInput>
            </View>

            <View style={styles.formFieldFull}>
              <Text style={styles.label}>Re-enter New Password</Text>
              <TextInput
                style={styles.formInput}
                placeholder={"Re-enter New Password"}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"password"}
              ></TextInput>
            </View>
          </View>
          <TouchableHighlight
            style={styles.updateButton}
            onPress={() => console.log("Change Password Update Button Pressed")}
          >
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formFieldFull: {
    width: "96%",
    padding: 10,
  },
  formFieldHalf: {
    width: "48%",
    padding: 10,
  },
  formInput: {
    width: "98%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    height: 40,
    fontSize: 16,
    color: colors.ash,
    borderRadius: 10,
    fontFamily: "LatoLight",
  },
  label: {
    fontFamily: "LatoRegular",
    fontSize: 15,
    color: colors.black,
    marginBottom: 5,
  },
  changePassword: {
    width: "100%",
    margin: 10,
    marginBottom: 0,
  },
  changePasswordForm: {
    marginLeft: 10,
  },
  changePasswordTitle: {
    fontFamily: "LatoBold",
    fontSize: 20,
    margin: 10,
  },
  scrollView: {},
  updateButton: {
    left: "25%",
    width: "50%",
    height: 50,
    marginTop: "5%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  updateButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "LatoBold",
  },
});

export default ChangePasswordComponent;
