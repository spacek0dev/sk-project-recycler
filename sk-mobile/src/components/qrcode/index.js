import React from 'react';
import {Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const SkQrCode = ({userId, scale = 1}) => {
  const dimension = Dimensions.get('window').width / scale;
  return <QRCode value={userId} size={dimension} />;
};
export default SkQrCode;
