import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  View,
} from 'react-native';
import pokemonInstance from './axiosInstance';
import useAxios from './useAxios';
import Item from './item';
import Loading from './loading';
import Error from './error';
import Buttons from './buttons';

export default function App() {
  // Na desestruturação de um array não importa o nome que eu coloque; somente a ordem. Já em objetos importa o nome (tem que ser o mesmo).
  const [pokemonData, loading, error, fetchApi] = useAxios();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Buttons pokemonInstance={pokemonInstance} fetchApi={fetchApi} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {loading ? (
          <Loading />
        ) : (
          error ? (
            <Error error={error} />
          ) : (
            <Item pokemonData={pokemonData} />
          )
        )}
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});