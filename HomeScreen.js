import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome to Owner Review</Text>
             <Button title='Give Review' onPress={() => navigation.navigate('GiveReview')} />
             <Button title='See Review' onPress={() => navigation.navigate('SeeReview')} />
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
