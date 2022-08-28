import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

const SkCard = ({
  marginVertical,
  marginHorizontal,
  paddingVertical,
  paddingHorizontal,
  background,
  children,
  onPress,
  shadowColor = '#000',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        styles({
          marginVertical,
          marginHorizontal,
          paddingVertical,
          shadowColor,
          paddingHorizontal,
          background,
        }).container
      }>
      {children}
    </Pressable>
  );
};
export default SkCard;
const styles = props =>
  StyleSheet.create({
    container: {
      backgroundColor: props.background ? props.background : '#fff',
      paddingVertical: props.paddingVertical ? props.paddingVertical : 0,
      paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 0,
      marginVertical: props.marginVertical ? props.marginVertical : 0,
      marginHorizontal: props.marginHorizontal ? props.marginHorizontal : 0,
      borderRadius: 8,
      shadowColor: props.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignSelf: 'stretch',
    },
  });
