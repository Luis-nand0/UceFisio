import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Colors, GlobalStyles } from '../../constants/Theme'; 
import { useRouter } from 'expo-router';

export default function TrainingScreen() {
  const router = useRouter();
  const [expandedSteps, setExpandedSteps] = useState({});

  const toggleStep = (id) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const exercise = {
    title: "Rotação Externa de Ombro",
    tags: ["MEMBROS SUPERIORES", "MOBILIDADE"],
    videoId: "dQw4w9WgXcQ", 
    stats: [
      { label: "SÉRIES", value: "3 Unidades", icon: "repeat" },
      { label: "VOLUME", value: "15 Repetições", icon: "arrow-expand" }
    ],
    steps: [
      { 
        id: 1, 
        title: "Posicionamento", 
        desc: "Mantenha o cotovelo junto ao corpo em um ângulo de 90 graus. Use uma toalha dobrada sob a axila para maior estabilidade se necessário." 
      },
      { 
        id: 2, 
        title: "Movimento", 
        desc: "Gire o antebraço para fora de forma controlada, mantendo o cotovelo fixo. Sinta a ativação na parte posterior do ombro." 
      },
      { 
        id: 3, 
        title: "Retorno", 
        desc: "Retorne à posição inicial resistindo à força elástica ou à gravidade. O movimento deve ser suave e sem trancos." 
      }
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
        
        <View style={styles.tagContainer}>
          {exercise.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.title}>{exercise.title}</Text>

        <View style={styles.videoWrapper}>
          <YoutubePlayer
            height={210}
            play={false}
            videoId={exercise.videoId}
          />
        </View>

        <View style={styles.statsRow}>
          {exercise.stats.map((stat, index) => (
            <View key={index} style={[GlobalStyles.card, styles.statCard]}>
               <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name={stat.icon} size={20} color={Colors.primary} />
               </View>
               <View style={{marginLeft: 12}}>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                  <Text style={styles.statValue}>{stat.value}</Text>
               </View>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Passo a Passo</Text>

        {exercise.steps.map((step) => {
          const isExpanded = expandedSteps[step.id];
          return (
            <View key={step.id} style={[styles.accordionItem, isExpanded && styles.accordionItemActive]}>
              <TouchableOpacity 
                style={styles.stepHeader} 
                onPress={() => toggleStep(step.id)}
                activeOpacity={0.7}
              >
                <View style={styles.stepHeaderLeft}>
                  <View style={[styles.stepNumber, isExpanded && {backgroundColor: Colors.primary}]}>
                    <Text style={styles.stepNumberText}>{step.id}</Text>
                  </View>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                </View>
                <MaterialCommunityIcons 
                  name={isExpanded ? "chevron-up" : "chevron-down"} 
                  size={22} 
                  color={Colors.gray} 
                />
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.stepContent}>
                  <View style={styles.verticalLine} />
                  <Text style={styles.stepDesc}>{step.desc}</Text>
                </View>
              )}
            </View>
          );
        })}

        <View style={styles.tipsCard}>
        <View style={styles.tipsContent}>
        <View style={styles.tipsHeaderRow}>
          <Text style={styles.tipsTitle}>Dicas da Fisioterapeuta</Text>
            <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="#CBD5E1" />
        </View>
          <Text style={styles.tipsText}>
            "Foque na qualidade do movimento, não na carga. Se sentir uma dor aguda, 
            diminua a amplitude e respire profundamente durante a execução."
        </Text>
        </View>
</View>
        <TouchableOpacity 
          style={styles.finishButton}
          onPress={() => alert('Atividade Concluída!')}
        >
          <Text style={styles.finishButtonText}>Concluir Atividade</Text>
        </TouchableOpacity>

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
  
  tagContainer: { flexDirection: 'row', marginBottom: 8 },
  tag: { backgroundColor: '#D1FAE5', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, marginRight: 8 },
  tagText: { fontSize: 11, fontWeight: '700', color: '#065F46' },

  title: { fontSize: 26, fontWeight: '800', color: Colors.text, marginBottom: 20 },
  
  videoWrapper: { 
    borderRadius: 20, 
    overflow: 'hidden', 
    backgroundColor: '#000',
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  statCard: { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginHorizontal: 5, 
    padding: 12,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary
  },
  iconCircle: { width: 35, height: 35, borderRadius: 10, backgroundColor: Colors.primary + '15', justifyContent: 'center', alignItems: 'center' },
  statLabel: { fontSize: 10, color: Colors.gray, fontWeight: '600' },
  statValue: { fontSize: 13, fontWeight: 'bold', color: Colors.text },

  sectionTitle: { fontSize: 19, fontWeight: 'bold', marginBottom: 15, color: Colors.text },
  
  accordionItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  accordionItemActive: {
    borderColor: Colors.primary + '30',
    elevation: 2,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  stepHeaderLeft: { flexDirection: 'row', alignItems: 'center' },
  stepNumber: { 
    width: 28, height: 28, borderRadius: 14, 
    backgroundColor: Colors.gray + '40', 
    justifyContent: 'center', alignItems: 'center',
    marginRight: 15 
  },
  stepNumberText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  stepTitle: { fontSize: 16, fontWeight: '700', color: Colors.text },
  
  stepContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  verticalLine: {
    width: 2,
    backgroundColor: '#E5E7EB',
    marginLeft: 13,
    marginRight: 25,
    borderRadius: 1,
  },
  stepDesc: { flex: 1, fontSize: 14, color: Colors.gray, lineHeight: 22 },

  finishButton: { 
    backgroundColor: Colors.primary, 
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 25,
    elevation: 3
  },
  finishButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  tipsCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tipsIconContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  tipsContent: {
    flex: 1,
  },
  tipsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  tipsText: {
    fontSize: 14,
    color: '#4B5563',
    fontStyle: 'italic',
    lineHeight: 20,
  },
});