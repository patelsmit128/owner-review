import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SeeReviewScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome to See review page Review</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
