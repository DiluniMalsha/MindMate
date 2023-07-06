import React from "react";

import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import HomeScreen from "./HomeScreen";
import EmotionTrackerScreen from "./EmotionTrackerScreen";
import SchedulerScreen from "./SchedulerScreen";
import SettingsScreen from "./SettingsScreen";

import colors from "../config/colors";

//screen names
const homeName = "Home";
const emotionTrackerName = "Emotion Tracker";
const schedulerName = "Scheduler";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function Navigator(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === emotionTrackerName) {
              iconName = focused ? "fitness" : "fitness-outline";
            } else if (rn === schedulerName) {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "grey",
          labelStyle: {
            paddingBottom: 25,
            fontSize: 12,
            fontFamily: "LatoBold",
          },
          style: { padding: 10, height: 80 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen
          name={emotionTrackerName}
          component={EmotionTrackerScreen}
        />
        <Tab.Screen name={schedulerName} component={SchedulerScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
