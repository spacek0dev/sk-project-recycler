import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useStorage = () => {
  const setStorage = async (key, value) => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  };
  const getStorage = async key => {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };
  const clearStorage = async () => {
    return await AsyncStorage.clear();
  };
  const removeStorage = async (keys = []) => {
    return await AsyncStorage.multiRemove(keys);
  };
  return {setStorage, getStorage, clearStorage, removeStorage};
};
export default useStorage;
