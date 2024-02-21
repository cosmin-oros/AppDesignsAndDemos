import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import OnboardingStep from '../components/OnboardingStep';
import TopBar from '../components/TopBar';

const OnboardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentColor, setCurrentColor] = useState('#8a2be2');
  const backgroundColors = ['#8a2be2', '#ffd700', '#e75480'];

  const handleNext = () => {
    if (currentStep < backgroundColors.length) {
      setCurrentColor(backgroundColors[currentStep]);
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Handle logic when all steps are completed
    }
  };

  const handleSkip = () => {
    if (currentStep < backgroundColors.length) {
      setCurrentColor(backgroundColors[currentStep]);
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Handle logic when all steps are completed
    }
  };

  const handleFinish = () => {
    // Handle logic when the "Finish" button is pressed
    if (currentStep < backgroundColors.length) {
      setCurrentColor(backgroundColors[currentStep]);
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Handle logic when all steps are completed
    }
  };

  const handleBackPress = () => {
    // Handle back button press
  };

  const handleIconPress = () => {
    // Handle icon press
  };

  const renderOnboardingStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OnboardingStep
            backgroundColor={currentColor}
            title="What is your name?"
            description="Welcome to Step 1. Provide your name and age."
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      case 2:
        return (
          <OnboardingStep
            backgroundColor={currentColor}
            title="When were you born?"
            description="This is Step 2. Add more information here."
            onNext={handleNext}
            onSkip={handleSkip}
          />
        );
      default:
        return (
          <OnboardingStep
            backgroundColor={currentColor}
            title="What skills do you have?"
            description="This is Step 3. Add more information here."
            onNext={handleFinish}
            onSkip={handleSkip}
          />
        );
    }
  };

  const renderTopBar = () => {
    return (
      <TopBar
        onBackPress={handleBackPress}
        title="Sign Up"
        iconName="your-icon-name"
        onIconPress={handleIconPress}
        color={currentColor}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.content, { backgroundColor: currentColor }]}>
      {renderTopBar()}
      {renderOnboardingStep()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  completedScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;