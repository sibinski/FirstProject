import * as React from 'react';
import { View, Text } from 'react-native';

export default function Welcome() {
  return (
    <View style={{ flex: 0.6, backgroundColor: '#F4CE14',}}>
      <Text
        style={{
          fontStyle: 'italic', 
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails<br></br> in a lively but casual environment.<br></br> We would love to hear more about your experience with us!
      </Text>
    </View>
  );
}
