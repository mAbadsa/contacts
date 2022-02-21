import { FC, useState, useEffect, createContext } from "react";
import Axios, { AxiosRequestConfig } from "axios";

export const AuthContext = createContext<{ token: string }>({ token: "" });

const AuthProvider: FC = ({ children }) => {
  // const [isAuth, setIsAuth] = useState(false);
  // const [refresh, setRefresh] = useState(false);
  // const [authLoading, setAuthLoading] = useState(true);
  // const [userData, setUserData] = useState(null);
  const [token, setToken] = useState<string>("");
  console.log({ token });

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        const options: AxiosRequestConfig = {
          method: "POST",
          url: "https://api-teams.chatdaddy.tech/token",
          headers: { "Content-Type": "application/json" },
          data: {
            refreshToken: "059c420e-7424-431f-b23b-af0ecabfe7b8",
            teamId: "a001994b-918b-4939-8518-3377732e4e88",
          },
        };
        const { data: authData } = await Axios.request(options);

        if (unmounted) {
          console.log("unmounted");

          setToken(authData.access_token);
        }
      } catch ({ response: resError }) {
        setToken("");
      }
    })();
    return () => {
      unmounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        // isAuth,
        // userData,
        // authLoading,
        // setAuthLoading,
        // refresh,
        // setRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
