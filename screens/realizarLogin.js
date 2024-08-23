// screens/RealizarLogin.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Alert } from 'react-native';
import { auth, signInWithEmailAndPassword } from '../firebaseConfig'; 

const { width, height } = Dimensions.get('window'); 

const RealizarLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const tentarLogar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('PaginaPrincipal');
      })
      .catch((error) => {
        // Manipula erros de autenticação
        let errorMessage = 'Erro ao fazer login';
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'Email inválido.';
            break;
          case 'auth/user-not-found':
            errorMessage = 'Usuário não encontrado.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Senha incorreta.';
            break;
          default:
            errorMessage = 'Erro desconhecido.';
        }
        Alert.alert('Erro', errorMessage);
      });
  };

  return (
    <ImageBackground
      source={require('../images/mar.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={tentarLogar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
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

export default RealizarLogin;