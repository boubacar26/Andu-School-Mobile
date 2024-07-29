import axios from "axios";
import { useEffect, useState } from "react";
import { CSRF_TOKEN_PATH } from "../routes/api.paths";

function GetCsrfToken() {
  const [csrfToken, setCsrfToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      try {
        let result = await axios.get(CSRF_TOKEN_PATH);
        setCsrfToken(result?.data?.csrftoken);
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, []);

  return { csrfToken };
}

export default GetCsrfToken;
