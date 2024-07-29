import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../pages/home/Home";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
