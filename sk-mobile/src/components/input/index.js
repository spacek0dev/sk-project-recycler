import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
const SkInput = ({
  isSecure = false,
  label = '',
  placeholder = '',
  onChangeText,
  error = '',
  value = '',
}) => {
  const [text, setText] = useState(value);
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const handlerText = text => {
    onChangeText(text);
    setText(text);
  };
  useEffect(() => {
    setText(value);
  }, [value]);
  return (
    <View style={styles({error}).container}>
      <Text style={styles({error}).label}>{label}</Text>
      <TextInput
        value={text}
        clearButtonMode
        onBlur={() => {
          setIsBlur(true);
          setIsFocus(false);
        }}
        onFocus={() => {
          setIsBlur(false);
          setIsFocus(true);
        }}
        onChangeText={text => handlerText(text)}
        placeholderTextColor={error ? 'red' : '#555'}
        secureTextEntry={isSecure}
        placeholder={placeholder}
      />
    </View>
  );
};
export default SkInput;
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
  });
