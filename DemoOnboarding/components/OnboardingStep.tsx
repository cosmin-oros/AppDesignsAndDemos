import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface OnboardingStepProps {
  backgroundColor: string;
  title: string;
  description: string;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  backgroundColor,
  title,
  description,
  onNext,
  onSkip,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        {/* change to touchable oppacity to change how they look and switch Nex to Finish on final step */}
        <Button title="Skip" onPress={onSkip} />
        <Button title="Next" onPress={onNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default OnboardingStep;