import React from "react";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/app/Store";
import { StatusBar } from "react-native";
import Root from "./Root";
import { AuthProvider } from "./src/context/AuthContext"

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <StatusBar
            animated={true}
            backgroundColor={"#000"}
            barStyle={"default"}
            hidden={false}
          />
          <Root />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
