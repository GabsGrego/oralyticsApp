import React from 'react';
import { VStack, Text, Avatar, Button, ScrollView, HStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const PerfilScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleHistorico = () => {
    navigation.navigate('Historico'); // direciona para a tela de Historico
  }

  const handleAvaliacao = () => {
    navigation.navigate('Avaliacao'); // direciona para a tela de Avaliacao
  }

  const handleGuia = () => {
    navigation.navigate('Guia'); // direciona para a tela Guia
  }

  const handleFaq = () => {
    navigation.navigate('Faq'); // direciona para a tela Faq
  }

  const handleSobre = () => {
    navigation.navigate('Sobre'); // direciona para a tela Sobre
  }

  const handleSair = () => {
    navigation.navigate('Login'); // direciona para a tela de login
  }
  
  return (
    <ScrollView>
    
    <VStack space={4} padding={2} alignItems="center" bg="blue.600">

      <Text fontSize={'3xl'} bold color={'white'}> Oralytics </Text>
      <HStack padding={1} space={2} bg={'white'} alignItems={"center"} maxWidth={"100%"} borderRadius={3}>
        <Avatar size="xl" borderWidth={"2"} borderColor={'blue.400'} source={require('../components/img/fotoPerfil.jpg')} />
        <VStack flex={1} maxWidth={"70%"}>
          <Text fontSize="md" bold >Gabriel de Souza Grego</Text>
          <Text fontSize="sm" bold>Plano: Bem Estar</Text>
          <HStack>
            <Icon as={MaterialIcons} name="credit-card" size="md" color="#F59E8B" />
            <Text> 0267513890 </Text>
          </HStack>
          
        </VStack>
      </HStack>
    </VStack>

      <VStack padding={'0.5'} space={0.5}>
      <Button w={'100%'}>Atualização de dados</Button>
      <Button onPress={handleHistorico} w={'100%'}>Historico Dental</Button>
      <Button onPress={handleAvaliacao} w={'100%'}>Avaliação Inteligente</Button>
      <Button onPress={handleGuia} w={'100%'}>Guia de escovação</Button>
      <Button onPress={handleFaq} w={'100%'}>FAQ - Perguntas e Respostas</Button>
      <Button onPress={handleSobre} w={'100%'}>Sobre o Aplicativo</Button>
      <Button onPress={handleSair} w={'100%'}>Sair</Button>
    </VStack>
    </ScrollView>
  );
};

export default PerfilScreen;
