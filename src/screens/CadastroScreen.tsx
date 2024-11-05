import React from 'react';
import { Button} from 'react-native';
import { VStack, Input, Text } from 'native-base';
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
      <Button title="Sim"/>
      <Button title="Não"/>
      <Button title="Cadastrar" onPress={handleCadastrado}/>
    </VStack>
  );
};

export default CadastroScreen;
