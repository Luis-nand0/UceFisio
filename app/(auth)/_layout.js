import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
      }}
    >
      {/* O "name" deve ser exatamente o nome do arquivo .js 
        que está na mesma pasta. 
      */}
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Cadastro" 
        options={{ title: 'Criar Conta' }} 
      />
      <Stack.Screen 
        name="RecoverScreen" 
        options={{ title: 'Recuperar Senha' }} 
      />
    </Stack>
  );
}