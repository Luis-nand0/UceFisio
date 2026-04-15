import { useState } from "react";
import { TextInput, View, Text } from "react-native-web";


export default function Cadastro(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View>
            <Text>Nome</Text>
            <TextInput placeholder="Digite o seu nome:" onChangeText={setNome}></TextInput>

            <Text>Email</Text>

        </View>
    )
}