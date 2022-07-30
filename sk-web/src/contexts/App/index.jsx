import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { appReducer, initialState, appTypes } from "./reducer";
import { API, server_url } from "src/constants/api";
import { useAxios } from "src/contexts/Axios";

const AppContext = createContext(null);
const useAppContext = () => {
  return useContext(AppContext);
};
const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { get, post } = useAxios();
  const updateValue = async (type) => {
    switch (type) {
      case appTypes.organizations:
        let organization = await getOrganization();
        dispatch({ type: type, payload: organization });
        break;

      default:
        break;
    }
  };
  const initFirstData = async () => {
    // let roles = await getRoles();
    // let _data_ = {
    //     roles: roles
    // }
    // dispatch({ type: appTypes.all, payload: _data_ });
  };
  useEffect(() => {
    initFirstData();
  }, []);
  return (
    <AppContext.Provider value={{ data: state, updateValue }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
