import axios from 'axios';
import {API, server_url} from 'constants/api';
import tokens from 'constants/vars';
import useMount from 'hooks/useMount';
import useStorage from 'hooks/useStorage';
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const AuthTypes = {
  all: 'ALL',
  session: 'SESSION',
  profile: 'PROFILE',
};

const initialState = {
  session: 'not-logued',
  profile: {},
};
const AuthReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AuthTypes.all:
      return {
        ...state,
        session: action.payload.session,
        profile: action.payload.profile,
      };
    case AuthTypes.session:
      return {...state, session: action.payload};
    case AuthTypes.profile:
      return {...state, profile: action.payload};
    default:
      return state;
  }
};
const AuthContext = createContext(null);
const UseAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = props => {
  const {getStorage, setStorage, clearStorage} = useStorage();
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const login = async data => {
    const {data: responseToken} = await axios.post(
      `${server_url}${API.login}`,
      data,
    );
    const {data: profileResponse} = await axios.get(
      `${server_url}${API.user}`,
      {headers: {Authorization: `Bearer ${responseToken.access_token}`}},
    );
    await setStorage(tokens.session, responseToken.access_token);
    await setStorage(tokens.profile, profileResponse);
    setTimeout(() => {
      dispatch({
        type: AuthTypes.all,
        payload: {
          session: responseToken.access_token,
          profile: profileResponse,
        },
      });
    }, 2000);
  };
  const register = async data => {
    const {data: response} = await axios.post(
      `${server_url}${API.register}`,
      data,
    );
    return response;
  };
  const existSession = async () => {
    try {
      let session = await getStorage(tokens.session);
      if (session) {
        await setStorage(tokens.session, session);
        const {data: profileResponse} = await axios.get(
          `${server_url}${API.user}`,
          {headers: {Authorization: `Bearer ${session}`}},
        );
        await setStorage(tokens.profile, profileResponse);
        dispatch({
          type: AuthTypes.all,
          payload: {
            session: session,
            profile: profileResponse,
          },
        });
      } else {
        dispatch({type: AuthTypes.session, payload: 'not-session'});
      }
    } catch (error) {}
  };
  const logout = async () => {
    await clearStorage();
    dispatch({type: AuthTypes.session, payload: 'not-session'});
  };
  useEffect(() => {
    existSession();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        token: state.session,
        profile: state.profile,
      }}>
      <React.Fragment>{props.children}</React.Fragment>
    </AuthContext.Provider>
  );
};

export {AuthProvider, UseAuthContext, AuthContext};
