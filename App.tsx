//React
import React from "react";

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

//Screens
import Dashboard from "./src/screens/Dashboard";

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
      <Dashboard />
    </ThemeProvider>
  );
}
