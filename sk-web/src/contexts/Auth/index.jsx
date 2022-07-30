import Axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { API, server_url } from "src/constants/api";
import {
  session_auth_token_space,
  profile_auth_token_space,
} from "../../constants/vars";

import { AuthReducer, AuthTypes, initialState } from "./reducer";

export const AuthContext = createContext(null);
export const UseAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const router = useRouter();
  const existSession = async () => {
    try {
      let response = localStorage.getItem(session_auth_token_space);
      if (response) {
        let { data: profile } = await Axios.get(`${server_url}${API.user}`, {
          headers: { Authorization: response ? `Bearer ${response}` : "" },
        });
        handlerLogin(response, profile.data);
      } else {
        dispatch({ type: AuthTypes.session, payload: "not-session" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getToken = () => {
    let response = localStorage.getItem(session_auth_token_space);
    return response ? response : "";
  };
  const saveSession = (token) => {
    localStorage.setItem(session_auth_token_space, token);
    dispatch({ type: AuthTypes.session, payload: token });
  };
  const handlerLogin = (token, profile) => {
    localStorage.setItem(session_auth_token_space, token);
    localStorage.setItem(profile_auth_token_space, JSON.stringify(profile));
    dispatch({ type: AuthTypes.all, payload: { session: token, profile } });
  };
  const logout = () => {
    localStorage.clear();
    dispatch({
      type: AuthTypes.all,
      payload: { session: "not-session", profile: {} },
    });
    router.replace("/auth/login");
  };
  const role = () => {
    return state.profile.roleId.name;
  };
  useEffect(() => {
    existSession();
    // return () => {
    //   dispatch({ type: AuthTypes.session, payload: "not-logued" });
    // };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        sessionToken: state.session,
        profile: state.profile,
        handlerLogin,
        saveSession,
        getToken,
        logout,
        role,
      }}
    >
      {/* {state.session === "not-session" && (
        <Redirect url={"/auth/login"} time={3000} />
      )}
      {state.session === "not-session" && pathname.includes("auth") && (
        <React.Fragment>{props.children}</React.Fragment>
      )} */}
      {/* {state.session != "not-logued" && state.session != "not-session" && (
        <React.Fragment>{props.children}</React.Fragment>
      )} */}
      <React.Fragment>{props.children}</React.Fragment>
    </AuthContext.Provider>
  );
};
