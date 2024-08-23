import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaginaPrincipal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JogadoresListar')}
      >
        <Text style={styles.buttonText}>Ver Jogadores</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b0082',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PaginaPrincipal;
