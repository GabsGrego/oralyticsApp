import React, { useState, useRef } from 'react';
import { ScrollView, Modal, StyleSheet } from 'react-native';
import { Box, VStack, HStack, Text, Button, Icon, Image, Center, Divider, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { Camera } from 'expo-camera';

const AvaliacaoInteligenteScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const toast = useToast();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [cameraVisible, setCameraVisible] = useState(false);
    const cameraRef = useRef<Camera>(null);

    const handleVoltar = () => {
        navigation.goBack();
    };

    const handleIniciarAvaliacao = async () => {
        // Solicitar permissão para usar a câmera
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        
        if (status === 'granted') {
            setCameraVisible(true);
        } else {
            toast.show({
                title: "Permissão negada",
                description: "É necessário permitir o acesso à câmera para realizar a avaliação.",
                duration: 3000,
            });
        }
    };

    const handleTakePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                setCameraVisible(false);
                
                // Aqui você pode processar a foto ou enviá-la para análise
                toast.show({
                    title: "Foto capturada",
                    description: "Sua imagem foi capturada e está sendo analisada.",
                    duration: 3000,
                });
                
                // Simulação de análise (em um app real, você enviaria para um servidor)
                setTimeout(() => {
                    toast.show({
                        title: "Análise concluída",
                        description: "Funcionalidade em desenvolvimento. Em breve você poderá ver os resultados da sua avaliação.",
                        duration: 4000,
                    });
                }, 2000);
                
            } catch (error) {
                toast.show({
                    title: "Erro",
                    description: "Não foi possível capturar a foto. Tente novamente.",
                    duration: 3000,
                });
            }
        }
    };

    const handleCloseCamera = () => {
        setCameraVisible(false);
    };

    return (
        <>
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

            {/* Modal da Câmera */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={cameraVisible}
                onRequestClose={handleCloseCamera}
            >
                <Box flex={1} bg="black">
                    {hasPermission && (
                        <Camera
                            ref={cameraRef}
                            style={styles.camera}
                            type={Camera.Constants.Type.back}
                            ratio="16:9"
                        />
                    )}
                    <VStack position="absolute" bottom={10} width="100%" space={3} alignItems="center">
                        <Button
                            onPress={handleTakePicture}
                            bg="#F59E8B"
                            _pressed={{ bg: "#E58D7A" }}
                            size="lg"
                            borderRadius="full"
                            width="70px"
                            height="70px"
                            leftIcon={<Icon as={MaterialIcons} name="camera" size="lg" />}
                        />
                        <Button
                            onPress={handleCloseCamera}
                            variant="solid"
                            bg="gray.700"
                            _pressed={{ bg: "gray.600" }}
                            width="50%"
                        >
                            Cancelar
                        </Button>
                    </VStack>
                </Box>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: '100%',
    },
});

export default AvaliacaoInteligenteScreen;