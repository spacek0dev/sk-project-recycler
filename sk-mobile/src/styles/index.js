import {primary} from 'constants/color';
import React from 'react';
import {StyleSheet} from 'react-native';
const SkStyles = StyleSheet.create({
  flexAllCenterColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexAllCenterRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 6,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'justify',
  },
  paragraphCenter: {
    fontSize: 14,
    fontWeight: '200',
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  logoImageContainer: {
    width: '100%',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  logoImage: {
    width: '100%',
    height: 100,
    alignSelf: 'stretch',
  },
  loaderBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffffEE',
  },
});
export const SkDivider = ({widthDivider, heightDivider, background}) =>
  StyleSheet.create({
    dividerVertical: {
      width: 1,
      backgroundColor: background ?? primary,
      height: heightDivider ? heightDivider : 1,
    },
    dividerHorizontal: {
      backgroundColor: background ?? primary,
      width: widthDivider ? widthDivider : 1,
      height: 1,
    },
  });
export default SkStyles;
