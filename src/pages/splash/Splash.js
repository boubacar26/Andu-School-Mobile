import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { bgColor } from "../../constants";

function Splash() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          borderRadius: 100,
          width: 90,
          height: 90,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={60} color={bgColor} />
      </View>
    </View>
  );
}

export default Splash;
