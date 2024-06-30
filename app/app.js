import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

//Import a local Component here:

import LittleLemonHeader from '../components/LittleLemonHeader';
import Welcome from '../components/Welcome';
import LittleLemonFooter from '../components/LittleLemonFooter';

export default function App() {

    return (
        <ScrollView style={styles.container}>
            <LittleLemonHeader />
            <Welcome />
            <LittleLemonFooter />
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: '#495E57',
    },
});

