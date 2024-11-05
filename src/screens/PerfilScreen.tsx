import React from 'react';
import { VStack, Text, Avatar, Button } from 'native-base';

const PerfilScreen: React.FC = () => {
  return (
    <VStack space={4} padding={5} alignItems="center">
      <Avatar size="2xl" source={{ uri: 'https://example.com/profile.png' }} />
      <Text fontSize="xl" bold>Thais Araujo Nascimento</Text>
      <Button>Atualização de dados</Button>
      <Button>Alterar Senha</Button>
    </VStack>
  );
};

export default PerfilScreen;
