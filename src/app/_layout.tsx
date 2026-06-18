import { Stack } from "expo-router";
import {useFonts} from "expo-font"
import { ActivityIndicator } from "react-native";

export default function RootLayout() {

  const [fontsloaded]= useFonts({
    "appFont": require("@/assets/fonts/PlayfairDisplay-Regular.ttf"),
    "appFontBold": require("@/assets/fonts/PlayfairDisplay-Bold.ttf"),
    "appFontItalic": require("@/assets/fonts/PlayfairDisplay-Italic.ttf")
  })

  if (!fontsloaded) {
    <ActivityIndicator/>
  }
  return <Stack />;
}
