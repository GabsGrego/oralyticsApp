import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, HStack, Text, Button, Icon, Progress, Divider, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

// Interface para os resultados da avaliação
interface ResultadoAvaliacao {
  doenca: string;
  confiabilidade: number;
  //descricao: string;
  //recomendacoes: string[];
}

const ResultadoScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const toast = useToast();

  // Dados fictícios dos resultados da avaliação
  const resultados: ResultadoAvaliacao[] = [
    {
      doenca: "Tártaro",
      confiabilidade: 62,
      //descricao: "O tártaro é uma placa bacteriana mineralizada que se forma nos dentes. Ele é áspero e poroso, o que facilita o acúmulo de mais bactérias.",
    //   recomendacoes: [
    //     "Agende uma limpeza profissional com seu dentista",
    //     "Escove os dentes pelo menos duas vezes ao dia",
    //     "Use fio dental diariamente",
    //     "Considere o uso de enxaguante bucal antiplaca"
    //   ]
    },
    {
      doenca: "Gengivite",
      confiabilidade: 78,
      //descricao: "A gengivite é uma inflamação das gengivas causada pelo acúmulo de placa bacteriana. Sintomas incluem gengivas vermelhas, inchadas e que sangram facilmente.",
    //   recomendacoes: [
    //     "Consulte seu dentista para avaliação e tratamento",
    //     "Melhore sua técnica de escovação",
    //     "Use fio dental corretamente",
    //     "Evite fumar, pois isso agrava a condição"
    //   ]
    }
  ];

  // Função para determinar a cor da barra de progresso com base na confiabilidade
  const getProgressColor = (confiabilidade: number) => {
    if (confiabilidade < 50) return "yellow.500";
    if (confiabilidade < 70) return "orange.500";
    return "green.500";
  };

  // Função para voltar à página principal
  const handleVoltarHome = () => {
    navigation.navigate("Home");
    toast.show({
      title: "Resultados salvos",
      description: "Os resultados da sua avaliação foram salvos no seu histórico.",
      duration: 3000,
    });
  };

  // Função para compartilhar resultados (fictícia)
  const handleCompartilhar = () => {
    toast.show({
      title: "Compartilhar",
      description: "Função de compartilhamento em desenvolvimento.",
      duration: 2000,
    });
  };

  return (
    <ScrollView>
      <VStack flex={1} bg="white">
        <Box bg="blue.600" padding={4} width="100%" alignItems="center">
          <Text fontSize="2xl" bold color="white">
            Resultado da Avaliação
          </Text>
        </Box>

        <VStack space={4} padding={4}>
          {/* <Box bg="blue.50" padding={4} borderRadius={8} shadow={2}>
            <Text fontSize="md" bold color="blue.700" mb={2}>
              Resumo da Análise
            </Text>
            <Text fontSize="xs">
              Nossa inteligência artificial analisou sua imagem e identificou possíveis 
              condições dentárias. Lembre-se que esta é apenas uma avaliação preliminar 
              e não substitui a consulta com um profissional.
            </Text>
          </Box> */}

          <Text fontSize="lg" bold color="blue.700">
            Condições Detectadas
          </Text>

          {resultados.map((resultado, index) => (
            <Box 
              key={index} 
              bg="white" 
              borderWidth={1} 
              borderColor="gray.200" 
              borderRadius={8} 
              padding={4}
              shadow={2}
              mb={2}
            >
              <HStack justifyContent="space-between" alignItems="center" mb={1}>
                <Text fontSize="lg" bold color="blue.800">
                  {resultado.doenca}
                </Text>
                <HStack alignItems="center" space={2}>
                  <Text bold color={getProgressColor(resultado.confiabilidade)}>
                    {resultado.confiabilidade}%
                  </Text>
                  <Icon 
                    as={MaterialIcons} 
                    name={resultado.confiabilidade >= 70 ? "warning" : "info"} 
                    color={getProgressColor(resultado.confiabilidade)} 
                    size="sm" 
                  />
                </HStack>
              </HStack>
              
              <Text mb={2}>Nível de confiabilidade:</Text>
              <Progress 
                value={resultado.confiabilidade} 
                colorScheme={
                  resultado.confiabilidade < 50 ? "yellow" : 
                  resultado.confiabilidade < 70 ? "orange" : "green"
                }
                mb={3}
              />
              
              {/* <Text fontSize="sm" mb={3}>
                {resultado.descricao}
              </Text> */}
              
              {/* <Text fontSize="sm" bold mb={2}>
                Recomendações:
              </Text> */}
              
              {/* <VStack space={1} mb={2}>
                {resultado.recomendacoes.map((recomendacao, recIndex) => (
                  <HStack key={recIndex} space={2} alignItems="flex-start">
                    <Icon as={MaterialIcons} name="check-circle" color="#F59E8B" size="xs" mt={1} />
                    <Text fontSize="sm">{recomendacao}</Text>
                  </HStack>
                ))}
              </VStack> */}
            </Box>
          ))}

          <Box bg="#F59E8B" padding={4} borderRadius={8} >
            <HStack alignItems="center" space={2} mb={2}>
              <Icon as={MaterialIcons} name="info" color="white" size="sm" />
              <Text bold color="white">Importante</Text>
            </HStack>
            <Text color="white">
              Esta avaliação é apenas informativa e não substitui o diagnóstico 
              profissional. Consulte seu dentista para uma avaliação completa.
            </Text>
          </Box>

          <Divider my={1} />

            <Button 
              onPress={handleVoltarHome}
              bg="blue.600"
              _pressed={{ bg: "blue.700" }}
              size="lg"
              leftIcon={<Icon as={MaterialIcons} name="home" size="sm" />}
            >
              Voltar à Página Principal
            </Button>
            
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default ResultadoScreen;
