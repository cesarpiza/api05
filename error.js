import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

export default function Error({ error }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{
                    position: 'absolute'
                }}
            >
                {error}
            </Text>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});