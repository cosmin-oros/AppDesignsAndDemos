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

  const handleFinish = () => {
    // Handle logic when the "Finish" button is pressed
    setCurrentStep((prevStep) => prevStep + 1);
    // You can navigate to the next screen or perform any other action here
  };

  const renderOnboardingStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OnboardingStep
            backgroundColor="#8a2be2"
            title="What is your name?"
            description="Welcome to Step 1. Provide your name and age."
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      case 2:
        return (
          <OnboardingStep
            backgroundColor="#ffd700"
            title="When were you born?"
            description="This is Step 2. Add more information here."
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      default:
        return (
          <OnboardingStep
            backgroundColor="#e75480"
            title="What skills do you have?"
            description="This is Step 3. Add more information here."
            onNext={handleFinish}
            onSkip={handleSkip}
          />
        );
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