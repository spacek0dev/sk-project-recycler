import {useNavigation} from '@react-navigation/native';
import SkModal from 'components/modal';
import {success} from 'constants/color';
import {UseTranslate} from 'contexts/TranslateContext';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SkStyles from 'styles';
const SkHeader = ({background = '#fff', title = '', back = false}) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const {lang, translate, setLang} = UseTranslate();
  useEffect(() => {
    setSelected(lang);
  }, []);
  return (
    <>
      <SafeAreaView style={{backgroundColor: background}} />
      <View style={styles.container}>
        <View style={styles.itemLeft}>
          {back && (
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={styles.itemLeftImage}
                resizeMode="contain"
                source={require('../../../assets/icons/back.png')}
              />
            </Pressable>
          )}
        </View>
        <View style={styles.itemCenter}>
          <Text>{title}</Text>
        </View>
        <View style={styles.itemRight}>
          <SkModal
            type={'language'}
            buttonText={''}
            title={translate('change_language')}
            success={() => {
              setLang(selected);
            }}
            height={'80%'}>
            <View style={SkStyles.flexAllCenterColumn}>
              <Pressable
                style={checkBoxStyle({selected: selected === 'en'}).item}
                onPress={() => {
                  setSelected('en');
                }}>
                <Ionicons
                  color={selected === 'en' ? success : '#999'}
                  name={
                    selected === 'en'
                      ? 'ios-checkbox-sharp'
                      : 'ios-checkbox-outline'
                  }
                  size={24}
                />
                <Text style={checkBoxStyle({selected: selected === 'en'}).text}>
                  {translate('english')}
                </Text>
              </Pressable>
              <Pressable
                style={checkBoxStyle({selected: selected === 'es'}).item}
                onPress={() => {
                  setSelected('es');
                }}>
                <Ionicons
                  color={selected === 'es' ? success : '#999'}
                  name={
                    selected === 'es'
                      ? 'ios-checkbox-sharp'
                      : 'ios-checkbox-outline'
                  }
                  size={24}
                />
                <Text style={checkBoxStyle({selected: selected === 'es'}).text}>
                  {translate('spanish')}
                </Text>
              </Pressable>
            </View>
          </SkModal>
        </View>
      </View>
    </>
  );
};
export default SkHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 4,
    borderBottomColor: '#999333DD',
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  itemLeft: {
    width: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCenter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRight: {
    width: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeftImage: {
    width: 30,
    height: 30,
  },
  itemRightImage: {
    width: 24,
    height: 24,
  },
});

const checkBoxStyle = ({selected}) =>
  StyleSheet.create({
    checkbox: {
      width: 25,
      height: 25,
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: selected ? success : '#555',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      backgroundColor: selected ? success : '#fff',
    },
    item: {
      marginVertical: 10,
      paddingHorizontal: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      flex: 1,
      color: selected ? success : '#999',
      marginLeft: 5,
    },
  });
