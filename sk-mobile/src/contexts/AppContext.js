import {API} from 'constants/api';
import useMount from 'hooks/useMount';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {UseAuthContext} from './AuthContext';
import {useAxios} from './AxiosContext';

const AppContext = createContext(null);
const UseAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = props => {
  const {profile, token} = UseAuthContext();
  const {get, post} = useAxios();
  const [data, setData] = useState({
    roles: null,
    areas: null,
    countrys: null,
  });
  const updateValue = () => {};
  const initDataWithoutSession = async () => {
    try {
      let _roles = await get(`${API.roles}`, false);
      let _countrys = await get(`${API.countrys}`, false);
      let _areas = await get(`${API.areas(_countrys.data.rows[0]._id)}`, false);
      console.log('_areas: ', _areas.data[_areas.data.length - 1]);
      setData({
        ...data,
        roles: _roles.data,
        countrys: _countrys.data,
        areas: _areas.data[_areas.data.length - 1],
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useMount(() => {
    initDataWithoutSession();
  });
  return (
    <AppContext.Provider value={{data, initDataWithoutSession, updateValue}}>
      <React.Fragment>{props.children}</React.Fragment>
    </AppContext.Provider>
  );
};

export {AppProvider, UseAppContext, AppContext};
