import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from 'views/App.Home';
const Stack = createNativeStackNavigator();
const AppRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{animation: 'fade', header: null}}>
      <Stack.Screen
        name="home"
        component={HomeView}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};
export default AppRouter;
