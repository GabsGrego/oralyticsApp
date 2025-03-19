import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, HStack, Text, Pressable, Icon, Button, Divider, Collapse } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

interface FaqItem {
    question: string;
    answer: string;
}

const FaqScreen: React.FC = () => {
const navigation = useNavigation<NavigationProp<RootStackParamList>>();
const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const handleVoltar = () => {
    navigation.goBack();
};

const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
};

const faqItems: FaqItem[] = [
    {
        question: "Como faço para registrar minha escovação diária?",
        answer: "Na tela inicial do aplicativo, você encontrará opções para registrar suas escovações nos períodos da manhã, tarde e noite. Basta selecionar o período correspondente e confirmar a escovação realizada."
    },
    {
        question: "Como acessar meu histórico dental?",
        answer: "Você pode acessar seu histórico dental completo clicando no botão 'Histórico' na tela inicial. Lá você encontrará todos os procedimentos realizados, organizados por data."
    },
    {
        question: "Como atualizar meus dados pessoais?",
        answer: "Acesse a tela de Perfil e selecione a opção 'Atualização de dados'. Você poderá editar suas informações pessoais e salvar as alterações."
    },
    {
        question: "Como visualizar minha carteirinha digital?",
        answer: "Na tela de Perfil, selecione a opção 'Carteirinha'. Sua carteirinha digital será exibida com todas as informações do seu plano odontológico."
    },
    {
        question: "Esqueci minha senha, como recuperá-la?",
        answer: "Na tela de login, clique em 'Esqueci minha senha'. Você receberá instruções para redefinir sua senha no e-mail cadastrado."
    },
    {
        question: "Como funciona o guia de escovação?",
        answer: "O guia de escovação oferece instruções passo a passo sobre a técnica correta de escovação, uso do fio dental e outros cuidados bucais. Acesse-o através da opção 'Guia de escovação' no menu de Perfil."
    },
    {
        question: "Posso usar o aplicativo sem conexão com a internet?",
        answer: "Algumas funcionalidades básicas estão disponíveis offline, como o registro de escovação. No entanto, para sincronizar seus dados e acessar seu histórico completo, é necessária conexão com a internet."
    },
    {
        question: "Como entrar em contato com o suporte?",
        answer: "Para entrar em contato com nossa equipe de suporte, envie um e-mail para suporte@oralytics.com ou ligue para (11) 9999-8888 em horário comercial."
    }
];

return (
    <ScrollView>
        <VStack space={4} bg="blue.600">
        <Box padding={4} alignItems="center">
            <Text fontSize="3xl" bold color="white">Oralytics</Text>
            <Text fontSize="md" color="white" textAlign="center">Perguntas Frequentes</Text>
        </Box>
        </VStack>

        <VStack space={2} padding={5} bg="white">
        <Text fontSize="xl" bold color="blue.600" mb={2}>FAQ - Perguntas e Respostas</Text>
        <Divider bg="blue.400" thickness={1} mb={4} />
        
        {faqItems.map((item, index) => (
            <Box key={index} mb={3}>
            <Pressable 
                onPress={() => toggleExpand(index)}
                bg={expandedIndex === index ? "blue.100" : "blue.50"}
                p={4}
                borderRadius={8}
                borderWidth={1}
                borderColor="blue.200"
            >
                <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="md" bold color="blue.600" flex={1} mr={2}>
                    {item.question}
                </Text>
                <Icon 
                    as={MaterialIcons} 
                    name={expandedIndex === index ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
                    size="md" 
                    color="blue.600" 
                />
                </HStack>
                <Collapse isOpen={expandedIndex === index}>
                <Box mt={4} p={2} bg="white" borderRadius={4}>
                    <Text fontSize="md">{item.answer}</Text>
                </Box>
                </Collapse>
            </Pressable>
            </Box>
        ))}

        <Button 
            onPress={handleVoltar} 
            marginTop={6}
            colorScheme="blue"
            leftIcon={<Icon as={MaterialIcons} name="arrow-back" size="sm" />}
        >
            Voltar
        </Button>
        </VStack>
    </ScrollView>
    );
};

export default FaqScreen;