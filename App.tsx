//React
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

//styled-components
import { ThemeProvider } from "styled-components";

//Fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

//Global
import theme from "./src/global/styles/theme";

//Routes
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#5636d3" barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
