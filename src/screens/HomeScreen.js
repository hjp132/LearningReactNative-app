import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo" />

      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Screen" />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter" />
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
