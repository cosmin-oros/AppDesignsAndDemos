import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LottieAnimations } from '../constants';
import LottieView from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';
import StepIndicator from './StepIndicator';

interface OnboardingStepProps {
  backgroundColor: string;
  title: string;
  description: string;
  onNext: () => void;
  onSkip: () => void;
  lottieAnimation: keyof typeof LottieAnimations;
  step: number;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  backgroundColor,
  title,
  description,
  onNext,
  onSkip,
  lottieAnimation,
  step,
}) => {
  const lottieRef = useRef<AnimatedLottieView|null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }
  }, [lottieRef.current]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <LottieView
        ref={lottieRef}
        speed={1}
        source={lottieAnimation}
        autoPlay={true}
        loop={true}
        style={styles.lottie} 
      />
      <StepIndicator steps={4} currentStep={step} />
      {/* ! PUT HERE INPUT BOX BASED ON THE STEP */}
      <View style={styles.buttonsContainer}>
        {/* change to touchable oppacity to change how they look and switch Nex to Finish on final step */}
        {/* option to go back */}
        {/* store the data somewhere */}
        <TouchableOpacity style={styles.buttonContainer} onPress={onSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'black'}]} onPress={onNext}>
          <Text style={styles.buttonText}>{step === 3 ? 'Finish' : 'Next'}</Text>
        </TouchableOpacity>
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
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    lineHeight: 48, 
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    width: '100%',
    paddingBottom: 30,
  },
  lottie: {
    width: '100%',
    height: '40%',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderRadius: 30, 
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingStep;