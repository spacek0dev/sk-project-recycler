import React, {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {StyleSheet, View} from 'react-native';
const SkSteps = ({step}) => {
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };

  return (
    <View style={{...styles.container}}>
      <StepIndicator
        customStyles={customStyles}
        stepCount={4}
        currentPosition={step}
        labels={[]}
      />
    </View>
  );
};
export default SkSteps;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 24,
  },
});
