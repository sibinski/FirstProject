import * as React from 'react';
import { Text, ScrollView } from 'react-native';

export default function Welcome() {
  return (
    <ScrollView indicatorStyle={"white"} style={{ flex: 0.7, backgroundColor: '#F4CE14', borderRadius: 100, marginLeft: 250, marginRight: 250, paddingHorizontal: 40,
        paddingVertical: 40, }}>
      <Text
        style={{
          marginTop: 100,
          fontStyle: 'italic', 
          fontSize: 18,
          color: 'black',
          textAlign: 'justify',
        }}>
Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us! 
Thank you for choosing Little Lemon for your dining experience.
      </Text>
      </ScrollView>
  );
}
