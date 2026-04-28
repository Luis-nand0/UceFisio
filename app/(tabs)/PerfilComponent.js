import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, GlobalStyles } from '../../constants/Theme';
import { useRouter } from 'expo-router';

export default function PerfilComponent() {

  const router = useRouter();

  const data = {
    "profile": { "id": 5, "name": "Maria Aparecida Souza", "email": "paciente1@unifae.local", "role": "PACIENTE" },
    "responsibleStudent": { "name": "André Lucas", "photoUrl": 'https://i.pravatar.cc/150?u=andre' },
    "coordinator": { "name": "Dra. Vanessa", "photoUrl": 'https://i.pravatar.cc/150?u=vanessa' },
    "weeklyProgress": { "percentCompleted": 45 } 
  };

  const MenuItem = ({ icon, title, color = Colors.text }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
          <MaterialCommunityIcons name={icon} size={22} color={color} />
        </View>
        <Text style={[styles.menuText, { color: Colors.text }]}>{title}</Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.gray} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Meu Perfil</Text>
          <TouchableOpacity onPress={() => router.push('/Login')}>
            <MaterialCommunityIcons name="logout" size={24} color={Colors.error} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?u=maria' }} 
              style={styles.profileImage} 
            />
            <TouchableOpacity style={styles.editBadge}>
              <MaterialCommunityIcons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{data.profile.name}</Text>
          <Text style={styles.userEmail}>{data.profile.email}</Text>
          <View style={styles.badgeRole}>
            <Text style={styles.badgeText}>{data.profile.role}</Text>
          </View>
        </View>

        <View style={[GlobalStyles.card, styles.metaCard]}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="chart-check" size={20} color={Colors.primary} />
            <Text style={styles.cardLabel}>META SEMANAL</Text>
          </View>
          <View style={styles.progressInfo}>
            <Text style={styles.percentText}>{data.weeklyProgress.percentCompleted}%</Text>
            <Text style={styles.progressSub}>dos exercícios concluídos</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${data.weeklyProgress.percentCompleted}%` }]} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Equipe de Cuidados</Text>
        <View style={GlobalStyles.card}>
          <View style={styles.teamRow}>
            <Image source={{ uri: data.responsibleStudent.photoUrl }} style={styles.teamThumb} />
            <View>
              <Text style={styles.teamName}>{data.responsibleStudent.name}</Text>
              <Text style={styles.teamRole}>Estudante Responsável</Text>
            </View>
          </View>
          <View style={[styles.divider, { marginVertical: 15 }]} />
          <View style={styles.teamRow}>
            <Image source={{ uri: data.coordinator.photoUrl }} style={styles.teamThumb} />
            <View>
              <Text style={styles.teamName}>{data.coordinator.name}</Text>
              <Text style={styles.teamRole}>Coordenador/Orientador</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Configurações</Text>
        <View style={[GlobalStyles.card, { padding: 5 }]}>
          <MenuItem icon="bell-outline" title="Notificações" color="#3b82f6" />
          <View style={styles.divider} />
          <MenuItem icon="shield-check-outline" title="Privacidade" color="#10b981" />
          <View style={styles.divider} />
          <MenuItem icon="help-circle-outline" title="Suporte e Ajuda" color="#f59e0b" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollContent: { padding: 20, paddingBottom: 40 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 25
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: Colors.text },
  profileSection: { alignItems: 'center', marginBottom: 30 },
  imageWrapper: { position: 'relative' },
  profileImage: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: Colors.white },
  editBadge: { 
    position: 'absolute', bottom: 0, right: 0, 
    backgroundColor: Colors.primary, width: 32, height: 32, 
    borderRadius: 16, justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: Colors.white
  },
  userName: { fontSize: 22, fontWeight: 'bold', color: Colors.text, marginTop: 15 },
  userEmail: { fontSize: 14, color: Colors.gray, marginTop: 4 },
  badgeRole: { 
    backgroundColor: Colors.primary + '20', 
    paddingHorizontal: 12, paddingVertical: 4, 
    borderRadius: 20, marginTop: 10 
  },
  badgeText: { color: Colors.primary, fontSize: 12, fontWeight: 'bold' },
  
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.text, marginTop: 25, marginBottom: 15 },
  
  metaCard: { borderLeftWidth: 5, borderLeftColor: Colors.primary },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cardLabel: { fontSize: 12, fontWeight: 'bold', color: Colors.gray, marginLeft: 8 },
  progressInfo: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 12 },
  percentText: { fontSize: 32, fontWeight: 'bold', color: Colors.text, marginRight: 8 },
  progressSub: { fontSize: 14, color: Colors.gray },
  progressBarBg: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: Colors.primary },

  teamRow: { flexDirection: 'row', alignItems: 'center' },
  teamThumb: { width: 45, height: 45, borderRadius: 12, marginRight: 15 },
  teamName: { fontSize: 15, fontWeight: 'bold', color: Colors.text },
  teamRole: { fontSize: 13, color: Colors.gray },

  menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  iconContainer: { width: 38, height: 38, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  menuText: { fontSize: 15, fontWeight: '500' },
  divider: { height: 1, backgroundColor: '#f1f3f5', marginHorizontal: 15 }
});