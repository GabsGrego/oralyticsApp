import React from 'react';
import { VStack, Text, Button } from 'native-base';

const HomeScreen: React.FC = () => {
  return (
    <VStack space={4} padding={5}>
      <Text fontSize="2xl" bold>Bem-vindo, Thais</Text>
      <Text>Como está sua escovação?</Text>
      <Button>Histórico Dental</Button>
      <Button>Avaliação Inteligente</Button>
    </VStack>
  );
};

export default HomeScreen;
