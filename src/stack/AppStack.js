import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { bgColor } from "../constants";
import HomeScreen from "../screen/HomeScreen";

const Tab = createBottomTabNavigator();
function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 57,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: bgColor,
          paddingBottom: 7,
          marginTop: -7,
        },
        tabBarActiveBackgroundColor: bgColor,
        headerShadowVisible: false,
        // headerRight: ({}) => (),
        // headerTitle: "App logo"
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "HomeScreen",
          headerStyle: {
            backgroundColor: bgColor,
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                marginBottom: 6,
                marginTop: -6,
                color: focused ? "#000" : bgColor,
              }}
            >
              HomeScreen
            </Text>
          ),
          // headerTintColor: "#fff",
          // headerLeft: ({}) => (),
          // tabBarIcon: ({ focused }) => (),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppStack;
