import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface SelectionSectionProps {
  title: string;
  subtitle: string;
}

const SelectionSection: React.FC<SelectionSectionProps> = ({ title, subtitle }) => {
  const [firstIconSelected, setFirstIconSelected] = useState(true);
  const [secondIconSelected, setSecondIconSelected] = useState(false);

  const handleFirstIconPress = () => {
    setFirstIconSelected(true);
    setSecondIconSelected(false);
  };

  const handleSecondIconPress = () => {
    setFirstIconSelected(false);
    setSecondIconSelected(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtext}>{subtitle}</Text>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={handleFirstIconPress} style={firstIconSelected ? styles.selectedIcon : styles.icon}>
          <MaterialCommunityIcons name="fruit-grapes-outline" size={24} color={firstIconSelected ? 'black' : 'gray'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSecondIconPress} style={secondIconSelected ? styles.selectedIcon : styles.icon}>
          <FontAwesome5 name="carrot" size={24} color={secondIconSelected ? 'black' : 'gray'} />
        </TouchableOpacity>

        <FontAwesome5 name="search" size={24} color="black" />
      </View>

    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    
  },
  subtext: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  icon: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  selectedIcon: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'yellow',
  },
  searchIcon: {
    marginTop: 20,
  },
});

export default SelectionSection;