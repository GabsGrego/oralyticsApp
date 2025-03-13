import React from "react";
import { VStack, Text, Box, ScrollView, View } from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

const HistoricoScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1 }}>
        <Box bg="blue.600" padding={4} width={"100%"}>
          <Text fontSize="2xl" bold color="white">
            Histórico Dental
          </Text>
        </Box>

        <View style={{ flex: 1, overflow: 'scroll' }}>
        <VStack space={4} padding={1}>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>03/10/2024 - 10:23</Text>
            <Text>Tratamento de canal - Dra. Leticia Lima</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>28/09/2024 - 14:30</Text>
            <Text>Restauração Dentária - Dr. Marco Antonio Silva</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>15/08/2024 - 09:15</Text>
            <Text>Avaliação Ortodôntica - Dra. Patricia Santos</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>02/07/2024 - 11:45</Text>
            <Text>Limpeza e Profilaxia - Dr. Carlos Eduardo</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>18/05/2024 - 16:00</Text>
            <Text>Extração do Siso - Dr. Roberto Mendes</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>25/03/2024 - 08:30</Text>
            <Text>Clareamento Dental - Dra. Ana Paula Costa</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>15/09/2021 - 08:08</Text>
            <Text>Limpeza e raspagem - Dr. Erwin Covaliuc</Text>
          </Box>
          <Box
            padding={2}
            borderBottomWidth={1}
            borderColor="gray.200"
            bg="#F59E8B"
            shadow={3}
          >
            <Text bold>03/10/2024 - 10:23</Text>
            <Text>Tratamento de canal - Dra. Leticia Lima</Text>
          </Box>
        </VStack>
      </View>
    </View>
  );
};

export default HistoricoScreen;
