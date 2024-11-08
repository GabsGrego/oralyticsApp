import React from 'react';
import { VStack, Text, Box } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const HistoricoScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <VStack>

      <Box bg="blue.600" padding={4} width={"100%"}>
        <Text fontSize="2xl" bold color="white">Histórico Dental</Text>
      </Box>

    <VStack space={4} padding={1}>
      <Box padding={2} borderBottomWidth={1} borderColor="gray.200" bg="#F59E8B" shadow={3} >
        <Text bold>03/10/2024 - 10:23</Text>
        <Text>Tratamento de canal - Dra. Leticia Lima</Text>
      </Box>
      <Box padding={2} borderBottomWidth={1} borderColor="gray.200" bg="#F59E8B" shadow={3} >
        <Text bold>15/09/2021 - 08:08</Text>
        <Text>Limpeza e raspagem - Dr. Erwin Covaliuc</Text>
      </Box>
    </VStack>
    </VStack>
  );
};

export default HistoricoScreen;
