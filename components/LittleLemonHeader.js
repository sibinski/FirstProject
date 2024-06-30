import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-web';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>
                Welcome to
                <Text style={headerStyles.innerText}> Little Lemon </Text>  {''}
                </Text>
                </View>
    );
}

const headerStyles = StyleSheet.create({
    container:
    {
    flex: 1,
    backgroundColor: '#F4CE14',
    },
    headerText: {
        textAlign: 'center', 
        fontSize: 50,
        color: 'black',
    },
    innerText: {
        fontWeight: 'bold',
    },
});

