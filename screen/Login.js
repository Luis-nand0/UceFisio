import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, View, Text } from "react-native-web";

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
            <TouchableOpacity onPress={sendLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('cadastro')}}>
                <Text> Não tem cadastro ? cadastre-se </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('passRecover')}}>
                <Text> Recuperar senha </Text>
            </TouchableOpacity>
        </View>
    )
}