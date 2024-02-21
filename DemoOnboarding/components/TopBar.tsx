import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

interface TopBarProps {
  onBackPress: () => void;
  title: string;
  iconName: string;
  onIconPress: () => void;
  color: string;
}

const TopBar: React.FC<TopBarProps> = ({ onBackPress, title, iconName, onIconPress, color }) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor: color }]}>
        <TouchableOpacity onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={onIconPress}>
          <AntDesign name="bars" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TopBar;