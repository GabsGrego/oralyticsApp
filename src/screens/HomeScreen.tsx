import React, {useState, useEffect} from 'react';
import { VStack, Box, Text, HStack, Button, IconButton, Center, ScrollView, Pressable, Image } from 'native-base';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import AsyncStorage from '@react-native-community/async-storage';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  //--------------------------------------------------------------------------------------------- Em processo de Implementação
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obtém o token armazenado no AsyncStorage
        const token = await AsyncStorage.getItem('token');

        // Verifica se o token existe
        if (!token) {
          console.error("Token não encontrado");
          return;
        }

        // Realiza a requisição para obter os dados do usuário
        const response = await fetch('http://localhost:3000/api/users/:id', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserName(userData.name); // Define o nome do usuário no estado
        } else {
          console.error("Erro ao buscar dados do usuário:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData(); // Chama a função para buscar os dados do usuário
  }, []);
  
// ------------------------------------------------------------------------------------------------------------------------

  const handlePerfil = () => {
    navigation.navigate('Perfil'); // direciona para a tela principal
  };

  const handleHistorico = () => {
    navigation.navigate('Historico'); // direciona para a tela de cadastro
  };

  const handleAvaliacao = () => {
    console.log('Avaliação realizada com sucesso.'); // a implementar
  };

  const [manhaSelecionado, setManhaSelecionado] = useState(false);
  const [tardeSelecionado, setTardeSelecionado] = useState(false);
  const [noiteSelecionado, setNoiteSelecionado] = useState(false);


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <VStack flex={1} bg="white">

      <Box bg="blue.600" padding={4} width="100%" alignItems="center">
        <HStack justifyContent="space-between" width="100%">
          <VStack >
            <Text color="white" fontSize="lg" bold>Bem vindo,</Text>
            <Text color="white" fontSize="2xl" bold>Ana Júlia</Text>
          </VStack>
          <HStack >
            <IconButton
              icon={<MaterialIcons name="notifications" size={30} color="white" />}
              onPress={() => console.log("Notificações")}
            />
            <IconButton
              icon={<FontAwesome name="user" size={30} color="white" />}
              onPress={handlePerfil}
            />
          </HStack>
        </HStack>
      </Box>

      <Box bg="gray.300" padding={3} width="100%" height={"30px"} alignItems="center" justifyContent={"Center"}>
        <HStack>
        <Text fontSize="md" bold color={'blue.800'}>Lembre-se: </Text>
        <Text fontSize="md" bold>Use sempre o fio dental.</Text>
        </HStack>
      </Box>

      <VStack space={4} padding={3} >
        <Text fontSize="md" bold color={'blue.700'}>Como está sua escovação?</Text>
        <HStack space={6} justifyContent="center">
        <Button
          onPress={() => setManhaSelecionado(!manhaSelecionado)}
          bg={manhaSelecionado ? 'blue.500' : 'gray.200'} borderWidth={1} borderColor={'gray.500'}
          _text={{ color: manhaSelecionado ? 'white' : 'black' }}
          width="25%" borderRadius="15" padding={2}>
          Manhã
        </Button>

        <Button
          onPress={() => setTardeSelecionado(!tardeSelecionado)}
          bg={tardeSelecionado ? 'blue.500' : 'gray.200'} borderWidth={1} borderColor={'gray.500'}
          _text={{ color: tardeSelecionado ? 'white' : 'black' }}
          width="25%" borderRadius="15" padding={2}>
          Tarde
        </Button>

        <Button
          onPress={() => setNoiteSelecionado(!noiteSelecionado)}
          bg={noiteSelecionado ? 'blue.500' : 'gray.200'} borderWidth={1} borderColor={'gray.500'}
          _text={{ color: noiteSelecionado ? 'white' : 'black' }}
          width="25%" borderRadius="15" padding={2}>
          Noite
        </Button>
        </HStack>

        <HStack>
        <Text fontSize="md" bold color={'blue.700'}>Sequência de Escovação Diária: </Text>
        <Text fontSize="md" bold >2</Text>
        </HStack>
        <Box width="100%" height="100px" bg="gray.300" alignItems="center" justifyContent="center">
          <Image source={require('../components/img/grafico.png')} alt="grafico" h={"90px"} w={"500px"} />
        </Box>

        <Text fontSize="md" bold color={'blue.700'}>Serviços</Text>
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
