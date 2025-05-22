import React, { useState, useRef } from 'react';
import { VStack, Input, Text, Image, HStack, Button, Box, AlertDialog, Icon} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState<string | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false); // Estado para controlar o pop-up
  const [isLoading, setIsLoading] = useState(false); // Adicionando estado de carregamento
  const cancelRef = useRef(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    // Validação básica
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      setIsAlertOpen(true);
      return;
    }

    setIsLoading(true); // Inicia o carregamento

    try {
      console.log('Tentando login com:', { email }); // Log para debug

      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      console.log('Status da resposta:', response.status); // Log para debug

      const responseData = await response.json();
      console.log('Dados da resposta:', responseData); // Log para debug

      if (!response.ok) {
        throw new Error(responseData.error || 'Erro ao fazer login');
      }

      // Verifica se o token existe na resposta
      if (!responseData.token) {
        throw new Error('Token não recebido do servidor');
      }

      // Armazena o token no AsyncStorage
      await AsyncStorage.setItem('token', responseData.token);
      
      // Se disponível, armazena também o nome do usuário
      if (responseData.user && responseData.user.name) {
        await AsyncStorage.setItem('userName', responseData.user.name);
      }
      
      setError(null); // Limpa qualquer erro
      setIsLoading(false); // Finaliza o carregamento
      
      // Navega para a tela principal
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro durante o login:', error); // Log para debug
      
      setIsLoading(false); // Finaliza o carregamento
      setError('Erro de autenticação. Email ou senha incorretos.');
      setIsAlertOpen(true);
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
