import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SignInScreen extends Component {
    
  render() {
    return (
      <View style = {StyleSheet.container}>
        <Text> SignInScreen </Text>
      </View>
    );
  }
}
export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});