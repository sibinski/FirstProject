import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View indicatorStyle={mainPagestyles.indicatorStyle} style={mainPagestyles.container}>
      <Text
        style={mainPagestyles.mainText}>
Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us! 
Thank you for choosing Little Lemon for your dining experience.
      </Text>
      </View>
  );
}

const mainPagestyles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#EDEFEE',
        borderRadius: 350,
        marginTop: 150,
        marginLeft: 250, 
        marginRight: 250, 
        paddingVertical: 40, 
        paddingHorizontal: 40,
    },
    indicatorStyle: {
        indicatorStyle: 'white'
    },
    mainText: {
        marginTop: 10,
          fontStyle: 'italic', 
          fontSize: 18,
          color: 'black',
          textAlign: 'justify',
    },
});
