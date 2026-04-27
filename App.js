import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/HomeScreen';
import Cadastro from './screen/Cadastro';
import Login from './screen/Login';
import RecoverScreen from './screen/RecoverScreen';
import PerfilComponent from './screen/PerfilComponent';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="perfilComponent">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }}/>
        <Stack.Screen name="Recover" component={RecoverScreen} options={{title: "Recuperar Senha"}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="perfilComponent" component={PerfilComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
