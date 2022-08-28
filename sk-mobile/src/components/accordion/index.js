import {
  LayoutAnimation,
  Pressable,
  Text,
  View,
  Animated,
  UIManager,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SkCard from 'components/card';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const white = {backgroundColor: '#fff'};
const view = {marginTop: 12, backgroundColor: '#fff'};
const SkAccordion = ({title, children}) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={white}>
      <SkCard
        shadowColor={'#777'}
        marginHorizontal={4}
        marginVertical={12}
        paddingHorizontal={12}
        paddingVertical={6}>
        <Pressable
          style={container}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setOpen(prev => !prev);
          }}>
          <Text>{title}</Text>
          <IonIcons
            size={20}
            name={open ? 'chevron-down' : 'chevron-forward'}
          />
        </Pressable>
        {open && <View style={view}>{children}</View>}
      </SkCard>
    </View>
  );
};
export default SkAccordion;
