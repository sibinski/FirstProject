import * as React from 'react';
import { View, Text } from 'react-native';

//Import a local Component here:

import LittleLemonHeader from '../components/LittleLemonHeader';
import LittleLemonFooter from '../components/LittleLemonFooter';
export default function App() {

    return (
        <View style={{flex: 1, backgroundColor: '#495E57',}}>
            <LittleLemonHeader />
            <LittleLemonFooter />
        </View>
    );
}