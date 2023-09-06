import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import colors from "../config/colors";

function UserProfileComponent(props) {
  const [selectedGender, setSelectedGender] = useState();

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.profile}>
          <Text style={styles.profileTitle}>My Profile</Text>
          <View style={styles.profileForm}>
            <View style={styles.row}>
              <View style={styles.formFieldHalf}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Enter First Name"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  textContentType={"name"}
                ></TextInput>
              </View>

              <View style={styles.formFieldHalf}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Enter Last Name"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  textContentType={"name"}
                ></TextInput>
              </View>
            </View>

            <View style={styles.formFieldFull}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.formInput}
                placeholder={"Enter Address"}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"name"}
              ></TextInput>
            </View>

            <View style={styles.formFieldFull}>
              <Text style={styles.label}>Emergency Contact Number</Text>
              <TextInput
                style={styles.formInput}
                placeholder={"Enter Emergency Contact Number"}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"name"}
              ></TextInput>
            </View>

            <View style={styles.row}>
              <View style={styles.formFieldHalf}>
                <Text style={styles.label}>Gender</Text>
                <View style={styles.formPicker}>
                  <Picker
                    selectedValue={selectedGender}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedGender(itemValue)
                    }
                  >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker>
                </View>
              </View>
              <View style={styles.formFieldHalf}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Enter Age"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  keyboardType="numeric"
                ></TextInput>
              </View>
            </View>

            <View style={styles.formFieldFull}>
              <Text style={styles.label}>Relationship to Mihasa</Text>
              <TextInput
                style={styles.formInput}
                placeholder={"Enter Relationship"}
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"name"}
              ></TextInput>
            </View>
          </View>
          <TouchableHighlight
            style={styles.profileButton}
            onPress={() => console.log("Update Details Button Pressed")}
          >
            <Text style={styles.profileButtonText}>Update Details</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.signOutButton}
            onPress={() => console.log("Sign Out Button Pressed")}
          >
            <Text style={styles.profileButtonText}>Sign Out</Text>
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
  formPicker: {
    borderWidth: 1,
    borderColor: "#D8D8D8",
    height: 40,
    fontSize: 16,
    color: colors.ash,
    borderRadius: 10,
    fontFamily: "LatoLight",
    justifyContent: "center",
  },
  label: {
    fontFamily: "LatoRegular",
    fontSize: 15,
    color: colors.black,
    marginBottom: 5,
  },
  profile: {
    width: "100%",
    margin: 10,
    marginBottom: 0,
  },
  profileForm: {
    marginLeft: 10,
  },
  profileTitle: {
    fontFamily: "LatoBold",
    fontSize: 20,
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  scrollView: {
    marginBottom: 100,
  },
  profileButton: {
    left: "25%",
    width: "50%",
    height: 50,
    marginTop: "5%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.updateButtonColor,
  },
  profileButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "LatoBold",
  },
  signOutButton: {
    left: "25%",
    width: "50%",
    height: 50,
    marginTop: "5%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.red,
  },
});

export default UserProfileComponent;
