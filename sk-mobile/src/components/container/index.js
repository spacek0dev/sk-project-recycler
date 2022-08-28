import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const SkContainer = ({children, onPress, containerStyle = {}, scroll}) => {
  return (
    <>
      {scroll ? (
        <ScrollView style={{...styles({}).container, ...containerStyle}}>
          {children}
        </ScrollView>
      ) : (
        <View style={{...styles({}).container, ...containerStyle}}>
          {children}
        </View>
      )}
    </>
  );
};
export default SkContainer;
const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#edf2f9',
      width: '100%',
      height: '100%',
      alignSelf: 'stretch',
    },
  });
