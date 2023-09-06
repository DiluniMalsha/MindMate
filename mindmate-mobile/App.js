import { useFonts } from "expo-font";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import EmotionTrackerScreen from "./app/screens/EmotionTrackerScreen";
import Navigator from "./app/screens/Navigator";

export default function App() {
  const [loaded] = useFonts({
    LatoBlack: require("./app/assets/fonts/Lato/Lato-Black.ttf"),
    LatoBold: require("./app/assets/fonts/Lato/Lato-Bold.ttf"),
    LatoLight: require("./app/assets/fonts/Lato/Lato-Light.ttf"),
    LatoRegular: require("./app/assets/fonts/Lato/Lato-Regular.ttf"),
    LatoThin: require("./app/assets/fonts/Lato/Lato-Thin.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return <Navigator />;
}

//rsf - basic react native
//rnss - style sheet
