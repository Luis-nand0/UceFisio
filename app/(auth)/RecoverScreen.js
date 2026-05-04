import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

//estilo
import { Colors, GlobalStyles } from '../../constants/Theme'; 


const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function RecoverScreen() {
    const router = useRouter();

    const [tela, setTela] = useState(1);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    const [esconderSenha, setEsconderSenha] = useState(true);

    // função enviar código
    const enviarEmail = async() => {
        const mockUsuarios = ['teste@teste'];
        const verificarUsuarios = mockUsuarios.includes(email.toLocaleLowerCase().trim());

        const apiUrl = process.env.EXPO_PUBLIC_API_URL;


        const body = {
            "email": email
        }

        const response  = await fetch(apiUrl.concat('/api/v1/auth/forgot-password'),{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        console.log(response)

        const data = await response.json()
        
        console.log(data)

        if (response.status === 201) {
            setTela(2);
            setCode('');
            setNewPassword('');
        } else {
            Alert.alert("Erro", "E-mail não cadastrado!");
        }
    };

    //função alterar senha
    const alterarSenha = async() => {
        
        const body = {
            email: email,
            code: code,
            password: newPassword,
            confirmPassword: newPassword
        };

        const response = await fetch(apiUrl.concat('/api/v1/auth/reset-password'),{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        console.log(response)

        const data = await response.json()

        if (response.status === 201) {
            console.log('Data', data)
            Alert.alert("Sucesso", "Senha alterada com sucesso!", [
                { text: "OK", onPress: () => router.push('/Login') }
            ]);
        } else {
            Alert.alert("Erro", "Código inválido!");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Text style={[styles.brand, { color: Colors.primary }]}>APP FISIO</Text>
                </View>
                <View style={GlobalStyles.card}>
                    <Text style={styles.title}>Recuperar Senha</Text>
                    
                    {tela === 1 ? (
                        <View>
                            <Text style={styles.subtitle}>Insira seu e-mail para receber um código de 8 dígitos.</Text>
                            
                            <Text style={styles.label}>E-MAIL CADASTRADO</Text>
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

                            <TouchableOpacity style={GlobalStyles.button} onPress={enviarEmail}>
                                <Text style={GlobalStyles.buttonText}>Enviar Código</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/Login')}>
                                <Text style={styles.linkText}>← Voltar ao Login</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.subtitle}>Digite o código enviado e sua nova senha abaixo.</Text>

                            <Text style={styles.label}>CÓDIGO DE ACESSO</Text>
                            <View style={GlobalStyles.inputContainer}>
                                <MaterialCommunityIcons name="numeric-8-box-outline" size={20} color={Colors.primary} style={styles.iconStyle} />
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Digite o código" 
                                    onChangeText={setCode} 
                                    value={code}
                                />
                            </View>

                            <Text style={styles.label}>NOVA SENHA</Text>
                            <View style={GlobalStyles.inputContainer}>
                                <MaterialCommunityIcons name="lock-outline" size={20} color={Colors.primary} style={styles.iconStyle} />
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Nova Senha" 
                                    secureTextEntry={esconderSenha}
                                    onChangeText={setNewPassword} 
                                    value={newPassword}
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

                            <TouchableOpacity style={GlobalStyles.button} onPress={alterarSenha}>
                                <Text style={GlobalStyles.buttonText}>Confirmar Alteração</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.linkButton} onPress={() => setTela(1)}>
                                <Text style={styles.linkText}>Reenviar e-mail</Text>
                            </TouchableOpacity>
                        </View>
                    )}
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
    subtitle: { fontSize: 14, color: Colors.textLight, textAlign: 'center', marginBottom: 25, lineHeight: 20 },
    label: { fontSize: 11, fontWeight: 'bold', color: Colors.gray, marginBottom: 8, letterSpacing: 1 },
    iconStyle: { marginRight: 10 },
    input: { flex: 1, height: 55, fontSize: 16, color: Colors.text },
    eyeButton: { paddingLeft: 10 },
    linkButton: { marginTop: 20, alignItems: 'center' },
    linkText: { color: Colors.textLight, fontSize: 14 }
});