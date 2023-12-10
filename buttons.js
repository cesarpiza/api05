import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Button,
    Dimensions
} from 'react-native';
const { height } = Dimensions.get('window');

export default function Buttons({ pokemonInstance, fetchApi }) {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title='Pokemon'
                onPress={() => {
                    fetchApi({
                        // pokemonInstance é um novo objeto/nova instancia. Isso é bom porque caso o contrário teria declarar a 'url' base toda vez que fazer uma requisição. Além de poder configurar o header aqui também const pokemonInstance:
                        // axios.create({
                        // baseURL: 'https://pokeapi.co/api/v2/',
                        // headers: {...},
                        // })
                        instance: pokemonInstance,
                        method: 'GET',
                        url: 'pokemon',
                    })
                }
                }
            />
            <Button
                title='Ability'
                onPress={() => {
                    fetchApi({
                        // Criei um objeto para facilitar. Assim eu mando a instancia, o metodo e a url. Se for outro metodo, como por exemplo 'post', é só eu colocar aqui em baixo...
                        instance: pokemonInstance,
                        method: 'GET',
                        url: 'ability',
                    })
                }
                }
            />
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'darkorange',
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20,
    },
});