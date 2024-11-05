import React from 'react';
import { View, TextInput, Button} from 'react-native';
import { VStack, Input, Text, Image, useNativeBase } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    console.log('Login efetuado com sucesso');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro'); // direciona para a tela e cadastro
  };


  return (
    <VStack space={4} padding={5} alignItems="center">
      <Image source={{ uri: '../components/img/jovens-loginScreen.jpg' }} alt="Logo" size="xl" />
      <Text fontSize="2xl" bold>Oralytics</Text>
      <Input placeholder="Email" />
      <Input placeholder="Senha" type="password" />
      <Button title="Primeiro acesso?" onPress={handleCadastro} />
      <Button title="Acessar" onPress={handleLogin}/>
    </VStack>
  );
};

export default LoginScreen;
