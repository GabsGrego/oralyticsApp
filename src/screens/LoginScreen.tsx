import React from 'react';
import { VStack, Input, Button, Text, Image, useNativeBase } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  return (
    <VStack space={4} padding={5} alignItems="center">
      <Image source={{ uri: '../components/img/jovens-loginScreen.jpg' }} alt="Logo" size="xl" />
      <Text fontSize="2xl" bold>Oralytics</Text>
      <Input placeholder="Email" />
      <Input placeholder="Senha" type="password" />
      <Button>Primeiro acesso?</Button>
      <Button>Acessar</Button>
    </VStack>
  );
};

export default LoginScreen;
