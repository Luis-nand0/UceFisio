import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/HomeScreen';
import RecoverScreen from './screen/RecoverScreen';


export default function App() {

  const Stack = createNativeStackNavigator();
  //Retirar o Recover como tela inicial antes de subir main
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Recover">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }}/>
        <Stack.Screen name="Recover" component={RecoverScreen} options={{title: "Recuperar Senha"}} />
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
