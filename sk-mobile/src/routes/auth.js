import LoginView from 'views/Auth.Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RegisterView from 'views/Auth.Register';
const Stack = createNativeStackNavigator();
const AuthRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{animation: 'fade', header: null}}>
      <Stack.Screen
        name="login"
        component={LoginView}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="register"
        component={RegisterView}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="forgotPassword"
        component={LoginView}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};
export default AuthRouter;
