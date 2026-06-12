import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";

import { cadastrarUsuario } from "../../../services/api";
import styles from "./cadastroStyles";

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(false);

    const fazerCadastro = async () => {
        setMensagem("");
        setCarregando(true);

        try {
            await cadastrarUsuario({ nome, email, senha });
            Alert.alert("Cadastro feito", "Agora voce pode entrar no app.");
            navigation.replace("Login");
        } catch (erro) {
            const textoErro =
                erro.response?.data?.message ||
                erro.message ||
                "Nao foi possivel cadastrar.";

            setMensagem(textoErro);
            console.log("Erro cadastro:", textoErro);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require("../../../../assets/logo.png")}
                    style={styles.logo}
                />

                <Text style={styles.titulo}>Cadastro</Text>

                <Text style={styles.subtitulo}>
                    Crie sua conta para começar.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                {mensagem ? <Text style={styles.feedbackErro}>{mensagem}</Text> : null}

                <TouchableOpacity
                    style={[styles.botao, carregando && styles.botaoDesativado]}
                    onPress={fazerCadastro}
                    disabled={carregando}
                >
                    <Text style={styles.botaoTexto}>
                        {carregando ? "Cadastrando..." : "Cadastrar"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.link}>
                        Já possui conta? Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
