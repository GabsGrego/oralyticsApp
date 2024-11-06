import React from 'react';
import { VStack, Text} from 'native-base';
import { View, TextInput, Button} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePerfil = () => {
    navigation.navigate('Perfil'); // direciona para a tela principal
  };

  const handleHistorico = () => {
    navigation.navigate('Historico'); // direciona para a tela de cadastro
  };

  const handleAvaliacao = () => {
    console.log('Avaliação realizada com sucesso.'); // a implementar
  };

  return (
    <VStack space={4} padding={5}>
      <Text fontSize="2xl" bold>Bem-vindo, Thais</Text>
      <Text>Como está sua escovação?</Text>
      <Button title="Histórico Dental" onPress={handleHistorico} />
      <Button title="Avalição Inteligente" onPress={handleAvaliacao} />
    </VStack>
  );
};

export default HomeScreen;
