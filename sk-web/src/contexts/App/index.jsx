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
  const { profile, sessionToken } = UseAuth();
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
    switch (type) {
      case appTypes.users:
        dispatch({ type: type, payload: { rows: data, count: state.users.count } });
        break;
      case appTypes.organizations:
        dispatch({ type: type, payload: { rows: data, count: state.organizations.count } });
        break;
      case appTypes.partners:
        dispatch({ type: type, payload: { rows: data, count: state.partners.count } });
        break;
      case appTypes.roles:
        dispatch({ type: type, payload: { rows: data, count: state.roles.count } });
        break;
      case appTypes.countrys:
        dispatch({ type: type, payload: { rows: data, count: state.countrys.count } });
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
      case appTypes.users:
        let { data: roles } = await getRoles();
        dispatch({ type: type, payload: roles });
        break;
      case appTypes.organizations:
        let { data: allOrganizations } = await getOrganizations();
        dispatch({ type: type, payload: allOrganizations });
        break;
      case appTypes.partners:
        let { data: allPartners } = await getPartners();
        dispatch({ type: type, payload: allPartners });
        break;
      case appTypes.awardsCategory:
        let { data: allAwardsCategory } = await getAwardsCategory();
        dispatch({ type: type, payload: allAwardsCategory });
        break;
      case appTypes.countrys:
        let { data: allCountrys } = await getAwardsCategory();
        dispatch({ type: type, payload: allCountrys });
        break;

      default:
        break;
    }
  };
  const getRoles = async (page = 1, pageSize = 10) => await get(`${API.roles}?page=${page}&pageSize=${pageSize}`);
  const getCountrys = async (page = 1, pageSize = 10) => await get(`${API.countrys}?page=${page}&pageSize=${pageSize}`);
  const getAreas = async (cid) => await get(`${API.areas(cid)}`);
  const getAllUsers = async (page = 1, pageSize = 10) => await get(`${API.allUsers}?page=${page}&pageSize=${pageSize}&organizationId=${profile?.organizationId?._id || ""}`);
  const getPartners = async (page = 1, pageSize = 10) => await get(`${API.partners}?page=${page}&pageSize=${pageSize}&organizationId=${profile?.organizationId?._id || ""}`);
  const getOrganizations = async (page = 1, pageSize = 10) => await get(`${API.organizations}?page=${page}&pageSize=${pageSize}`);
  const getAwardsCategory = async (page = 1, pageSize = 10) => await get(`${API.awardsCategory}?page=${page}&pageSize=${pageSize}`);
  const initFirstData = async () => {
    if (sessionToken.length < 20) {
      let { data: roles } = await getRoles();
      let { data: areas } = await getAreas(countrys.rows[0]._id);
      let { data: countrys } = await getCountrys();
      let _data_ = {
        roles: roles,
        countrys: countrys,
        areas: areas,
      };
      dispatch({ type: appTypes.all, payload: _data_ });
      return;
    }
    let { data: allUsers } = await getAllUsers();
    let { data: awardsCategory } = await getAwardsCategory();
    let { data: countrys } = await getCountrys();
    let { data: roles } = await getRoles();
    let { data: areas } = await getAreas(countrys.rows[0]._id);
    let { data: organizations } = await getOrganizations();
    let { data: partners } = await getPartners();
    let _data_ = {
      users: allUsers,
      roles: roles,
      countrys: countrys,
      areas: areas,
      organizations: organizations,
      partners: partners,
      awardsCategory: awardsCategory,
    };
    dispatch({ type: appTypes.all, payload: _data_ });
  };
  useMount(() => {
    if (sessionToken.length > 20) {
      initFirstData();
    }
  });
  return <AppContext.Provider value={{ sortList, data: state, updateValue, refreshUsersData, refreshOrganizations, initFirstData }}>{props.children}</AppContext.Provider>;
};

export { AppContext, AppProvider, useAppContext };
