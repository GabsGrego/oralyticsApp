import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, Text, Image, HStack, Icon, Button, Divider, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

interface GuideStep {
    title: string;
    description: string;
    tips: string[];
}

const GuiaScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentStep, setCurrentStep] = useState(0);

    const handleVoltar = () => {
        navigation.navigate('Perfil'); // direciona para a tela de perfil
}

    const nextStep = () => {
    if (currentStep < guideSteps.length - 1) {
        setCurrentStep(currentStep + 1);
    }
};

    const prevStep = () => {
    if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
    }
};

const guideSteps: GuideStep[] = [
    {
        title: "Preparação",
        description: "Antes de começar a escovação, prepare sua escova e creme dental adequadamente.",
        tips: [
        "Use uma escova de cerdas macias a médias",
        "Aplique uma quantidade de creme dental equivalente a um grão de ervilha",
        "Troque sua escova a cada 3 meses ou quando as cerdas estiverem desgastadas"
        ]
    },
    {
        title: "Técnica de Escovação",
        description: "Posicione a escova em um ângulo de 45 graus em relação à gengiva e faça movimentos suaves.",
        tips: [
        "Escove com movimentos circulares suaves",
        "Não aplique força excessiva para não danificar o esmalte",
        "Dedique pelo menos 30 segundos para cada quadrante da boca"
        ]
    },
    {
        title: "Superfícies Dentárias",
        description: "Certifique-se de escovar todas as superfícies dos dentes: externas, internas e de mastigação.",
        tips: [
        "Escove as superfícies externas primeiro",
        "Para as superfícies internas, incline a escova verticalmente",
        "Escove as superfícies de mastigação com movimentos para frente e para trás"
        ]
    },
    {
        title: "Língua e Bochechas",
        description: "A limpeza da língua e das bochechas é essencial para uma higiene bucal completa.",
        tips: [
        "Escove a língua suavemente do fundo para a ponta",
        "Use um limpador de língua para maior eficácia",
        "Enxágue bem a boca após a escovação"
        ]
    },
    {
        title: "Uso do Fio Dental",
        description: "O fio dental é fundamental para remover a placa bacteriana entre os dentes.",
        tips: [
        "Use aproximadamente 45 cm de fio dental",
        "Enrole a maior parte ao redor do dedo médio de uma mão",
        "Deslize suavemente o fio entre os dentes em formato de 'C'",
        "Use uma seção limpa do fio para cada espaço interdental"
        ]
    },
    {
    title: "Enxaguante Bucal",
    description: "O enxaguante bucal complementa a higiene oral, ajudando a reduzir bactérias.",
    tips: [
        "Use após a escovação e o uso do fio dental",
        "Gargareje por 30 segundos e não engula",
        "Escolha enxaguantes sem álcool para uso diário",
        "Consulte seu dentista sobre o enxaguante mais adequado para você"
        ]
    }
];

    const currentGuide = guideSteps[currentStep];

return (
    <ScrollView>
        <VStack space={4} bg="blue.600">
        <Box padding={3} alignItems="center">
            <Text fontSize="3xl" bold color="white">Oralytics</Text>
            <Text fontSize="md" color="white" textAlign="center">Guia de Escovação</Text>
        </Box>
        </VStack>

        <VStack space={4} padding={3} bg="white">
        <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" bold color="blue.600">{currentGuide.title}</Text>
            <Text color="blue.600">Passo {currentStep + 1} de {guideSteps.length}</Text>
        </HStack>
        
        <Divider bg="blue.400" thickness={1} />
        
        <Text fontSize="sm" textAlign="justify">
            {currentGuide.description}
        </Text>
        
        <Box bg="blue.50" padding={4} borderRadius={8} marginTop={2}>
            <Text fontSize="lg" bold color="blue.600">Dicas importantes:</Text>
            <VStack space={2} marginTop={2}>
            {currentGuide.tips.map((tip, index) => (
                <HStack key={index} space={2} alignItems="flex-start">
                <Icon as={MaterialIcons} name="check-circle" size="sm" color="blue.600" mt={1} />
                <Text flex={1}>{tip}</Text>
                </HStack>
            ))}
            </VStack>
        </Box>
        
        <HStack space={4} justifyContent="space-between" marginTop={4}>
            <Button 
            onPress={prevStep} 
            colorScheme="blue"
            isDisabled={currentStep === 0}
            leftIcon={<Icon as={MaterialIcons} name="arrow-back" size="sm" />}
            flex={1}
            >
            Anterior
            </Button>
        
            <Button 
            onPress={nextStep} 
            colorScheme="blue"
            isDisabled={currentStep === guideSteps.length - 1}
            rightIcon={<Icon as={MaterialIcons} name="arrow-forward" size="sm" />}
            flex={1}
            >
            Próximo
            </Button>
        </HStack>
        
        <Button 
            onPress={handleVoltar} 
            marginTop={4}
            variant="outline"
            colorScheme="blue"
        >
            Voltar ao Menu
        </Button>
        </VStack>
    </ScrollView>
    );
};

export default GuiaScreen;