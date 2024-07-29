import React, { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/slices/userApi";
import { CSRF_TOKEN_PATH } from "../routes/api.paths";
import { useDispatch } from "react-redux";
import { baseApi } from "../redux/slices/apiMananger";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  const dispatch = useDispatch();

  const [isRegisterLoading, setIsRegisterLoading] = React.useState(false);
  const [isLoginLoading, setIsLoginLoading] = React.useState(false);
  const [splashScreenLoading, setSplashScreenLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);
  const [loginError, setLoginError] = React.useState("");

  const register = async (form) => {
    setIsRegisterLoading(true);
    try {
      const token = await axios.get(CSRF_TOKEN_PATH);
      const user = await registerUser({
        body: { ...form },
        token: token.data?.csrftoken,
      });

      await AsyncStorage.setItem("userId", JSON.stringify(user));
      setUserToken(user?.data?.id);

      setIsRegisterLoading(false);
    } catch (error) {
      console.log(error);
      setIsRegisterLoading(false);
    }
  };

  const login = async (form) => {
    setIsLoginLoading(true);
    try {
      const token = await axios.get(CSRF_TOKEN_PATH);
      const user = await loginUser({
        body: { ...form },
        token: token.data?.csrftoken,
      });
      if (user?.error?.status === 401) {
        setLoginError(user.error.data.message);
      }
      await AsyncStorage.setItem("userId", JSON.stringify(user));
      setUserToken(user?.data?.id);
      setLoginError("");
      setIsLoginLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoginLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userId");
      dispatch(baseApi.util.resetApiState());
      setUserToken(null);
    } catch (error) {
      console.log(error);
    }
  };

  const isLogin = async () => {
    setSplashScreenLoading(true);
    try {
      const user = await AsyncStorage.getItem("userId");
      const userDeserialized = JSON.parse(user);

      if (userDeserialized) {
        setUserToken(userDeserialized?.data?.id);
      }

      setSplashScreenLoading(false);
    } catch (error) {
      console.log(error);
      setSplashScreenLoading(false);
    }
  };

  React.useEffect(() => {
    isLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        isLoginLoading,
        loginError,
        register,
        isRegisterLoading,
        userToken,
        splashScreenLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
