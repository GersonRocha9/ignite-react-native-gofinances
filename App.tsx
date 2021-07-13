//React
import React from "react";
import { ThemeProvider } from "styled-components";

//Global
import theme from "./src/global/styles/theme";

//Screens
import Dashboard from "./src/screens/Dashboard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
