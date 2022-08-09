import {View, Pressable, Text} from 'react-native';
import React from 'react';
import {UseAuthContext} from 'contexts/AuthContext';
import {UseUiContext} from 'contexts/UIContext';
import useMount from 'hooks/useMount';
const HomeView = props => {
  const {token, logout} = UseAuthContext();
  const {hideLoader} = UseUiContext();
  useMount(() => {
    hideLoader();
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={() => {
          logout();
        }}>
        <Text>{'Hola mundo'}</Text>
      </Pressable>
    </View>
  );
};

export default HomeView;
