import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const [esconderSenha, setEsconderSenha] = useState(true);

    const primaryColor = "#3abdb2";

    const sendLogin = () => {
        const mockLogin = {
            'Email': 'teste@teste',
            'Senha': '123'
        };

        if (email === mockLogin.Email && senha === mockLogin.Senha) {
            console.log('logado');
        } else {
            console.log('usuário não encontrado');
            alert("Usuário não encontrado!");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Text style={[styles.brand, { color: primaryColor }]}>APP FISIO</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Login</Text>
                    
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

                    <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]} onPress={sendLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('cadastro')}>
                        <Text style={styles.linkText}>Não tem cadastro? Cadastre-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('passRecover')}>
                        <Text style={styles.linkText}>Recuperar senha</Text>
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