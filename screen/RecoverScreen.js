import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
// IMPORT DE ÍCONES
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RecoverScreen({ navigation }) {
    const [tela, setTela] = useState(1);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    
    // ESTADO PARA MOSTRAR/ESCONDER SENHA
    const [esconderSenha, setEsconderSenha] = useState(true);

    const primaryColor = "#3abdb2";

    const enviarEmail = () => {
        const mockUsuarios = ['teste@teste'];
        const verificarUsuarios = mockUsuarios.includes(email.toLocaleLowerCase().trim());

        if (verificarUsuarios) {
            setTela(2);
            setCode('');
            setNewPassword('');
        } else {
            alert("E-mail não cadastrado!");
        }
    };

    const alterarSenha = () => {
        const validCode = "12345678";
        if (code === validCode) {
            alert("Senha alterada com sucesso!");
            navigation.navigate('Login');
        } else {
            alert("Código inválido!");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Text style={[styles.brand, { color: primaryColor }]}>APP FISIO</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Recuperar Senha</Text>
                    
                    {tela === 1 ? (
                        <View>
                            <Text style={styles.subtitle}>Insira seu e-mail para receber um código de 8 dígitos.</Text>
                            
                            <Text style={styles.label}>E-MAIL CADASTRADO</Text>
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

                            <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]} onPress={enviarEmail}>
                                <Text style={styles.buttonText}>Enviar Código</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.linkText}>← Voltar ao Login</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.subtitle}>Digite o código enviado e sua nova senha abaixo.</Text>

                            <Text style={styles.label}>CÓDIGO DE ACESSO</Text>
                            <View style={styles.inputContainer}>
                                <MaterialCommunityIcons name="numeric-8-box-outline" size={20} color={primaryColor} style={styles.iconStyle} />
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Digite o código" 
                                    onChangeText={setCode} 
                                    value={code}
                                />
                            </View>

                            <Text style={styles.label}>NOVA SENHA</Text>
                            <View style={styles.inputContainer}>
                                <MaterialCommunityIcons name="lock-outline" size={20} color={primaryColor} style={styles.iconStyle} />
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
                                        color="#b2bec3" 
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]} onPress={alterarSenha}>
                                <Text style={styles.buttonText}>Confirmar Alteração</Text>
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
    
    // CONTAINER PARA INPUTS COM ÍCONES
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