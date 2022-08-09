import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const SkButton = ({
  text = '',
  onPress,
  background,
  width = 200,
  align,
  marginHorizontal,
  marginVertical,
  containerStyle = {},
  textStyle = {},
  textColor,
  paddingVertical,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles({
          paddingVertical,
          align,
          background,
          width,
          marginHorizontal,
          marginVertical,
        }).container,
        ...containerStyle,
      }}>
      <Text style={{...textStyle, ...styles({textColor}).text}}>{text}</Text>
    </Pressable>
  );
};

export default SkButton;

const styles = ({
  background,
  align,
  width,
  marginHorizontal,
  marginVertical,
  textColor,
  paddingVertical,
}) =>
  StyleSheet.create({
    container: {
      marginVertical: marginVertical ?? 12,
      marginHorizontal: marginHorizontal ?? 0,
      backgroundColor: background ?? '#2563eb',
      alignSelf: align ?? 'center',
      paddingVertical: paddingVertical ?? 12,
      borderRadius: 4,
      width: width ?? 150,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      display: 'flex',
    },
    text: {
      color: textColor ?? '#fff',
    },
  });
