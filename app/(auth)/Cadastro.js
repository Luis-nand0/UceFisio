import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Alert } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const [esconderSenha, setEsconderSenha] = useState(true);

    const primaryColor = "#3abdb2";

    const handleRegister = () => {
        try {
            if (!nome || !email || !senha) {
                Alert.alert("Erro", "Preencha todos os campos");
                return;
            }

            const novoUsuario = {
                nome,
                email,
                senha
            };

            console.log("Usuário cadastrado:", novoUsuario);

            Alert.alert("Sucesso", "Cadastro realizado com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate('Login') }
            ]);

        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível cadastrar");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Text style={[styles.brand, { color: primaryColor }]}>APP FISIO</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Cadastro</Text>
                    
                    <Text style={styles.label}>NOME</Text>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="account-outline" size={20} color={primaryColor} style={styles.iconStyle} />
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu nome" 
                            onChangeText={setNome} 
                            value={nome}
                        />
                    </View>

                    <Text style={styles.label}>E-MAIL</Text>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="email-outline" size={20} color={primaryColor} style={styles.iconStyle} />
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
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="lock-outline" size={20} color={primaryColor} style={styles.iconStyle} />
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
                                color="#b2bec3" 
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.linkText}>Já tem uma conta? Entrar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f4f7f6" },
    scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 25 },
    header: { alignItems: 'center', marginBottom: 40 },
    brand: { fontSize: 22, fontWeight: 'bold', letterSpacing: 1 },
    card: { 
        backgroundColor: '#ffffff', borderRadius: 25, padding: 30, 
        elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.1, shadowRadius: 10 
    },
    title: { fontSize: 24, fontWeight: '800', color: '#2d3436', textAlign: 'center', marginBottom: 10 },
    subtitle: { fontSize: 14, color: '#636e72', textAlign: 'center', marginBottom: 25, lineHeight: 20 },
    label: { fontSize: 11, fontWeight: 'bold', color: '#b2bec3', marginBottom: 8, letterSpacing: 1 },
    
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f3f5',
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    iconStyle: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 55,
        fontSize: 16,
        color: '#2d3436',
    },
    eyeButton: {
        paddingLeft: 10,
    },

    button: { height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    linkButton: { marginTop: 20, alignItems: 'center' },
    linkText: { color: '#636e72', fontSize: 14 },
    footer: { marginTop: 50, alignItems: 'center' },
    footerText: { fontSize: 10, color: '#b2bec3', letterSpacing: 1 }
});