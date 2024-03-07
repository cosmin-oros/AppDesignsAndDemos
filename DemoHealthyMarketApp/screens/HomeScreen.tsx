import React from "react";
import { SafeAreaView, View, StyleSheet, Platform, StatusBar } from "react-native";
import TopBar from "../components/TopBar";
import { Colors } from "../constants";
import SelectionSection from "../components/SelectionSection";

const HomeScreen: React.FC = () => {
  const handleLeftIconPress = () => {

  };

  const handleRightIconPress = () => {

  };

  return (
    <SafeAreaView style={[styles.content, { backgroundColor: Colors.whiteBackground }]}>
      <TopBar onLeftIconPress={handleLeftIconPress} onRightIconPress={handleRightIconPress} color={Colors.whiteBackground}/>
      <SelectionSection title="Hi, name" subtitle="What's today's taste?"/>
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