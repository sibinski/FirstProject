import * as React from 'react';
import { View, Text } from 'react-native';

//Import a local Component here:

import LittleLemonHeader from '../components/LittleLemonHeader';
import Welcome from '../components/Welcome';
import LittleLemonFooter from '../components/LittleLemonFooter';
export default function App() {

    return (
        <View style={{flex: 1.0, backgroundColor: '#495E57',}}>
            <LittleLemonHeader />
            <Welcome />
            <LittleLemonFooter />
        </View>
        
    );
}