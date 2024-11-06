import React from 'react';
//import { Button} from 'react-native';
import { VStack, Input, Text, Button } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const CadastroScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCadastrado = () => {
    navigation.navigate('Login'); // direciona para a tela de login
  };

  return (
    <VStack space={4} padding={5}>
      <Text fontSize="2xl" bold>Cadastro</Text>
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Data de Nascimento" />
      <Text>Beneficiário Odontoprev?</Text>
      <Button> Sim </Button>
      <Button> Não </Button>
      <Button onPress={handleCadastrado}> Cadastrar</Button>
    </VStack>
  );
};

export default CadastroScreen;
