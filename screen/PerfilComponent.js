import React from "react";
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  SafeAreaView, 
  ScrollView, 
  Image 
} from "react-native"; 

export default function PerfilComponent() {
  const data = {
    "profile": {
      "id": 5,
      "name": "Maria Aparecida Souza",
      "email": "paciente1@unifae.local",
      "role": "PATIENT",
      "photoUrl": null
    },
    "app": {
      "id": 1,
      "name": "Unifae Care - Fisioterapia"
    },
    "course": {
      "id": 1,
      "name": "Fisioterapia"
    },
    "responsibleStudent": {
      "id": 4,
      "name": "Aluno André Lucas",
      "email": "aluno@unifae.local",
      "photoUrl": null
    },
    "coordinator": {
      "id": 2,
      "name": "Coord. Vanessa",
      "email": "coordenador@unifae.local",
      "photoUrl": null
    },
    "weeklyProgress": {
      "from": "2026-04-20",
      "to": "2026-04-27",
      "prescribedExercises": 2,
      "completedExercises": 0,
      "percentCompleted": 0
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>UNIFAE Care</Text>
          <TouchableOpacity style={styles.avatarMini}>
            <Text style={{ fontSize: 14 }}>👤</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&s=maria' }} 
              style={styles.profileImage} 
            />
            <View style={styles.editBadge}>
              <Text style={{ color: 'white', fontSize: 10 }}>✎</Text>
            </View>
          </View>
          <Text style={styles.patientName}>{data.profile.name}</Text>
          <Text style={styles.patientId}>ID: #{data.profile.id}-{data.profile.role}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>FISIOTERAPEUTA RESPONSÁVEL</Text>
          <View style={styles.row}>
            <Image source={{ uri: 'https://i.pravatar.cc/100?u=andre' }} style={styles.thumb} />
            <View>
              <Text style={styles.nameText}>{data.responsibleStudent.name}</Text>
              <Text style={styles.subText}>Estudante de Fisioterapia</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>COORDENADOR RESPONSÁVEL</Text>
          <View style={styles.row}>
            <Image source={{ uri: 'https://i.pravatar.cc/100?u=vanessa' }} style={styles.thumb} />
            <View>
              <Text style={styles.nameText}>{data.coordinator.name}</Text>
              <Text style={styles.subText}>Especialista Ortopédica</Text>
            </View>
          </View>
        </View>

        <View style={[styles.card, styles.metaCard]}>
          <Text style={[styles.cardLabel, { color: '#166534' }]}>META SEMANAL</Text>
          <View style={styles.progressRow}>
            <Text style={styles.percentText}>{data.weeklyProgress.percentCompleted}%</Text>
            <Text style={styles.concluidoText}>Concluído</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View 
              style={[
                styles.progressBarFill, 
                { width: `${Math.max(data.weeklyProgress.percentCompleted, 5)}%` } 
              ]} 
            />
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F9FAFB' 
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10
  },
  headerTitle: { 
    fontWeight: 'bold', 
    color: '#374151', 
    fontSize: 18 
  },
  avatarMini: { 
    width: 36, 
    height: 36, 
    borderRadius: 18, 
    backgroundColor: '#2DD4BF', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  profileContainer: { 
    alignItems: 'center', 
    marginBottom: 30 
  },
  imageWrapper: { 
    width: 130, 
    height: 130, 
    borderRadius: 65, 
    borderWidth: 4, 
    borderColor: '#EF4444', 
    padding: 2,
    position: 'relative'
  },
  profileImage: { 
    width: '100%', 
    height: '100%', 
    borderRadius: 65 
  },
  editBadge: { 
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
    backgroundColor: '#166534', 
    width: 26,
    height: 26,
    borderRadius: 13, 
    borderWidth: 2, 
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  patientName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 15, 
    color: '#1F2937' 
  },
  patientId: { 
    fontSize: 12, 
    color: '#047857', 
    letterSpacing: 1, 
    marginTop: 4,
    fontWeight: '600'
  },
  card: { 
    backgroundColor: 'white', 
    borderRadius: 24, 
    padding: 20, 
    marginBottom: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05, 
    shadowRadius: 8,
    elevation: 3 
  },
  cardLabel: { 
    fontSize: 10, 
    fontWeight: 'bold', 
    color: '#9CA3AF', 
    marginBottom: 12,
    letterSpacing: 0.5
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  thumb: { 
    width: 48, 
    height: 48, 
    borderRadius: 12, 
    backgroundColor: '#F3F4F6',
    marginRight: 12
  },
  nameText: { 
    fontWeight: 'bold', 
    color: '#1F2937',
    fontSize: 15
  },
  subText: { 
    fontSize: 12, 
    color: '#6B7280', 
    fontStyle: 'italic' 
  },
  metaCard: { 
    backgroundColor: '#F0FDF4' 
  },
  progressRow: { 
    flexDirection: 'row', 
    alignItems: 'baseline', 
    marginBottom: 10 
  },
  percentText: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#166534',
    marginRight: 8
  },
  concluidoText: { 
    color: '#166534', 
    opacity: 0.8,
    fontSize: 14
  },
  progressBarBg: { 
    height: 10, 
    backgroundColor: '#E5E7EB', 
    borderRadius: 5,
    overflow: 'hidden'
  },
  progressBarFill: { 
    height: '100%', 
    backgroundColor: '#15803D', 
    borderRadius: 5 
  },
});