import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation })=> {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"/>

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
