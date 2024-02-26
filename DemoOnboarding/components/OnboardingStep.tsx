import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { LottieAnimations } from '../constants';
import LottieView from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';
import StepIndicator from './StepIndicator';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useUserStore } from '../hooks/useUserStore';

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
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(''); 
  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { user, updateUserProfile } = useUserStore();

  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }
  }, [lottieRef.current]);

  const handleNextOrFinishPress = () => {
    onNext();
    updateUserProfile({
      name,
      age: parseInt(age),
      date: selectedDate,
      skills: [selectedSkill],
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: Date) => {
    setSelectedDate(date.toISOString().split('T')[0]); 
    hideDatePicker();
  };

  const renderStepInput = () => {
    switch (step) {
      case 0:
        return (
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        );
      case 1:
        return (
          <TextInput
            placeholder="Enter your age"
            value={age}
            onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))} 
            keyboardType="numeric"
            style={styles.input}
          />
        );
      case 2:
        return (
          <RNPickerSelect
            placeholder={{ label: 'Select a skill', value: null }}
            onValueChange={(value) => setSelectedSkill(value)}
            items={[
              { label: 'Skill 1', value: 'Skill 1' },
              { label: 'Skill 2', value: 'Skill 2' },
              // Add more skills as needed
            ]}
          />
        );
      case 3:
        return (
          <View>
            <TextInput
              placeholder="Select a date"
              value={selectedDate}
              onFocus={() => showDatePicker()}
              style={styles.input}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        );
      default:
        return null;
    }
  };

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
      <View style={styles.inputContainer}>
        {renderStepInput()}
      </View>
      <StepIndicator steps={4} currentStep={step} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: 'black'}]} onPress={handleNextOrFinishPress}>
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
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: '10%',
    paddingHorizontal: '5%',
  },
  input: {
    height: 50,
    fontSize: 16,
    color: 'gray',
  },
});

export default OnboardingStep;