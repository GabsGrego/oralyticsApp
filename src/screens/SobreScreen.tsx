import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, Text, Image, HStack, Icon, Button, Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

const SobreScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleVoltar = () => {
    navigation.goBack();
    };

    return (
    <ScrollView>
        <VStack space={4} bg="blue.600">
        <Box padding={4} alignItems="center">
            <Text fontSize="3xl" bold color="white">Oralytics</Text>
            <Text fontSize="md" color="white" textAlign="center">Monitoramento e Cuidado Dental</Text>
        </Box>
        </VStack>

        <Text padding={1} fontSize="xl" bold color="blue.600">Sobre o Oralytics</Text>
        <Divider bg="blue.400" thickness={1} />
        
        <Text padding={1} fontSize="md">
            O Oralytics é um aplicativo inovador desenvolvido para auxiliar no monitoramento e cuidado da saúde bucal dos usuários.
            Nossa missão é promover hábitos de higiene bucal saudáveis e facilitar o acompanhamento do histórico odontológico, 
            tornando a experiência do cuidado dental mais acessível e eficiente.
        </Text>

        <Box bg="blue.50" padding={2} borderRadius={8} marginTop={2}>
            <Text fontSize="lg" bold color="blue.600">Principais Funcionalidades:</Text>
            <VStack space={2} marginTop={2}>
            <HStack space={2} alignItems="center">
                <Icon as={MaterialIcons} name="check-circle" size="md" color="blue.600" />
                <Text>Monitoramento diário de escovação</Text>
            </HStack>
            <HStack space={2} alignItems="center">
                <Icon as={MaterialIcons} name="check-circle" size="md" color="blue.600" />
                <Text>Histórico de procedimentos dentários</Text>
            </HStack>
            <HStack space={2} alignItems="center">
                <Icon as={MaterialIcons} name="check-circle" size="md" color="blue.600" />
                <Text>Avaliação bucal inteligente</Text>
            </HStack>
            <HStack space={2} alignItems="center">
                <Icon as={MaterialIcons} name="check-circle" size="md" color="blue.600" />
                <Text>Guias de escovação e cuidados bucais</Text>
            </HStack>
            <HStack space={2} alignItems="center">
                <Icon as={MaterialIcons} name="check-circle" size="md" color="blue.600" />
                <Text>Carteirinha digital do plano odontológico</Text>
            </HStack>
            </VStack>
        </Box>

        <Text fontSize="md" marginTop={2}>
            Desenvolvido com tecnologias modernas, o Oralytics visa proporcionar uma experiência intuitiva e agradável, 
            incentivando os usuários a manterem uma rotina de cuidados bucais adequada.
        </Text>

        <Text fontSize="md" bold color="blue.600" marginTop={2}>
            Versão 1.0.0
        </Text>

        <Text fontSize="sm" color="gray.500" marginTop={2}>
            © 2024 Oralytics. Todos os direitos reservados.
        </Text>

        <Button 
            onPress={handleVoltar} 
            marginTop={4}
            colorScheme="blue"
            leftIcon={<Icon as={MaterialIcons} name="arrow-back" size="sm" />}
        >
            Voltar
        </Button>
    </ScrollView>
    );
};

export default SobreScreen;