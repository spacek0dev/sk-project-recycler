import SkButton from 'components/button';
import {danger, primary, success} from 'constants/color';
import {UseTranslate} from 'contexts/TranslateContext';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SkStyles, {SkDivider} from 'styles';

const SkSelect = ({
  data = [],
  onChange,
  error = '',
  label = '',
  value = '',
}) => {
  const {translate} = UseTranslate();
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setSelected(value);
  }, []);
  return (
    <>
      <Pressable
        onPress={() => {
          setVisible(true);
        }}
        style={styles({error}).container}>
        <Text style={styles({error}).label}>{translate(label)}</Text>
        <View style={styles({error}).textsContainer}>
          <Text style={styles({error}).textValue}>
            {selected
              ? translate(data.find(v => v._id === selected).name)
              : translate('select')}
          </Text>
          <View style={styles({error}).triangleDown} />
        </View>
      </Pressable>
      <Modal visible={visible} transparent animationType="slide">
        <View style={modalStyles.container}>
          <View style={modalStyles.content}>
            <Text style={SkStyles.title}>{label}</Text>
            <ScrollView>
              {data.map((role, index) => {
                return (
                  <Pressable
                    style={
                      checkBoxStyle({selected: selected === role._id}).item
                    }
                    onPress={() => {
                      setSelected(role._id);
                    }}
                    key={role._id}>
                    <View
                      style={
                        checkBoxStyle({selected: selected === role._id})
                          .checkbox
                      }
                    />
                    <Text
                      style={
                        checkBoxStyle({selected: selected === role._id}).text
                      }>
                      {role.name}
                    </Text>
                  </Pressable>
                );
              })}
              <View style={styles({error}).buttons}>
                <SkButton
                  width={'45%'}
                  align="center"
                  text={translate('cancel')}
                  background={'#fff'}
                  textColor={danger}
                  onPress={() => {
                    setSelected(null);
                    setVisible(false);
                    onChange('');
                  }}
                />
                <View
                  style={
                    SkDivider({widthDivider: 1, heightDivider: '25%'})
                      .dividerVertical
                  }
                />
                <SkButton
                  width={'45%'}
                  align="center"
                  text={translate('accept')}
                  background={'#fff'}
                  textColor={primary}
                  onPress={() => {
                    setVisible(false);
                    onChange(selected);
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SkSelect;

const styles = props =>
  StyleSheet.create({
    container: {
      backgroundColor: '#ffff',
      paddingVertical: 8,
      paddingHorizontal: 4,
      borderBottomWidth: 1,
      borderBottomColor: props.error ? 'red' : '#55555555',
      borderRadius: 4,
      margin: 6,
    },
    label: {
      color: props.error ? 'red' : '#555',
      marginVertical: 6,
    },
    textValue: {
      color: props.error ? 'red' : '#555',
    },
    textsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    triangleDown: {
      transform: [{rotate: '180deg'}],
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderBottomWidth: 10,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: props.error ? 'rgba(255,0,0,0.8)' : '#555555AA',
    },
  });

const modalStyles = StyleSheet.create({
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
    maxHeight: 450,
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
      color: selected ? success : '#555',
    },
  });
