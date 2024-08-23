import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RealizarLogin from '../auth-firebase-mariane-aula1/screens/realizarLogin'; // Atualize o caminho e nome
import PaginaPrincipal from '../auth-firebase-mariane-aula1/screens/paginaPrincipal'; // Atualize o caminho e nome
import SobreNos from '../auth-firebase-mariane-aula1/screens/sobreNos'; // Atualize o caminho e nome
import EditarPerfil from '../auth-firebase-mariane-aula1/screens/editarPerfil'; // Atualize o caminho e nome
import JogadoresListar from '../auth-firebase-mariane-aula1/screens/jogadores'; // Atualize o caminho e nome

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RealizarLogin"
        screenOptions={{ headerShown: false }} // Configura para não exibir o cabeçalho em nenhuma tela
      >
        <Stack.Screen name="RealizarLogin" component={RealizarLogin} />
        <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="JogadoresListar" component={JogadoresListar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
