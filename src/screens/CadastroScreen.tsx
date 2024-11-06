import React from 'react';
//import { Button} from 'react-native';
import { VStack, HStack, Input, Text, Button, Box } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const CadastroScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCadastrado = () => {
    navigation.navigate('Login'); // direciona para a tela de login
  };

  return (
    <Box flex={1} bg="blue.600">
    <VStack space={4} padding={5} width="100%">
      <Text fontSize="3xl" bold color={'white'}>Oralytics</Text>
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Data de Nascimento" />
      <Text bold color={'white'}>Beneficiário Odontoprev?</Text>
      <HStack space={2}>
        <Button flex={1} borderRadius={8} bg={'white'} _text={{ bold:true, color: "black" }}>Sim</Button>
        <Button flex={1} borderRadius={8} bg={'white'} _text={{ bold:true, color: "black" }}>Não</Button>
      </HStack>
      <Input placeholder="Nº da carteirinha" />
      <Input placeholder="Digite sua senha" />
      <Input placeholder="Confirme sua senha" />
      <Button onPress={handleCadastrado} borderRadius={8} bg={'white'} _text={{ bold:true, color: "black" }}> Cadastrar</Button>
    </VStack>
    </Box>
  );
};

export default CadastroScreen;
