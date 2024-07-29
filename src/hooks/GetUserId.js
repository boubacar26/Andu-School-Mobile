import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

function GetUserId() {
  const [id, setId] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const getId = async () => {
    const userId = await AsyncStorage.getItem("userId");
    if (userId) {
      setId(JSON.parse(userId)?.data?.id);
      setUser(JSON.parse(userId)?.data);
    }
  };

  React.useEffect(() => {
    getId();
  }, []);

  return { id, user };
}

export default GetUserId;
