//React
import React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Routes
import AppRoutes from "./app.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
