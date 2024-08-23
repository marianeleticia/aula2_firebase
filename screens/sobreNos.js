// screens/SobreNos.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SobreNos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Sobre Nós</Text>
        <Text style={styles.paragraph}>
          Bem-vindo ao <Text style={styles.bold}>EducaApp</Text>!
        </Text>
        <Text style={styles.paragraph}>
          No <Text style={styles.bold}>EducaApp</Text>, nosso objetivo é transformar a maneira como você estuda e aprende. Somos uma equipe apaixonada por educação e tecnologia, comprometida em oferecer uma plataforma intuitiva e eficaz para apoiar sua jornada acadêmica.
        </Text>
        <Text style={styles.subheader}>O Que Oferecemos</Text>
        <Text style={styles.paragraph}>
          • <Text style={styles.bold}>Conteúdo Diversificado:</Text> Acesso a uma vasta gama de materiais de estudo, incluindo artigos, vídeos e quizzes interativos.
        </Text>
        <Text style={styles.paragraph}>
          • <Text style={styles.bold}>Ferramentas de Aprendizado:</Text> Recursos avançados para organizar seus estudos, fazer anotações e acompanhar seu progresso.
        </Text>
        <Text style={styles.paragraph}>
          • <Text style={styles.bold}>Comunidade de Aprendizado:</Text> Conecte-se com outros estudantes, participe de fóruns de discussão e troque experiências.
        </Text>
        <Text style={styles.subheader}>Nossa Missão</Text>
        <Text style={styles.paragraph}>
          Acreditamos que a educação é a chave para um futuro melhor. Nosso propósito é tornar o aprendizado acessível e agradável para todos, fornecendo as ferramentas e recursos necessários para alcançar o sucesso acadêmico.
        </Text>
        <Text style={styles.subheader}>Entre em Contato</Text>
        <Text style={styles.paragraph}>
          Se você tiver dúvidas, sugestões ou precisar de suporte, não hesite em nos contatar. Estamos aqui para ajudar!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#4b0082',
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 2,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  subheader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#666',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default SobreNos;
