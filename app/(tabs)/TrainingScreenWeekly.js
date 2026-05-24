import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Theme'; 
import { useRouter } from 'expo-router';

export default function TrainingScreenWeekly() {
  const router = useRouter();

  const handleDayPress = (dayId, dayName) => {
    router.push({
      pathname: "/DailyExercisesScreen", 
      params: { id: dayId, day: dayName }
    });
  };

  const exercise = {
    title: "Exercícios Semanais",
    tags: ["MEMBROS SUPERIORES", "MOBILIDADE", "COLUNA LOMBAR", "COLUNA CERVICAL", "QUADRIL", "COTOVELO", "JOELHO"],
    steps: [
      { id: 1, title: "Segunda-Feira", titleDesc: "Amplitude de Movimento", desc: "Treino para mobilidade e a flexibilidade das articulações e tecidos moles (músculos e tendões)." },
      { id: 2, title: "Terça-Feira", titleDesc: "Extensão da coluna", desc: "Exercício focado na correção da postura, restaurar a curvatura natural e aliviar dores das costas." },
      { id: 3, title: "Quarta-Feira", titleDesc: "Amplitude de Movimento", desc: "Retorne à posição inicial resistindo à força elástica ou à gravidade. O movimento deve ser suave e sem trancos." },
      { id: 4, title: "Quinta-Feira", titleDesc: "Amplitude de Movimento", desc: "Retorne à posição inicial resistindo à força elástica ou à gravidade. O movimento deve ser suave e sem trancos." },
      { id: 5, title: "Sexta-Feira", titleDesc: "Amplitude de Movimento", desc: "Retorne à posição inicial resistindo à força elástica ou à gravidade. O movimento deve ser suave e sem trancos." },
      { id: 6, title: "Sábado", titleDesc: "Amplitude de Movimento", desc: "Retorne à posição inicial resistindo à força elástica ou à gravidade. O movimento deve ser suave e sem trancos." },
      { id: 7, title: "Domingo", titleDesc: "Amplitude de Movimento", desc: "Retorne à posição inicial resistindo à força elástica ou à gravidade. O movimento deve ser suave e sem trancos." }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>UNIFAE Care</Text>
        <View style={styles.headerRight}>
           <MaterialCommunityIcons name="account-circle-outline" size={24} color={Colors.primary} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagContainer}>
          {exercise.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.title}>{exercise.title}</Text>
        <Text style={styles.sectionTitle}>Treinos</Text>
        
        {exercise.steps.map((step) => (
          <TouchableOpacity 
            key={step.id} 
            style={styles.cardItem} 
            onPress={() => handleDayPress(step.id, step.title)}
            activeOpacity={0.7}
          >
            <View style={styles.cardHeader}>
              <View style={styles.stepHeaderLeft}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{step.id}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepSubTitle}>{step.titleDesc}</Text>
                </View>
              </View>
              
              <MaterialCommunityIcons 
                name="chevron-right" 
                size={24} 
                color={Colors.primary} 
              />
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.tipsCard}>
          <View style={styles.tipsContent}>
            <View style={styles.tipsHeaderRow}>
              <Text style={styles.tipsTitle}>Dicas da Fisioterapeuta</Text>
              <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="#CBD5E1" />
            </View>
            <Text style={styles.tipsText}>
              "Foque em realizar primeiramente os exercícios diários."
            </Text>
          </View>
        </View>

      </ScrollView>
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
    backgroundColor: '#fff'
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: Colors.text },
  headerRight: { width: 30, alignItems: 'flex-end' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 10 },
  
  tagContainer: { flexDirection: 'row', marginBottom: 20 },
  tag: { backgroundColor: '#D1FAE5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8 },
  tagText: { fontSize: 11, fontWeight: '700', color: '#065F46' },

  title: { fontSize: 26, fontWeight: '800', color: Colors.text, marginBottom: 10 },
  sectionTitle: { fontSize: 19, fontWeight: 'bold', marginBottom: 15, color: Colors.text },
  
  cardItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  stepHeaderLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  stepNumber: { 
    width: 32, 
    height: 32, 
    borderRadius: 16, 
    backgroundColor: Colors.primary, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 15 
  },
  stepNumberText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  textContainer: { flex: 1 },
  stepTitle: { fontSize: 16, fontWeight: '700', color: Colors.text },
  stepSubTitle: { fontSize: 13, color: Colors.gray, marginTop: 2 },
  
  tipsCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tipsContent: { flex: 1 },
  tipsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipsTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
  tipsText: { fontSize: 14, color: '#4B5563', fontStyle: 'italic', lineHeight: 20 },
});