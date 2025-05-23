import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from '../screens/CadastroScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import SobreScreen from '../screens/SobreScreen';
import FaqScreen from '../screens/FaqScreen';
import GuiaScreen from '../screens/GuiaScreen';
import AvaliacaoScreen from '../screens/AvaliacaoScreen';
import ResultadoScreen from '../screens/ResultadoScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">      
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Historico" component={HistoricoScreen} />
      <Stack.Screen name="Sobre" component={SobreScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="Guia" component={GuiaScreen} />
      <Stack.Screen name="Avaliacao" component={AvaliacaoScreen} />
      <Stack.Screen name="Resultado" component={ResultadoScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;
