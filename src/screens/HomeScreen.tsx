import React from 'react';
import { VStack, Box, Text, HStack, Button, Divider, IconButton, Center, ScrollView, Pressable } from 'native-base';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePerfil = () => {
    navigation.navigate('Perfil'); // direciona para a tela principal
  };

  const handleHistorico = () => {
    navigation.navigate('Historico'); // direciona para a tela de cadastro
  };

  const handleAvaliacao = () => {
    console.log('Avaliação realizada com sucesso.'); // a implementar
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <VStack flex={1} bg="white">

      <Box bg="blue.600" padding={4} width="100%" alignItems="center">
        <HStack justifyContent="space-between" width="100%">
          <VStack>
            <Text color="white" fontSize="lg" bold>Bem vindo,</Text>
            <Text color="white" fontSize="lg" bold>Ana Julia</Text>
          </VStack>
          <HStack space={3}>
            <IconButton
              icon={<MaterialIcons name="notifications" size={24} color="white" />}
              onPress={() => console.log("Notificações")}
            />
            <IconButton
              icon={<FontAwesome name="user-circle" size={24} color="white" />}
              onPress={handlePerfil}
            />
          </HStack>
        </HStack>
      </Box>

      <Box bg="gray.300" padding={4} width="100%" alignItems="center">
        <Text fontSize="md">Lembre-se: Use sempre o fio dental.</Text>
      </Box>

      <VStack space={4} padding={3} >
        <Text fontSize="md" bold>Como está sua escovação?</Text>
        <HStack space={6} justifyContent="center">
          <Button size="sm" variant="outline" colorScheme="gray">Manhã</Button>
          <Button size="sm" variant="outline" colorScheme="gray">Tarde</Button>
          <Button size="sm" variant="outline" colorScheme="gray">Noite</Button>
        </HStack>

        <Text fontSize="md" bold>Sequência de Escovação Diária: 2</Text>
        <Box width="100%" height="150px" bg="gray.200" alignItems="center" justifyContent="center">
          <Text>Gráfico de Escovação</Text>
        </Box>

        <Text fontSize="md" bold>Serviços</Text>
        <HStack space={4} justifyContent="center">
          <Pressable onPress={handleHistorico} alignItems="center" width="40%">
            <Center bg="#F59E8B" borderRadius={10} padding={4} width="100%">
              <FontAwesome name="file-text" size={40} color="black" />
              <Text bold fontSize="md" textAlign="center">Histórico Dental</Text>
            </Center>
          </Pressable>
          <Box alignItems="center" width="40%">
            <Center bg="#F59E8B" borderRadius={10} padding={4} width="100%">
              <FontAwesome name="camera" size={40} color="black" />
              <Text bold fontSize="md" textAlign="center">Avaliação Inteligente</Text>
            </Center>
          </Box>
        </HStack>
      </VStack>
    </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
