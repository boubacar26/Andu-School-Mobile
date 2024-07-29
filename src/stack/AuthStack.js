import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreem from "../screen/AuthScreen";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreem" component={AuthScreem} options={{}} />
    </Stack.Navigator>
  );
}

export default AuthStack;
