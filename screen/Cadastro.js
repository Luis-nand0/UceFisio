import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
//Pull
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

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");

    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível cadastrar");
    }
  };

  return (
    <View>
      <TextInput  placeholder="Nome" value={nome} onChangeText={setNome}></TextInput>  
      <TextInput placeholder="Email" value={email} onChangeText={setEmail}></TextInput>  
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha}></TextInput>  

      <TouchableOpacity onPress={handleRegister}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Já tem uma conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}