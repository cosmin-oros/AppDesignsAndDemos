import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OnboardingStep from '../components/OnboardingStep';

const OnboardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSkip = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderOnboardingStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OnboardingStep
            backgroundColor="#3498db"
            title="Step 1"
            description="Welcome to Step 1. Provide your name and age."
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      case 2:
        return (
          <OnboardingStep
            backgroundColor="#2ecc71"
            title="Step 2"
            description="This is Step 2. Add more information here."
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      default:
        return <View style={styles.completedScreen}>
            <Text>Onboarding Completed!</Text>
        </View>;
    }
  };

  return (
    <View style={styles.content}>
      {renderOnboardingStep()}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  completedScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;