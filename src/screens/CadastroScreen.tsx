import React from 'react';
import { VStack, Input, Button, Text } from 'native-base';

const CadastroScreen: React.FC = () => {
  return (
    <VStack space={4} padding={5}>
      <Text fontSize="2xl" bold>Cadastro</Text>
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Data de Nascimento" />
      <Text>Beneficiário Odontoprev?</Text>
      <Button>Sim</Button>
      <Button>Não</Button>
      <Button>Cadastrar</Button>
    </VStack>
  );
};

export default CadastroScreen;
