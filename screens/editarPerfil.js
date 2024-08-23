// screens/EditarPerfil.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditarPerfil = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const salvar = () => {
    // Adicione a lógica para salvar as alterações
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Editar Perfil</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4b204b',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default EditarPerfil;
