import { Tabs } from 'expo-router'; // <--- IMPORTANTE

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="HomeScreen" options={{ title: 'Início' }} />
      {/* outras telas aqui */}
    </Tabs>
  );
}