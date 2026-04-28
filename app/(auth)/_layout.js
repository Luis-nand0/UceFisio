import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
      }}
    >
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Cadastro" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="RecoverScreen" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}