import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';

export default function Item({ pokemonData }) {

    return (
        <SafeAreaView style={styles.container}>
            {pokemonData.map((item, index) => {
                return (
                    <Text key={String(index)}>
                        {item.name}
                    </Text>
                )
            })}
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {},
});