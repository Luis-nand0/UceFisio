import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Colors } from '../../constants/Theme'; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? 0 : 5,
        },
        tabBarStyle: {
          backgroundColor: Colors.white,
          height: Platform.OS === 'ios' ? 88 : 65, 
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb', 
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          elevation: 0, 
          shadowOpacity: 0, 
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "home" : "home-outline"} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="PerfilComponent"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "account" : "account-outline"} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}