import * as React from 'react';
import { View, Text } from 'react-native';
export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.5, backgroundColor: '#F4CE14' }}>
            <Text style={{ textAlign: 'center', padding: 50, fontSize: 50, color: 'black' }} numberOfLines={3}>
                Welcome to <br></br>
                <Text style={{ fontWeight: 'bold' }}> The Little Lemon </Text>  {''}
                </Text>
                </View>
    );
}