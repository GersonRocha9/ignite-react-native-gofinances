//React
import React from "react";

//React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Dashboard from "../screens/Dashboard";
import Register from "../screens/Register";

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Listagem" }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{ title: "Cadastrar" }}
      />
    </Navigator>
  );
}
