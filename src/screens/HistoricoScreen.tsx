import React from 'react';
import { VStack, Text, Box } from 'native-base';

const HistoricoScreen: React.FC = () => {
  return (
    <VStack space={4} padding={5}>
      <Text fontSize="2xl" bold>Histórico Dental</Text>
      <Box padding={2} borderBottomWidth={1} borderColor="gray.200">
        <Text bold>03/10/2024</Text>
        <Text>Tratamento de canal - Dra. Leticia Lima</Text>
      </Box>
      <Box padding={2} borderBottomWidth={1} borderColor="gray.200">
        <Text bold>15/09/2024</Text>
        <Text>Limpeza e raspagem - Dr. Erwin Covaliuce</Text>
      </Box>
    </VStack>
  );
};

export default HistoricoScreen;
