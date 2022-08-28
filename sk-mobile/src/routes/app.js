import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from 'views/App.Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UseTranslate} from 'contexts/TranslateContext';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProfileView from 'views/App.Profile';
import {UseAuthContext} from 'contexts/AuthContext';
import useMount from 'hooks/useMount';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{animation: 'fade', header: null}}>
      <Stack.Screen
        name="home_view"
        component={HomeView}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{animation: 'fade', header: null}}>
      <Stack.Screen
        name="profile_view"
        component={ProfileView}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};

const AppRouter = () => {
  const {translate} = UseTranslate();
  const {profile} = UseAuthContext();
  useMount(() => {
    console.log('Role active: ', profile.data.roleId);
  });
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name={'home-menu'}
        component={HomeNavigator}
        options={{
          tabBarLabel: translate('Home-menu'),
          tabBarIcon: ({focused, color, size}) => {
            return (
              <IonIcons name="ios-home-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name={'awards-menu'}
        component={HomeNavigator}
        options={{
          tabBarLabel: translate('Awards-menu'),
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="award" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={'Blog-menu'}
        component={HomeNavigator}
        options={{
          tabBarLabel: translate('Blogs-menu'),
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="book" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={'profile-view'}
        component={ProfileNavigator}
        options={{
          tabBarLabel: translate('Profile-menu'),
          tabBarIcon: ({focused, color, size}) => {
            return <IonIcons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default AppRouter;
