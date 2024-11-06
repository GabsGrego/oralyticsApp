import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from '../screens/CadastroScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import HistoricoScreen from '../screens/HistoricoScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Historico" component={HistoricoScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
