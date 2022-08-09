import React, {useState} from 'react';
import SkContainer from 'components/container';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SkCard from 'components/card';
import SkStyles, {SkDivider} from 'styles';
import SkInput from 'components/input';
import SkButton from 'components/button';
import {primary} from 'constants/color';
import {validateObject} from 'utils';
import {UseUiContext} from 'contexts/UIContext';
import {UseAuthContext} from 'contexts/AuthContext';
import {UseTranslate} from 'contexts/TranslateContext';

const LoginView = props => {
  const {showAlert, hideLoader, showLoader} = UseUiContext();
  const {translate} = UseTranslate();
  const {login} = UseAuthContext();
  const [form, setForm] = useState({username: '', password: ''});
  const [errors, setErrors] = useState([]);
  const handlerLogin = async () => {
    try {
      const _data = form;
      const {valid, keys} = validateObject(_data);
      setErrors(keys);
      if (!valid) {
        showAlert(translate('complete_all_fields'));
        return;
      }
      showLoader();
      await login(_data);
    } catch (error) {
      hideLoader();
    }
  };
  return (
    <SkContainer
      containerStyle={{...SkStyles.flexAllCenterColumn, ...styles.container}}>
      <SafeAreaView />
      <SkCard
        marginVertical={24}
        marginHorizontal={12}
        paddingVertical={12}
        paddingHorizontal={12}>
        <View style={{...SkStyles.logoImageContainer}}>
          <Image
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
            style={{...SkStyles.logoImage}}
          />
        </View>
        <Text style={{...SkStyles.paragraphCenter}}>
          {translate('welcome_description')}
        </Text>
        <View>
          <SkInput
            error={errors.find(v => v === 'username') ? true : false}
            onChangeText={text => {
              setForm({...form, username: text});
            }}
            value={form.username}
            label={translate('username')}
            placeholder={translate('enter_username')}
          />
          <SkInput
            error={errors.find(v => v === 'password') ? true : false}
            onChangeText={text => {
              setForm({...form, password: text});
            }}
            value={form.password}
            label={translate('password')}
            placeholder={translate('enter_password')}
            isSecure
          />
          <SkButton
            paddingVertical={10}
            text={translate('login')}
            background={primary}
            marginVertical={24}
            width={220}
            onPress={handlerLogin}
          />
        </View>
        <View style={styles.options}>
          <SkButton
            background={'#fff'}
            width={'30%'}
            textColor={primary}
            text={translate('register')}
            onPress={() => {
              props.navigation.navigate('register');
            }}
          />
          <View
            style={
              SkDivider({widthDivider: 1, heightDivider: '30%'}).dividerVertical
            }
          />
          <SkButton
            background={'#fff'}
            width={'30%'}
            textColor={primary}
            text={translate('help')}
            onPress={handlerLogin}
          />
          <View
            style={
              SkDivider({widthDivider: 1, heightDivider: '30%'}).dividerVertical
            }
          />
          <SkButton
            background={'#fff'}
            width={'30%'}
            textColor={primary}
            text={translate('language')}
            onPress={handlerLogin}
          />
        </View>
      </SkCard>
    </SkContainer>
  );
};
export default LoginView;
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
