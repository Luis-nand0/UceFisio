import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, GlobalStyles } from '../../constants/Theme';
import { useRouter, useLocalSearchParams } from 'expo-router';

const apiUrl = "http://192.168.1.5:8080"; 

export default function FeedbackScreen() {
  const router = useRouter();
  
  const { executionId } = useLocalSearchParams();
  const idDaExecucao = executionId || 901; 

  const [selectedScore, setSelectedScore] = useState(null);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const feedbackOptions = [
    { score: 0, label: 'Sem Dor/Esforço', desc: 'Absolutamente confortável', emoji: 'emoticon-happy-outline' },
    { score: 2, label: 'Leve', desc: 'Atividade tranquila e sustentável', emoji: 'emoticon-neutral-outline' },
    { score: 5, label: 'Moderado', desc: 'Senti o esforço, mas sem dor', emoji: 'emoticon-neutral-outline', color: '#15803d' },
    { score: 8, label: 'Intenso', desc: 'Exigiu bastante concentração', emoji: 'emoticon-sad-outline' },
    { score: 10, label: 'Exaustão', desc: 'Limite físico atingido', emoji: 'emoticon-cry-outline' },
  ];

  const handleSaveFeedback = async () => {
    if (selectedScore === null) {
      Alert.alert('Atenção', 'Por favor, selecione como você se sente antes de salvar.');
      return;
    }

    setLoading(true);

    try {
      const endpoint = apiUrl
        .concat('/api/v1/app/home/plan/executions/')
        .concat(idDaExecucao)
        .concat('/feedback');

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          score: selectedScore,
          notes: notes.trim()
        })
      });

              body1 = JSON.stringify({
          score: selectedScore,
          notes: notes.trim()
        })
                console.log('bbody', body)

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Sucesso', 'Feedback registrado com sucesso!', [
          { text: 'OK', onPress: () => router.dismissAll() }
        ]);
      } else if (response.status === 409) {
        Alert.alert('Aviso', 'O feedback para esta execução já foi registrado anteriormente.');
      } else {
        Alert.alert('Erro', `Falha ao registrar feedback. Código: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro de Rede', 'Não foi possível conectar ao servidor. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="close" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>UNIFAE Care</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.sessionFinished}>SESSÃO FINALIZADA</Text>
        <Text style={styles.mainTitle}>Como você se sente?</Text>
        <Text style={styles.subtitle}>
          Avalie seu nível de dor e esforço após o exercício para que possamos ajustar seu plano.
        </Text>

        <View style={styles.optionsContainer}>
          {feedbackOptions.map((item) => {
            const isSelected = selectedScore === item.score;
            return (
              <TouchableOpacity
                key={item.score}
                activeOpacity={0.7}
                onPress={() => setSelectedScore(item.score)}
                style={[
                  styles.optionCard,
                  isSelected && { borderColor: Colors.primary, borderWidth: 2, backgroundColor: Colors.primary + '05' }
                ]}
              >
                <View style={styles.cardLeft}>
                  <View style={[styles.emojiContainer, isSelected && { backgroundColor: Colors.primary + '15' }]}>
                    <MaterialCommunityIcons 
                      name={item.emoji} 
                      size={28} 
                      color={isSelected ? Colors.primary : '#b4be9a'} 
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={[styles.label, item.color ? { color: item.color } : { color: Colors.text }]}>
                      {item.label}
                    </Text>
                    <Text style={styles.desc}>{item.desc}</Text>
                  </View>
                </View>
                <Text style={[styles.scoreNumber, isSelected && { color: Colors.primary }]}>
                  {item.score}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.obsWrapper}>
          <Text style={styles.obsTitle}>Observações Adicionais</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Descreva qualquer desconforto específico ou comentário sobre os exercícios de hoje..."
            placeholderTextColor={Colors.gray}
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        <TouchableOpacity 
          style={[styles.finishButton, loading && { opacity: 0.7 }]} 
          onPress={handleSaveFeedback}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.finishButtonText}>Salvar Feedback</Text>
          )}
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background || '#f8fafc' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#f1f5f9'
  },
  headerTitle: { fontSize: 16, fontWeight: '700', color: Colors.text },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 20 },
  
  sessionFinished: { fontSize: 13, fontWeight: 'bold', color: '#15803d', textAlign: 'center', letterSpacing: 1, marginBottom: 5 },
  mainTitle: { fontSize: 28, fontWeight: '800', color: Colors.text, textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 15, color: Colors.gray, textAlign: 'center', lineHeight: 22, paddingHorizontal: 10, marginBottom: 25 },
  
  optionsContainer: { marginBottom: 25 },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  cardLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  emojiContainer: { width: 45, height: 45, borderRadius: 12, backgroundColor: '#f1f5f9', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  textContainer: { flex: 1, paddingRight: 10 },
  label: { fontSize: 16, fontWeight: '700', marginBottom: 2 },
  desc: { fontSize: 12, color: Colors.gray },
  scoreNumber: { fontSize: 24, fontWeight: '800', color: '#cbd5e1' },

  obsWrapper: { backgroundColor: '#fff', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#f1f5f9', marginBottom: 25 },
  obsTitle: { fontSize: 15, fontWeight: '700', color: Colors.text, marginBottom: 10 },
  textInput: { height: 80, textAlignVertical: 'top', fontSize: 14, color: Colors.text },

  footerBrand: { alignItems: 'center', paddingVertical: 20, marginBottom: 15 },
  brandText: { fontSize: 18, fontWeight: 'bold', color: '#15803d' },
  brandSub: { fontSize: 12, color: Colors.gray, marginTop: 2 },

 finishButton: { 
    backgroundColor: Colors.primary, 
    padding: 18, 
    borderRadius: 18, 
    alignItems: 'center', 
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
  }
});