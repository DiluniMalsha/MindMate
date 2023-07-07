import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import colors from "../config/colors";
import SettingsChildProfileScreen from "./SettingsChildProfileScreen";
import SettingsUserProfileScreen from "./SettingsUserProfileScreen";

const ChildProfileRoute = () => <SettingsChildProfileScreen />;

const SecondRoute = () => <SettingsUserProfileScreen />;

function SettingsScreen(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Child Profile" },
    { key: "second", title: "My Profile" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <ChildProfileRoute />;
      case "second":
        return <SecondRoute />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Settings</Text>
      <TabView
        style={styles.settingsTab}
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
                  fontSize: 16,
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  indicatorStyle: {
    backgroundColor: colors.primary,
    padding: 1.5,
    marginBottom: -2,
  },
  pageTitle: {
    position: "absolute",
    color: colors.primary,
    fontFamily: "LatoBold",
    fontSize: 20,
    top: 50,
  },
  settingsTab: {
    width: "100%",
    height: 400,
    top: 100,
    backgroundColor: colors.white,
  },
  tabBar: {
    backgroundColor: colors.white,
  },
});

export default SettingsScreen;
