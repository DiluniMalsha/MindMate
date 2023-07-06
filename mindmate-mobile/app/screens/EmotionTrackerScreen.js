import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

function EmotionTrackerScreen(props) {
  let mood = "Happy";
  let image = require("../assets/emotions/happy.png");
  if (mood === "Angry") {
    image = require("../assets/emotions/angry.png");
  } else if (mood === "Disgust") {
    image = require("../assets/emotions/disgust.png");
  } else if (mood === "Fear") {
    image = require("../assets/emotions/fear.png");
  } else if (mood === "Happy") {
    image = require("../assets/emotions/happy.png");
  } else if (mood === "Neutral") {
    image = require("../assets/emotions/neutral.png");
  } else if (mood === "Sad") {
    image = require("../assets/emotions/sad.png");
  } else if (mood === "Suprised") {
    image = require("../assets/emotions/suprised.png");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emotionsContainer}>
        <Image source={image} style={styles.emotionImage} />
        <Text style={styles.emotionText}>Mihasa is Now in a {mood} Mood</Text>
        <TouchableOpacity
          style={styles.emotionRespondButton}
          onPress={() => console.log("Respond Button Pressed")}
        >
          <Text style={styles.emotionRespondButtonText}>Respond to Her</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.pageTitle}>Emotion Tracker</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  emotionsContainer: {
    backgroundColor: colors.primary,
    width: "100%",
    height: "50%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
  },
  emotionImage: {
    position: "relative",
    width: 200,
    height: 200,
    top: "20%",
  },
  emotionRespondButton: {
    width: "50%",
    height: "10%",
    marginTop: "25%",
    marginBottom: "5%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  emotionRespondButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: "LatoRegular",
  },
  emotionText: {
    position: "relative",
    top: "20%",
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: colors.white,
  },
  pageTitle: {
    position: "absolute",
    color: colors.white,
    fontFamily: "LatoBold",
    fontSize: 20,
    top: 50,
  },
});

export default EmotionTrackerScreen;
