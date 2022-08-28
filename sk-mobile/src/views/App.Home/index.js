import {View, Pressable, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {UseAuthContext} from 'contexts/AuthContext';
import {UseUiContext} from 'contexts/UIContext';
import useMount from 'hooks/useMount';
import SkQrCode from 'components/qrcode';
import SkContainer from 'components/container';
import SkHeader from 'components/header';
import SkModal from 'components/modal';
import {UseTranslate} from 'contexts/TranslateContext';
import SkStyles, {SkPaddingHorizontal} from 'styles';
import SkCard from 'components/card';
const HomeView = props => {
  const {translate} = UseTranslate();
  const {profile} = UseAuthContext();
  const {hideLoader} = UseUiContext();
  useMount(() => {
    hideLoader();
  });
  return (
    <SkContainer>
      <SkHeader back={false} title={translate('welcome')} />
      <SkCard marginHorizontal={12}>
        <View
          style={{
            ...SkStyles.flexAllSpaceBetweenRow,
            ...SkPaddingHorizontal(12)._,
          }}>
          <Text>{translate('see_qrcode')}</Text>
          <SkModal
            type={'qrcode'}
            buttonStyles={buttonStyle}
            buttonText={''}
            title={'My Qr Code'}
            success={() => {}}
            height={'80%'}>
            <View style={SkStyles.flexAllCenterColumn}>
              <SkQrCode userId={profile.data._id} scale={1.5} />
              <Text style={SkStyles.paragraphCenter}>{profile.data._id}</Text>
            </View>
          </SkModal>
        </View>
      </SkCard>
    </SkContainer>
  );
};

export default HomeView;

const buttonStyle = {
  padding: 12,
  backgroundColor: '#1A73E8',
  borderRadius: 100,
};
