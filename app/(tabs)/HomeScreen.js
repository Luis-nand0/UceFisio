import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, GlobalStyles } from '../../constants/Theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>Olá, Ana!</Text>
            <Text style={styles.subtitle}>
              Seu cuidado diário faz toda a diferença na sua recuperação.
            </Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <MaterialCommunityIcons name="bell-outline" size={26} color={Colors.text} />
            <View style={styles.dot} />
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.titleRow}>
              <MaterialCommunityIcons name="calendar-check" size={20} color={Colors.primary} />
              <Text style={styles.cardTitle}>Plano de hoje</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1 exercício</Text>
            </View>
          </View>

          <View style={styles.exerciseBox}>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>Mobilidade de Ombro</Text>
              <Text style={styles.exerciseDetail}>Pós-cirúrgico • Câncer de mama</Text>
              <View style={styles.timeRow}>
                <MaterialCommunityIcons name="clock-outline" size={16} color={Colors.gray} />
                <Text style={styles.timeText}>12 min</Text>
              </View>
            </View>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/100?u=ex1' }} 
              style={styles.exerciseImg}
            />
          </View>

          <TouchableOpacity style={[GlobalStyles.button, { marginTop: 20 }]} onPress={() => {}}>
            <Text style={GlobalStyles.buttonText}>Iniciar exercício</Text>
          </TouchableOpacity>
        </View>

        <View style={[GlobalStyles.card, styles.progressCard]}>
          <View style={styles.cardHeader}>
            <View style={styles.titleRow}>
              <MaterialCommunityIcons name="trending-up" size={20} color={Colors.primary} />
              <Text style={styles.cardTitle}>Seu progresso</Text>
            </View>
          </View>
          
          <View style={styles.progressRow}>
            <View style={[styles.progressCircle, { borderColor: Colors.primary }]}>
              <Text style={styles.progressPercent}>78%</Text>
            </View>

            <View style={styles.progressTextContainer}>
              <Text style={styles.congratsText}>Você está indo muito bem!</Text>
              <Text style={styles.continueText}>Faltam apenas 2 exercícios para bater a meta da semana. Continue assim!</Text>
            </View>
          </View>

          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '78%' }]} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  headerTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.gray,
    marginTop: 5,
    lineHeight: 20,
  },
  notificationBtn: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: Colors.error || '#ef4444',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.text,
    marginLeft: 8,
  },
  badge: {
    backgroundColor: Colors.primary + '15',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  exerciseBox: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  exerciseDetail: {
    fontSize: 13,
    color: Colors.gray,
    marginTop: 2,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  timeText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.gray,
    marginLeft: 5,
  },
  exerciseImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginLeft: 10,
  },
  progressCard: {
    marginTop: 5,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  progressTextContainer: {
    flex: 1,
  },
  congratsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.text,
  },
  continueText: {
    fontSize: 13,
    color: Colors.gray,
    marginTop: 2,
    lineHeight: 18,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
});

export default HomeScreen;