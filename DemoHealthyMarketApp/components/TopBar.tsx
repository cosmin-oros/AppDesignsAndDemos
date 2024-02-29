import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface TopBarProps {
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  color: string;
}

const TopBar: React.FC<TopBarProps> = ({ onLeftIconPress, onRightIconPress, color }) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, { backgroundColor: color }]}>
        <TouchableOpacity onPress={onLeftIconPress}>
          <MaterialIcons name="menu-open" size={36} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onRightIconPress}>
          <FontAwesome6 name="basket-shopping" size={32} color={"black"} />
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