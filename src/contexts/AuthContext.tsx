//React
import React, { createContext, useState, ReactNode } from "react";

//AuthSession
import * as AuthSession from "expo-auth-session";

//Services
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;

//Types
interface AuthContextProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export const AuthContext = createContext({} as IAuthContextData);

export default function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User>({} as User);

  async function signInWithGoogle() {
    try {
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURI(
        String(SCOPE)
      )}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.picture,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
