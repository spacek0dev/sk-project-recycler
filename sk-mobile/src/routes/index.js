import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRouter from './auth';
import {UseAuthContext} from 'contexts/AuthContext';
import AppRouter from './app';

const Router = () => {
  const {token, profile} = UseAuthContext();
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      {token.length > 20 ? <AppRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};
export default Router;
