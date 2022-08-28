import SkButton from 'components/button';
import SkCard from 'components/card';
import {primary, success} from 'constants/color';
import {UseTranslate} from 'contexts/TranslateContext';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SkStyles from 'styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SkModal = ({
  children,
  buttonText,
  title,
  height,
  type = 'default',
  close,
  buttonStyles = {},
  success,
}) => {
  const {translate} = UseTranslate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
  }, []);
  return (
    <>
      <Pressable
        onPress={() => {
          setVisible(true);
        }}
        style={{...buttonStyles, ...button.container}}>
        <Text>{buttonText}</Text>
        {type === 'qrcode' && (
          <Fontisto name={'qrcode'} color={'#fff'} size={20} />
        )}
        {type === 'language' && (
          <Fontisto name={'world-o'} color={'#1A73E8'} size={20} />
        )}
      </Pressable>
      <Modal visible={visible} transparent animationType="fade">
        <View style={modalStyles({height: height}).container}>
          <View style={modalStyles({height: height}).content}>
            <Text style={{...SkStyles.title, ...button.titleModal}}>
              {title}
            </Text>
            {children}
            <SkButton
              background={'#fff'}
              textColor={primary}
              text={translate('accept')}
              onPress={() => {
                setVisible(false);
                success();
              }}
            />
            <SafeAreaView />
          </View>
        </View>
      </Modal>
    </>
  );
};
export default SkModal;
const modalStyles = ({height = 450}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      display: 'flex',
      backgroundColor: '#000000AA',
    },
    content: {
      backgroundColor: '#fff',
      width: '90%',
      marginHorizontal: '5%',
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
      maxHeight: height ?? 450,
    },
  });

const button = StyleSheet.create({
  titleModal: {
    marginVertical: 20,
  },
  container: {
    alignSelf: 'center',
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 20,
    height: 20,
  },
});
