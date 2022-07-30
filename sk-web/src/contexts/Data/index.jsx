import { useEffect, useContext, createContext, useState } from "react";
import { server_url } from "src/constants/api";
import { UseAuth } from "src/contexts/Auth";
import { useAxios } from "src/contexts/Axios";
const DataContext = createContext();
const useDataContext = () => {
  return useContext(DataContext);
};
const DataProvider = (props) => {
  const [data, setData] = useState({});
  const { get, post } = useAxios();
  const { profile } = UseAuth();
  const refreshData = async (value) => {
    switch (value) {
      case "users":
      case "organizations":
        break;

      default:
        break;
    }
  };
  const initData = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        refreshData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider, useDataContext };
