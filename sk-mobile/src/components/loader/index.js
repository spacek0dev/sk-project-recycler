import React from 'react';
import Lottie from 'lottie-react-native';
import {Modal, Text, View} from 'react-native';
import SkStyles from 'styles';

const SkLoader = ({visible = false}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{...SkStyles.flexAllCenterRow, ...SkStyles.loaderBackground}}>
        <Lottie autoPlay loop source={require('../../../assets/loader.json')} />
      </View>
    </Modal>
  );
};

export default SkLoader;
