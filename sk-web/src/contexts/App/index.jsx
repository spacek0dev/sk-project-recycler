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
import useMount from "src/hooks/useMount";
import { UseAuth } from "../Auth";

const AppContext = createContext(null);
const useAppContext = () => {
  return useContext(AppContext);
};
const AppProvider = (props) => {
  const { sessionToken } = UseAuth();
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
  const getAllUsers = async () => await get(`${API.allUsers}`);
  const getRoles = async () => await get(`${API.roles}`);
  const getCountrys = async () => await get(`${API.countrys}`);
  const getAreas = async (cid) => await get(`${API.areas(cid)}`);
  const initFirstData = async () => {
    if (sessionToken.length < 20) return;
    let { data: allUsers } = await getAllUsers();
    let { data: roles } = await getRoles();
    let { data: countrys } = await getCountrys();
    let { data: areas } = await getAreas(countrys[0]._id);
    let _data_ = {
      users: allUsers,
      roles: roles,
      countrys: countrys,
      areas: areas,
    };
    dispatch({ type: appTypes.all, payload: _data_ });
  };
  useMount(() => {
    initFirstData();
  });
  return (
    <AppContext.Provider value={{ data: state, updateValue }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
