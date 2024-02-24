import React from 'react';
import { View, StyleSheet } from 'react-native';

const StepIndicator: React.FC<{ steps: number; currentStep: number }> = ({
  steps,
  currentStep,
}) => {
  return (
    <View style={styles.stepIndicator}>
      {[...Array(steps)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === currentStep ? styles.highlightedStep : null,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepIndicator: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  step: {
    width: 24,
    height: 6,
    backgroundColor: 'lightgray',
    marginHorizontal: 6,
    borderRadius: 2,
  },
  highlightedStep: {
    backgroundColor: 'white', 
  },
});

export default StepIndicator;