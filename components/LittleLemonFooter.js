import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <ScrollView style={footerStyles.container}>
      <Text
        style={footerStyles.footerText}>
        All rights reserved by Little Lemon, 2024
      </Text>
    </ScrollView>
  )
};

const footerStyles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 30,
        backgroundColor: '#EE9972',
        marginTop: 325,
    },
    footerText:
    {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
});
