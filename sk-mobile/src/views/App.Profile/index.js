import {View, Text} from 'react-native';
import React from 'react';
import SkContainer from 'components/container';
import SkHeader from 'components/header';
import {UseTranslate} from 'contexts/TranslateContext';
import {UseAuthContext} from 'contexts/AuthContext';
import {UseUiContext} from 'contexts/UIContext';
import SkCard from 'components/card';
import SkButton from 'components/button';
import {danger, warning} from 'constants/color';
import SkStyles from 'styles';

const ProfileView = () => {
  const {translate} = UseTranslate();
  const {profile, logout} = UseAuthContext();
  const {showLoader} = UseUiContext();
  return (
    <SkContainer>
      <SkHeader back={false} title={translate('profile')} />

      <SkContainer scroll>
        <SkCard
          marginHorizontal={12}
          marginVertical={6}
          paddingHorizontal={12}
          paddingVertical={12}>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.roleId?.name || '--'}
          </Text>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.personId?.username || '--'}
          </Text>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.personId?.email || '--'}
          </Text>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.personId?.firstname || '--'}
          </Text>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.personId?.lastname || '--'}
          </Text>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.personId?.phone || '--'}
          </Text>
          <Text style={SkStyles.paragraphCenter}>
            {profile.data?.personId?.address || '--'}
            {profile.data?.personId?.addressReference || '--'}
          </Text>
        </SkCard>

        <SkCard marginHorizontal={12} marginVertical={6}>
          <SkButton
            paddingVertical={0}
            text={translate('editprofile')}
            background={'#fff'}
            textColor={warning}
            onPress={() => {}}
          />
        </SkCard>
        <SkCard marginHorizontal={12} marginVertical={6}>
          <SkButton
            paddingVertical={0}
            text={translate('logout')}
            background={'#fff'}
            textColor={danger}
            onPress={() => {
              showLoader();
              setTimeout(() => {
                logout();
              }, 1500);
            }}
          />
        </SkCard>
      </SkContainer>
    </SkContainer>
  );
};

export default ProfileView;
