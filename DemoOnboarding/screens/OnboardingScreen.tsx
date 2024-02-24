import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import OnboardingStep from '../components/OnboardingStep';
import TopBar from '../components/TopBar';
import { LottieAnimations } from '../constants';

const OnboardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentColor, setCurrentColor] = useState('#8a2be2');
  const backgroundColors = ['#8a2be2', '#ffd700', '#8a2be2', '#e75480'];

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
            description=""
            onNext={handleNext}
            onSkip={handleSkip}
            lottieAnimation={LottieAnimations.name}
            step={0}
          />
        );
      case 2:
        return (
          <OnboardingStep
            backgroundColor={currentColor}
            title="What is your age?"
            description=""
            onNext={handleFinish}
            onSkip={handleSkip}
            lottieAnimation={LottieAnimations.age}
            step={1}
          />
        );
      case 3:
        return (
          <OnboardingStep
            backgroundColor={currentColor}
            title="What skills do you have?"
            description=""
            onNext={handleFinish}
            onSkip={handleSkip}
            lottieAnimation={LottieAnimations.skills}
            step={2}
          />
        );
      default:
        return (
          <OnboardingStep
            backgroundColor={currentColor}
            title="When were you born?"
            description=""
            onNext={handleFinish}
            onSkip={handleSkip}
            lottieAnimation={LottieAnimations.born}
            step={3}
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