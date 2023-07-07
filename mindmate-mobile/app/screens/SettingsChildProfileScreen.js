import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  useWindowDimensions,
  Image,
} from "react-native";

import { TabBar, TabView } from "react-native-tab-view";

import { Picker } from "@react-native-picker/picker";

import MoodPreferencesComponent from "../components/MoodPreferencesComponent";

import colors from "../config/colors";

function SettingsChildProfileScreen(props) {
  const [selectedGender, setSelectedGender] = useState();

  //for preferences tab view
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "happy",
      title: "Happy",
      image: require("../assets/emotions/happy.png"),
    },
    {
      key: "suprised",
      title: "Suprised",
      image: require("../assets/emotions/suprised.png"),
    },
    {
      key: "sad",
      title: "Sad",
      image: require("../assets/emotions/sad.png"),
    },
    {
      key: "fear",
      title: "Fear",
      image: require("../assets/emotions/fear.png"),
    },
    {
      key: "anger",
      title: "Anger",
      image: require("../assets/emotions/angry.png"),
    },
    {
      key: "disgust",
      title: "Disgust",
      image: require("../assets/emotions/disgust.png"),
    },
    {
      key: "neutral",
      title: "Neutral",
      image: require("../assets/emotions/neutral.png"),
    },
  ]);

  const renderScene = ({ route }) => {
    return <MoodPreferencesComponent mood={route.title} />;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={styles.profile}>
          <Text style={styles.profileTitle}>Mihasa's Profile</Text>
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
          </View>
          <TouchableHighlight
            style={styles.updateDetailsButton}
            onPress={() => console.log("Update Details Button Pressed")}
          >
            <Text style={styles.updateDetailsButtonText}>Update Details</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.preferences}>
          <Text style={styles.preferencesTitle}>Her Preferences</Text>
          <Text style={styles.preferencesDescription}>
            We need some resources to use for Mihasa when she is in different
            moods
          </Text>
          <TabView
            style={styles.emotionsTab}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get("window").width }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                renderLabel={({ route, color }) => (
                  <Image source={route.image} style={styles.emotionTabImage} />
                )}
                indicatorStyle={styles.indicatorStyle}
                style={styles.tabBar}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emotionsTab: {
    width: Dimensions.get("window").width - 40,
    height: 500,
    top: 0,
    backgroundColor: colors.white,
  },
  emotionTabImage: {
    width: 30,
    height: 30,
  },
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
  },
  indicatorStyle: {
    backgroundColor: colors.primary,
    padding: 1.5,
    marginBottom: -2,
  },

  label: {
    fontFamily: "LatoRegular",
    fontSize: 15,
    color: colors.black,
    marginBottom: 5,
  },
  preferences: {
    width: "100%",
    margin: 10,
    marginTop: 0,
    padding: 10,
  },
  preferencesDescription: {
    fontFamily: "LatoLight",
    marginTop: 10,
    marginBottom: 10,
  },
  preferencesTitle: {
    fontFamily: "LatoBold",
    fontSize: 20,
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

  scrollView: {},
  tabBar: {
    backgroundColor: colors.white,
  },
  updateDetailsButton: {
    left: "25%",
    width: "50%",
    height: "10%",
    marginTop: "5%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  updateDetailsButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "LatoBold",
  },
});

export default SettingsChildProfileScreen;
