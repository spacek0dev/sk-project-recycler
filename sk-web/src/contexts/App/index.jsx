import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
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
  const refreshUsersData = async (page = 1, pageSize = 10) => {
    let { data: allUsers } = await getAllUsers(page, pageSize);
    dispatch({ type: appTypes.users, payload: allUsers });
  };
  const refreshOrganizations = async (page = 1, pageSize = 10) => {
    let { data: allOrganizations } = await getOrganizations();
    dispatch({ type: appTypes.organizations, payload: allOrganizations });
  };
  const sortList = async (type, data) => {
    console.log("data: ", data);
    switch (type) {
      case appTypes.users:
        dispatch({ type: type, payload: { rows: data, count: state.users.count } });
        break;
      case appTypes.organizations:
        dispatch({ type: type, payload: { rows: data, count: state.organizations.count } });
        break;

      default:
        break;
    }
  };
  const updateValue = async (type) => {
    switch (type) {
      case appTypes.users:
        let { data: allUsers } = await getAllUsers();
        dispatch({ type: type, payload: allUsers });
        break;
      case appTypes.organizations:
        let { data: allOrganizations } = await getOrganizations();
        dispatch({ type: type, payload: allOrganizations });
        break;

      default:
        break;
    }
  };
  const getAllUsers = async (page = 1, pageSize = 10) => await get(`${API.allUsers}?page=${page}&pageSize=${pageSize}`);
  const getRoles = async () => await get(`${API.roles}`);
  const getCountrys = async () => await get(`${API.countrys}`);
  const getAreas = async (cid) => await get(`${API.areas(cid)}`);
  const getOrganizations = async (page = 1, pageSize = 10) => await get(`${API.organizations}?page=${page}&pageSize=${pageSize}`);
  const initFirstData = async () => {
    if (sessionToken.length < 20) return;
    let { data: allUsers } = await getAllUsers();
    let { data: roles } = await getRoles();
    let { data: countrys } = await getCountrys();
    let { data: areas } = await getAreas(countrys[0]._id);
    let { data: organizations } = await getOrganizations();
    let _data_ = {
      users: allUsers,
      roles: roles,
      countrys: countrys,
      areas: areas,
      organizations: organizations,
    };
    dispatch({ type: appTypes.all, payload: _data_ });
  };
  useMount(() => {
    initFirstData();
  });
  useEffect(() => {
    if (sessionToken.length > 20) {
      initFirstData();
    }
  }, [sessionToken]);
  return <AppContext.Provider value={{ sortList, data: state, updateValue, refreshUsersData, refreshOrganizations, initFirstData }}>{props.children}</AppContext.Provider>;
};

export { AppContext, AppProvider, useAppContext };
