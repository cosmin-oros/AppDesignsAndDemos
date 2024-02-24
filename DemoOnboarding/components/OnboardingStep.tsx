import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LottieAnimations } from '../constants';
import LottieView from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';

interface OnboardingStepProps {
  backgroundColor: string;
  title: string;
  description: string;
  onNext: () => void;
  onSkip: () => void;
  lottieAnimation: keyof typeof LottieAnimations;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  backgroundColor,
  title,
  description,
  onNext,
  onSkip,
  lottieAnimation
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
  lottie: {
    width: '100%',
    height: '40%',
  }
});

export default OnboardingStep;