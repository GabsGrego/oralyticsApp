import React, { useState } from 'react';
import { VStack, HStack, Input, Text, Button, Box, useToast } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const CadastroScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [numCard, setNumCard] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [beneficiario, setBeneficiario] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const toast = useToast();

  const handleCadastrado = async () => {
    if (!name || !email || !dataNasc || !numCard || !password || !confirmPassword) {
      return toast.show({
        title: "Erro de cadastro",
        description: "Por favor preencha todos os campos.",
      });
    }

    if (password !== confirmPassword) {
      return toast.show({
        title: "Erro de cadastro",
        description: "As senhas precisam ser iguais.",
      });
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, dataNasc, numCard, password}),
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar usuário');
      }

      toast.show({
        title: "Cadastro realizado!",
        description: "Usuário cadastrado com sucesso.",
      });

      navigation.navigate('Login'); // Direciona para a tela de login após o cadastro
    } catch (error) {
      toast.show({
        title: "Erro de Cadastro",
        description: "Não foi possível realizar o cadastro.",
      });
    }
  };

  return (
    <Box flex={1} bg="blue.600">
      <VStack space={4} padding={5} width="100%">
        <Text fontSize="3xl" bold color={'white'}>Oralytics</Text>
        <Input placeholder="Nome Completo" value={name} onChangeText={setName} />
        <Input placeholder="Email (exemplo@gmail.com)" value={email} onChangeText={setEmail} />
        <Input placeholder="Data de Nascimento (dd/mm/aaaa)" value={dataNasc} onChangeText={setDataNasc} />
        <Text bold color={'white'}>Beneficiário Odontoprev?</Text>
        <HStack space={2}>
          <Button flex={1} borderRadius={8} bg={beneficiario ? 'green.500' : 'white'} _text={{ bold:true, color: beneficiario ? 'white' : 'black' }}
            onPress={() => setBeneficiario(true)}>
            Sim
          </Button>
          <Button flex={1} borderRadius={8} bg={!beneficiario ? 'red.500' : 'white'} _text={{ bold:true, color: !beneficiario ? 'white' : 'black' }}
            onPress={() => setBeneficiario(false)}>
            Não
          </Button>
        </HStack>
        <Input placeholder="Nº da carteirinha" value={numCard} onChangeText={setNumCard} />
        <Input placeholder="Digite sua senha" value={password} onChangeText={setPassword} type="password" />
        <Input placeholder="Confirme sua senha" value={confirmPassword} onChangeText={setConfirmPassword} type="password" />
        <Button onPress={handleCadastrado} borderRadius={8} bg={'white'} _text={{ bold:true, color: "black" }}> Cadastrar</Button>
      </VStack>
    </Box>
  );
};

export default CadastroScreen;
