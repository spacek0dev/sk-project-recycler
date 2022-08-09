import {primary} from 'constants/color';
import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SkAlert = ({visible = false, title = '', message = '', buttons = []}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={{...styles({length: buttons.length}).container}}>
        <View style={{...styles({length: buttons.length}).subContainer}}>
          <Text style={{...styles({length: buttons.length}).title}}>
            {title}
          </Text>
          <View style={{...styles({length: buttons.length}).divider}} />
          <Text style={{...styles({length: buttons.length}).message}}>
            {message}
          </Text>
          <View style={{...styles({length: buttons.length}).divider}} />
          <View style={styles({length: buttons.length}).buttonsContainer}>
            {buttons.map((b, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    b.onPress();
                  }}
                  key={index}
                  style={{...styles({length: buttons.length}).button}}>
                  <Text style={styles({length: buttons.length}).buttonText}>
                    {b.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default SkAlert;

const styles = props =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#00000099',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
    subContainer: {
      shadowOffset: {width: 2, height: 2},
      shadowColor: '#fff',
      shadowOpacity: 0.6,
      elevation: 1,
      backgroundColor: '#FFFFFFEE',
      marginHorizontal: '10%',
      borderRadius: 12,
      paddingTop: 24,
    },
    title: {
      paddingHorizontal: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    message: {
      paddingHorizontal: 20,
      fontWeight: '300',
      textAlign: 'center',
    },
    divider: {
      marginVertical: 10,
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      width: props.length === 1 ? '100%' : '50%',
      height: 50,
      borderTopColor: '#ccc',
      borderTopWidth: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor: props.length > 1 ? '#ccc' : '#fff',
      borderRightWidth: props.length > 1 ? 1 : 0,
    },
    buttonText: {
      color: primary,
      fontWeight: '500',
      fontSize: 15,
    },
  });
