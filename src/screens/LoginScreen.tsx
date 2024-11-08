import React, { useState, useRef } from 'react';
import { View, TextInput, } from 'react-native';
import { VStack, Input, Text, Image, useNativeBase, HStack, Button, Box, AlertDialog, Icon} from 'native-base';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import AsyncStorage from '@react-native-community/async-storage';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import { color } from 'native-base/lib/typescript/theme/styled-system';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState<string | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false); // Estado para controlar o pop-up
  const cancelRef = useRef(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, // Envie o username
          password, // Envie a password
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const { token } = await response.json();
      await AsyncStorage.setItem('token', token); // Armazena o token no AsyncStorage
      setError(null); // Limpa qualquer erro
      navigation.navigate('Home'); // Navega para a tela de tarefas
    } catch (error) {
      setError('Erro de autenticação. Email ou senha incorretos.');
      setIsAlertOpen(true); // Exibe o pop-up em caso de erro
    }
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro'); // direciona para a tela de cadastro
  };


  return (
    <Box flex={1} bg="blue.600">
      <VStack space={4} alignItems="center" width="100%">
        <Image source={require('../components/img/jovens-loginScreen.jpg')} alt="img" size="100%" />
        <Text fontSize="3xl" bold color="white">Oralytics</Text>
        <Input width={"85%"} placeholder="Email" value={email} onChangeText={setEmail}/>
        <Input width={"85%"} placeholder="Senha" value={password} onChangeText={setPassword} type="password"/>
        <HStack space={2} padding={2}>
          <Button onPress={handleCadastro} borderRadius={8} bg="white" _text={{ bold: true, color: "black" }}>Primeiro Acesso?</Button>
          <Button onPress={handleLogin} borderRadius={8} bg="white" _text={{ bold: true, color: "black" }}>Acessar</Button>
        </HStack>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)}>
        <AlertDialog.Content bg="red.500" borderRadius="md">
          <AlertDialog.CloseButton color="white" />
            <AlertDialog.Header bg="red.400" borderTopRadius="md">
              <Text color="white" fontSize="lg" bold textAlign={"center"}>Falha no Login</Text>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text fontSize="md" textAlign={"center"}>
                {error}
              </Text>
            </AlertDialog.Body>
          </AlertDialog.Content>
        </AlertDialog>        
      </VStack>
      <Box position="absolute" bottom={0} width="100%" alignItems="center" bg="white" padding={2}>
        <HStack>
        <Text color="gray.600" fontSize="sm" mb={1}>Oferecimento: </Text>
        <Icon as={MaterialCommunityIcons} name="tooth-outline" size="md" color="#2610A1FF" />
        <Text color="blue.800" bold fontSize="sm" mb={1}>OdontoPrev </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default LoginScreen;
