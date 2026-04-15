import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, View } from "react-native-web";

export default function Login({ navigation }){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const sendLogin = ()=>{
        const mockLogin = {
            'Email': 'teste@teste',
            'Senha': '123'
        }

        email === mockLogin.Email && senha === mockLogin.Senha ? console.log('logado') : console.log('usuário não encontrado')
    }

    return(
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail}></TextInput>
            <TextInput placeholder="Senha" onChangeText={setSenha}></TextInput>
            <TouchableOpacity onPress={sendLogin}>Entrar</TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navitage('cadastro')}}>Não tem cadastro ? cadastre-se</TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navitage('passRecover')}}>Recuperar senha</TouchableOpacity>
        </View>
    )
}