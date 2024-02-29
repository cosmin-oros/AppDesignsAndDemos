import React from "react";
import { SafeAreaView, View, StyleSheet, Platform, StatusBar } from "react-native";
import TopBar from "../components/TopBar";
import { Colors } from "../constants";

const HomeScreen: React.FC = () => {
  const handleLeftIconPress = () => {

  };

  const handleRightIconPress = () => {

  };

  return (
    <SafeAreaView style={[styles.content, { backgroundColor: Colors.orangeBackground }]}>
      <TopBar onLeftIconPress={handleLeftIconPress} onRightIconPress={handleRightIconPress} color={Colors.orangeBackground}/>
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


export default HomeScreen;