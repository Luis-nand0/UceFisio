// app/index.js
import { Redirect } from 'expo-router';

export default function Index() {
  // Aqui você verificaria se o usuário está logado
  // Por enquanto, vamos mandar para o Login
  return <Redirect href="/HomeScreen" />;
}