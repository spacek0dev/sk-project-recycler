import axios, {AxiosInstance} from 'axios';
import {server_url} from 'constants/api';
import React, {createContext, useContext, useEffect} from 'react';
import {UseAuthContext} from './AuthContext';

export const AxiosContext = createContext(null);
export const useAxios = () => {
  let context = useContext(AxiosContext);
  return {get: context.get, post: context.post};
};
export const AxiosProvider = props => {
  const authContext = UseAuthContext();

  const signedRequest = () => {
    const apiKey = authContext.token;
    return axios.create({
      baseURL: server_url,
      headers: apiKey.length >= 10 ? {Authorization: `Bearer ${apiKey}`} : {},
    });
  };
  const unsignedRequest = () => {
    const request = signedRequest();
    request.defaults.headers = {};

    return request;
  };

  const get = async (url, validate = true, config = {}) => {
    try {
      if (validate) {
        return (await signedRequest().get(url, config)).data;
      } else {
        return (await unsignedRequest().get(url, config)).data;
      }
    } catch (error) {
      throw error;
    }
  };
  const post = async (url, body, validate = true, config = {}) => {
    try {
      if (validate) {
        return (await signedRequest().post(url, body, config)).data;
      } else {
        return (await unsignedRequest().post(url, body, config)).data;
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <AxiosContext.Provider
      value={{
        get,
        post,
        http: signedRequest,
      }}>
      {authContext.token !== 'not-logued' && (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    </AxiosContext.Provider>
  );
};
