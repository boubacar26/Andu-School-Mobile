import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContext } from "./src/context/AuthContext";
import Splash from "./src/pages/splash/Splash";
import AppStack from "./src/stack/AppStack";
import AuthStack from "./src/stack/AuthStack";

function Root() {
  const auth = React.useContext(AuthContext);
  
  if (auth?.splashScreenLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {!auth?.userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Root;
