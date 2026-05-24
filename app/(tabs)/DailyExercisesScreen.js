import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Theme'; 
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function DailyExercisesScreen() {
  const router = useRouter();
  const { id, day } = useLocalSearchParams();

  const [exercises, setExercises] = useState([
    {
      id: "ex_1",
      name: "Mobilidade com Bastão (Flexão)",
      sets: "3x10 repetições",
      rest: "00:45",
      image: "https://via.placeholder.com/120x80.png?text=Bastao+Ombro" 
    },
    {
      id: "ex_2",
      name: "Rotação Externa com Faixa Elástica",
      sets: "3x12 repetições",
      rest: "01:00",
      image: "https://via.placeholder.com/120x80.png?text=Rotacao+Externa"
    },
    {
      id: "ex_3",
      name: "Abdução de Ombro até 90° (Isometria)",
      sets: "3x de 20 segundos",
      rest: "00:45",
      image: "https://via.placeholder.com/120x80.png?text=Abducao"
    },
    {
      id: "ex_4",
      name: "Exercício de Codman (Pendular)",
      sets: "2x20 voltas (cada lado)",
      rest: "00:30",
      image: "https://via.placeholder.com/120x80.png?text=Codman"
    },
    {
      id: "ex_5",
      name: "Estabilização Escapular na Parede",
      sets: "3x10 repetições",
      rest: "01:00",
      image: "https://via.placeholder.com/120x80.png?text=Escapular"
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Treino de {day || "Fisioterapia"}</Text>
        <TouchableOpacity style={styles.headerRight}>
          <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <MaterialCommunityIcons name="clock-outline" size={20} color={Colors.gray} />
          <Text style={styles.summaryText}>~ 25min</Text>
        </View>
        <View style={styles.summaryItem}>
          <MaterialCommunityIcons name="run" size={20} color={Colors.gray} />
          <Text style={styles.summaryText}>{exercises.length} Exercícios</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {exercises.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.exerciseCard}
            activeOpacity={0.7}
            onPress={() => router.push('/TrainingScreen', { exerciseId: item.id, exerciseName: item.name })}
          >
            <View style={styles.imageWrapper}>
              <Image 
                source={{ uri: item.image }} 
                style={styles.exerciseImage} 
                resizeMode="cover"
              />
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.exerciseName} numberOfLines={2}>{item.name}</Text>
              
              <View style={styles.detailsRow}>
                <MaterialCommunityIcons name="repeat" size={16} color={Colors.primary} />
                <Text style={styles.detailsText}>{item.sets}</Text>
              </View>

              <View style={styles.detailsRow}>
                <MaterialCommunityIcons name="timer-outline" size={16} color={Colors.gray} />
                <Text style={styles.detailsText}>Descanso: {item.rest}</Text>
              </View>
            </View>

            <View style={styles.actionButton}>
              <MaterialCommunityIcons name="chevron-right" size={22} color={Colors.gray} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.fabButton} 
        activeOpacity={0.8}
        onPress={() => {
          router.push({
            pathname: "/training/TrainingScreen",
            params: { title: exercises[0].name }
          });
        }}
      >
        <MaterialCommunityIcons name="play" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: Colors.text },
  headerRight: { width: 30, alignItems: 'flex-end' },
  backButton: { width: 30 },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  summaryItem: { flexDirection: 'row', alignItems: 'center' },
  summaryText: { marginLeft: 6, fontSize: 14, color: Colors.text, fontWeight: '600' },
  scrollContent: { padding: 20, paddingBottom: 100 },
  exerciseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  imageWrapper: {
    width: 100,
    height: 85,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eaeaea'
  },
  exerciseImage: { width: '100%', height: '100%' },
  infoWrapper: { flex: 1, marginLeft: 16, justifyContent: 'center' },
  exerciseName: { fontSize: 15, fontWeight: '700', color: Colors.text, marginBottom: 8 },
  detailsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  detailsText: { fontSize: 13, color: Colors.text, marginLeft: 6, fontWeight: '500' },
  actionButton: { padding: 4 },
  fabButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: Colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }
});