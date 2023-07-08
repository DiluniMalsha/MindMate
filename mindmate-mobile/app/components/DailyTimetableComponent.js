import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import colors from "../config/colors";
import { TabBar, TabView } from "react-native-tab-view";
import TimeTableDayViewComponent from "./TimeTableDayViewComponent";

function DailyTimetableComponent(props) {
  const [timeTableAdded, setTimeTableAdded] = useState(true);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "mon", title: "MON" },
    { key: "tue", title: "TUE" },
    { key: "wed", title: "WED" },
    { key: "thu", title: "THU" },
    { key: "fri", title: "FRI" },
    { key: "sat", title: "SAT" },
    { key: "sud", title: "SUN" },
  ]);

  const renderScene = ({ route }) => {
    return <TimeTableDayViewComponent day={route.title} />;
  };
  if (timeTableAdded) {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.addNewButton}
          onPress={() => console.log("Add New Record Button Pressed")}
        >
          <Text style={styles.addNewButtonText}>Add New Record</Text>
        </TouchableHighlight>
        <View style={styles.timeTable}>
          <TabView
            style={styles.timetableTab}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get("window").width }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                renderLabel={({ route, color }) => (
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 13,
                      fontFamily: "LatoBold",
                    }}
                  >
                    {route.title}
                  </Text>
                )}
                indicatorStyle={styles.indicatorStyle}
                style={styles.tabBar}
              />
            )}
          />
        </View>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.timeTableNotAddedDescription}>
          No time table is added currently
        </Text>
        <TouchableHighlight
          style={styles.addNewButton}
          onPress={() => console.log("Add New Timetable Button Pressed")}
        >
          <Text style={styles.addNewButtonText}>Add New Timetable</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  addNewButton: {
    width: "50%",
    height: 40,
    margin: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  addNewButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "LatoBold",
  },
  timeTableNotAddedDescription: {
    fontFamily: "LatoLight",
    fontSize: 14,
    marginTop: 30,
  },
  timeTable: {
    width: "90%",
    height: "70%",
  },
  timetableTab: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  tabBar: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0, // for iOS
    },
  },
  indicatorStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 200,
    padding: 1.5,
    height: "100%",
  },
});

export default DailyTimetableComponent;
