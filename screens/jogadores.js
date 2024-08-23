import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig'; // Verifique se o caminho está correto
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

const windowWidth = Dimensions.get('window').width;

const JogadoresListar = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation(); // Hook para acessar a navegação

  // Obtendo referência à coleção "real-madrid"
  const db = getFirestore(app);
  const teamCollectionRef = collection(db, 'real-madrid');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await getDocs(teamCollectionRef);
        setPlayers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      } finally {
        setLoading(false);
      }
    };

    getPlayers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4b0082" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.details}>Camisa: {item.camisa}</Text>
            <Text style={styles.details}>Altura: {item.altura}m</Text>
            <Text style={styles.details}>Nascimento: {item.nascimento?.toDate().toLocaleDateString()}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingTop: 70, // Ajusta o padding superior para que o conteúdo não sobreponha o botão
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    width: windowWidth * 0.9,
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Ajusta a posição do botão para que não fique em cima do conteúdo
    left: 20,
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    zIndex: 1, // Garante que o botão fique acima do conteúdo
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default JogadoresListar;
