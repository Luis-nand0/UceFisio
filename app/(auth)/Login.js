import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Alert, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

//estilo
import { Colors, GlobalStyles } from '../../constants/Theme'; 

export default function Login() {
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [esconderSenha, setEsconderSenha] = useState(true);

    //funcao login
    const sendLogin = () => {
        const mockLogin = {
            'Email': 'teste@teste',
            'Senha': '123'
        };

        if (email === mockLogin.Email && senha === mockLogin.Senha) {
            console.log('logado');
            router.replace('/HomeScreen'); 
        } else {
            Alert.alert("Erro", "Usuário ou senha inválidos!");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Text style={[styles.brand, { color: Colors.primary }]}>APP FISIO</Text>
                </View>


                <View style={GlobalStyles.card}>
                    <Text style={styles.title}>Login</Text>
                    
                    <Text style={styles.label}>E-MAIL</Text>
                    <View style={GlobalStyles.inputContainer}>
                        <MaterialCommunityIcons name="email-outline" size={20} color={Colors.primary} style={styles.iconStyle} />
                        <TextInput 
                            style={styles.input}
                            placeholder="exemplo@email.com" 
                            onChangeText={setEmail} 
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <Text style={styles.label}>SENHA</Text>
                    <View style={GlobalStyles.inputContainer}>
                        <MaterialCommunityIcons name="lock-outline" size={20} color={Colors.primary} style={styles.iconStyle} />
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua senha" 
                            secureTextEntry={esconderSenha}
                            onChangeText={setSenha} 
                            value={senha}
                        />
                        <TouchableOpacity 
                            onPress={() => setEsconderSenha(!esconderSenha)}
                            style={styles.eyeButton}
                        >
                            <MaterialCommunityIcons 
                                name={esconderSenha ? "eye-off-outline" : "eye-outline"} 
                                size={22} 
                                color={Colors.gray} 
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={GlobalStyles.button} onPress={sendLogin}>
                        <Text style={GlobalStyles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/Cadastro')}>
                        <Text style={styles.linkText}>Não tem cadastro? Cadastre-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/RecoverScreen')}>
                        <Text style={styles.linkText}>Recuperar senha</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 25 },
    header: { alignItems: 'center', marginBottom: 40 },
    brand: { fontSize: 22, fontWeight: 'bold', letterSpacing: 1 },
    title: { fontSize: 24, fontWeight: '800', color: Colors.text, textAlign: 'center', marginBottom: 10 },
    label: { fontSize: 11, fontWeight: 'bold', color: Colors.gray, marginBottom: 8, letterSpacing: 1 },
    iconStyle: { marginRight: 10 },
    input: { flex: 1, height: 55, fontSize: 16, color: Colors.text },
    eyeButton: { paddingLeft: 10 },
    linkButton: { marginTop: 20, alignItems: 'center' },
    linkText: { color: Colors.textLight, fontSize: 14 }
});