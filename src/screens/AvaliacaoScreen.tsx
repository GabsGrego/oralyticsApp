import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, HStack, Text, Button, Icon, Image, Center,Divider,useToast} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

const AvaliacaoInteligenteScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const toast = useToast();

    const handleVoltar = () => {
    navigation.goBack();
};

    const handleIniciarAvaliacao = () => {
    // PopUp informativo de funcionalidade em desenvolvimento
    toast.show({
        title: "Iniciando avaliação",
        description: "Funcionalidade em desenvolvimento",
        duration: 3000,
    });
};

return (
    <ScrollView>
        <VStack flex={1} bg="white">
        <Box bg="blue.600" padding={4} width="100%" alignItems="center">
            <Text fontSize="2xl" bold color="white">
            Avaliação Inteligente
            </Text>
        </Box>

        <VStack space={3} padding={2}>

        <Box bg="blue.50" padding={3} borderRadius={8}>
            <Text fontSize="md" bold color="blue.700" mb={2}>
                O que é a Avaliação Inteligente?
            </Text>
            <Text fontSize="sm">
                A Avaliação Inteligente é uma funcionalidade que utiliza tecnologia de 
                inteligência artificial para analisar fotos da sua boca e identificar 
                possíveis problemas dentários.
            </Text>
        </Box>

        <Divider bg="gray.200" />

        <VStack space={2}>
            <Text fontSize="md" bold color="blue.700">
                Como funciona:
            </Text>
            
            <HStack space={2} alignItems="flex-start">
                <Icon as={MaterialIcons} name="photo-camera" size="md" color="#F59E8B" mt={1} />
                <Text flex={1}>
                    Tire uma foto clara da área que deseja avaliar
                </Text>
            </HStack>
            
            <HStack space={2} alignItems="flex-start">
                <Icon as={MaterialIcons} name="sync" size="md" color="#F59E8B" mt={1} />
                <Text flex={1}>
                    Nosso sistema analisa a imagem em segundos
                </Text>
            </HStack>
            
            <HStack space={2} alignItems="flex-start">
                <Icon as={MaterialIcons} name="assessment" size="md" color="#F59E8B" mt={1} />
                <Text flex={1}>
                    Receba uma avaliação preliminar e recomendações
                </Text>
            </HStack>
        </VStack>

        <Button 
            onPress={handleIniciarAvaliacao}
            bg="#F59E8B"
            _pressed={{ bg: "#E58D7A" }}
            size="lg"
            leftIcon={<Icon as={FontAwesome} name="camera" size="sm" />}
            >
            Iniciar Avaliação
        </Button>

        <Box bg="blue.50" padding={3} borderRadius={8} >
            <Text fontSize="sm" italic textAlign="center">
                Importante: Esta avaliação não substitui a consulta com um dentista. 
                É apenas uma ferramenta auxiliar para monitoramento da saúde bucal.
            </Text>
        </Box>

            <Button 
            onPress={handleVoltar}
            variant="outline"
            colorScheme="blue"
            mt={2}
            leftIcon={<Icon as={MaterialIcons} name="arrow-back" size="sm" />}
            >
            Voltar
            </Button>
        </VStack>
        </VStack>
    </ScrollView>
    );
};

export default AvaliacaoInteligenteScreen;