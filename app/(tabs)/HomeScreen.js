import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* HEADER SECTION */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>Olá, Ana!</Text>
            <Text style={styles.subtitle}>
              Seu cuidado diário faz toda a diferença na sua recuperação.
            </Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.notificationBtn}>
              <Feather name="bell" size={26} color="#1e293b" />
              <View style={styles.dot} />
            </TouchableOpacity>
            <Image 
              source={{ uri: 'https://i.imgur.com/3n7S6nL.png' }} // Substitua pela sua imagem
              style={styles.profileImg}
            />
          </View>
        </View>

        {/* PLANO DE HOJE CARD */}
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Seu plano de hoje</Text>
            <Text style={styles.exerciseCount}>1 exercício</Text>
          </View>

          <View style={styles.exerciseBox}>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>Mobilidade de Ombro</Text>
              <Text style={styles.exerciseDetail}>Pós-cirúrgico • Câncer de mama</Text>
              <View style={styles.timeRow}>
                <Feather name="clock" size={16} color="#64748b" />
                <Text style={styles.timeText}>12 min</Text>
              </View>
            </View>
            <Image 
              source={{ uri: 'https://i.imgur.com/k6K6K6K.png' }} // Substitua pela sua imagem
              style={styles.exerciseImg}
            />
          </View>

          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Iniciar exercício</Text>
          </TouchableOpacity>
        </View>

        {/* PROGRESSO CARD */}
        <View style={styles.progressCard}>
          <Text style={styles.cardTitle}>Seu progresso</Text>
          
          <View style={styles.progressRow}>
            {/* Círculo de Progresso */}
            <View style={styles.progressCircle}>
              <Text style={styles.progressPercent}>78%</Text>
            </View>

            <View style={styles.progressTextContainer}>
              <Text style={styles.congratsText}>Você está indo muito bem!</Text>
              <Text style={styles.continueText}>Continue assim 💚</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
    lineHeight: 22,
  },
  headerIcons: {
    alignItems: 'center',
  },
  notificationBtn: {
    padding: 5,
    marginBottom: 10,
  },
  dot: {
    position: 'absolute',
    top: 6,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#ef4444',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#F8FAFC',
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  exerciseCount: {
    color: '#059669',
    fontWeight: '600',
  },
  exerciseBox: {
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
  },
  exerciseDetail: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginLeft: 6,
  },
  exerciseImg: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  startButton: {
    backgroundColor: '#064e3b', // Verde escuro idêntico
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  progressCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 6,
    borderColor: '#065f46',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1e293b',
  },
  progressTextContainer: {
    flex: 1,
  },
  congratsText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
  },
  continueText: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});

export default HomeScreen;