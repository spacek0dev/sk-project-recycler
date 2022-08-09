import React, {useState} from 'react';
import SkContainer from 'components/container';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SkCard from 'components/card';
import SkStyles, {SkDivider} from 'styles';
import SkInput from 'components/input';
import SkButton from 'components/button';
import {danger, primary} from 'constants/color';
import {validateObject} from 'utils';
import {UseUiContext} from 'contexts/UIContext';
import {UseAuthContext} from 'contexts/AuthContext';
import {UseTranslate} from 'contexts/TranslateContext';
import SkSteps from 'components/steps';
import {UseAppContext} from 'contexts/AppContext';
import SkSelect from 'components/select';

const RegisterView = props => {
  const {showAlert, closeAlert, hideLoader, showLoader} = UseUiContext();
  const {data} = UseAppContext();
  const {translate} = UseTranslate();
  const {register} = UseAuthContext();
  const [areasId, setAreaId] = useState('');
  const [organizationId, setOrganizationId] = useState('');
  const [errors, setErrors] = useState([]);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    dni: '',
    address: '',
    addressReference: '',
    terms_conditions: true,
  });
  const clearForm = () => {
    setForm({
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      dni: '',
      address: '',
      addressReference: '',
      terms_conditions: true,
    });
    setAreaId('');
    setOrganizationId('');
  };
  const handlerRegister = async () => {
    try {
      const roleId = data.roles.rows.find(
        v => v.name === 'Cliente' || v.name === 'Client',
      );
      const _data = {
        person: form,
        roleId: roleId._id || '',
        areasId: areasId,
        organizationId: 'null',
      };
      const {valid, keys} = validateObject(_data);
      setErrors(keys);
      _data.organizationId = organizationId ? organizationId : null;
      if (!valid && keys.length > 0) {
        showAlert(translate('complete_all_fields'));
        return;
      }
      showLoader();
      await register(_data);
      setTimeout(() => {
        hideLoader();
      }, 1400);
      setTimeout(() => {
        showAlert(translate('user_registered'), [
          {
            text: translate('accept'),
            onPress: () => {
              closeAlert();
              props.navigation.goBack();
            },
          },
        ]);
      }, 2000);
    } catch (error) {
      hideLoader();
    }
  };
  const handlerStep = step => {
    switch (step) {
      case 0:
        setStep(0);
        break;
      case 1:
        let firstStep = {
          email: form.email,
          username: form.username,
          password: form.password,
        };
        let firstValidation = validateObject(firstStep);
        setErrors(firstValidation.keys);
        if (!firstValidation.valid) {
          showAlert(translate('complete_all_fields'));
          return;
        }
        setStep(1);
        break;
      case 2:
        let secondStep = {
          firstStep: form.firstname,
          lastname: form.lastname,
          dni: form.dni,
        };
        let secondValidation = validateObject(secondStep);
        setErrors(secondValidation.keys);
        if (!secondValidation.valid) {
          showAlert(translate('complete_all_fields'));
          return;
        }
        setStep(2);
        break;
      case 3:
        let thirdStep = {
          areasId: areasId,
          phone: form.phone,
          address: form.address,
          addressReference: form.addressReference,
        };
        let thirdValidation = validateObject(thirdStep);
        setErrors(thirdValidation.keys);
        if (!thirdValidation.valid) {
          showAlert(translate('complete_all_fields'));
          return;
        }
        setStep(4);
        break;
      default:
        clearForm();
        setStep(0);
        break;
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
          {translate('register_description')}
        </Text>
        <SkSteps step={step} />
        {step === 0 && (
          <View>
            <SkInput
              error={errors.find(v => v === 'email') ? true : false}
              onChangeText={text => {
                setForm({...form, email: text});
              }}
              value={form.email}
              label={translate('email')}
              placeholder={translate('enter_email')}
            />
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
            <View style={styles.options}>
              <SkButton
                background={'#fff'}
                width={'100%'}
                textColor={primary}
                text={translate('next')}
                onPress={() => {
                  handlerStep(1);
                }}
              />
            </View>
          </View>
        )}
        {step === 1 && (
          <View>
            <SkInput
              error={errors.find(v => v === 'firstname') ? true : false}
              onChangeText={text => {
                setForm({...form, firstname: text});
              }}
              value={form.firstname}
              label={translate('firstname')}
              placeholder={translate('enter_firstname')}
            />
            <SkInput
              error={errors.find(v => v === 'lastname') ? true : false}
              onChangeText={text => {
                setForm({...form, lastname: text});
              }}
              value={form.lastname}
              label={translate('lastname')}
              placeholder={translate('enter_lastname')}
            />
            <SkInput
              error={errors.find(v => v === 'dni') ? true : false}
              onChangeText={text => {
                setForm({...form, dni: text});
              }}
              value={form.dni}
              label={translate('dni')}
              placeholder={translate('enter_dni')}
            />
            <View style={styles.options}>
              <SkButton
                background={'#fff'}
                width={'45%'}
                textColor={danger}
                text={translate('back')}
                onPress={() => {
                  setStep(0);
                }}
              />
              <View
                style={
                  SkDivider({widthDivider: 1, heightDivider: '30%'})
                    .dividerVertical
                }
              />
              <SkButton
                background={'#fff'}
                width={'45%'}
                textColor={primary}
                text={translate('next')}
                onPress={() => {
                  handlerStep(2);
                }}
              />
            </View>
          </View>
        )}
        {step === 2 && (
          <View>
            <SkSelect
              error={errors.find(v => v === 'areasId') ? true : false}
              value={areasId}
              label={data.areas.name}
              data={data.areas.areas}
              onChange={item => {
                setAreaId(item);
              }}
            />
            <SkInput
              error={errors.find(v => v === 'phone') ? true : false}
              onChangeText={text => {
                setForm({...form, phone: text});
              }}
              value={form.phone}
              label={translate('phone')}
              placeholder={translate('enter_phone')}
            />
            <SkInput
              error={errors.find(v => v === 'address') ? true : false}
              onChangeText={text => {
                setForm({...form, address: text});
              }}
              value={form.address}
              label={translate('address')}
              placeholder={translate('enter_address')}
            />
            <SkInput
              error={errors.find(v => v === 'addressReference') ? true : false}
              onChangeText={text => {
                setForm({...form, addressReference: text});
              }}
              value={form.addressReference}
              label={translate('reference')}
              placeholder={translate('enter_addressReference')}
            />
            <View style={styles.options}>
              <SkButton
                background={'#fff'}
                width={'45%'}
                textColor={danger}
                text={translate('back')}
                onPress={() => {
                  setStep(1);
                }}
              />
              <View
                style={
                  SkDivider({widthDivider: 1, heightDivider: '30%'})
                    .dividerVertical
                }
              />
              <SkButton
                background={'#fff'}
                width={'45%'}
                textColor={primary}
                text={translate('next')}
                onPress={() => {
                  handlerStep(3);
                }}
              />
            </View>
          </View>
        )}
        {step === 4 && (
          <>
            <Text style={{...SkStyles.paragraphCenter}}>
              {translate('register_text')(
                form.firstname,
                form.email,
                form.username,
              )}
            </Text>
            <View style={styles.options}>
              <SkButton
                width={'45%'}
                background={'#fff'}
                textColor={danger}
                text={translate('cancel')}
                onPress={() => {
                  handlerStep(-1);
                }}
              />
              <View
                style={
                  SkDivider({widthDivider: 1, heightDivider: '30%'})
                    .dividerVertical
                }
              />
              <SkButton
                paddingVertical={10}
                text={translate('register')}
                background={primary}
                marginVertical={24}
                width={'45%'}
                onPress={handlerRegister}
              />
            </View>
          </>
        )}
        <View style={styles.options}>
          <SkButton
            background={'#fff'}
            width={'30%'}
            textColor={primary}
            text={translate('login')}
            onPress={() => {
              props.navigation.goBack();
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
            onPress={() => {}}
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
            onPress={() => {}}
          />
        </View>
      </SkCard>
    </SkContainer>
  );
};
export default RegisterView;
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
