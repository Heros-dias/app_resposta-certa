import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { loginUsuario, testarConexao } from "../../../services/api";
import styles from "./loginStyles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const verificarBackend = async () => {
    try {
      const data = await testarConexao();
      console.log("Backend:", data);
    } catch (err) {
      console.log("Backend indisponivel:", err.message);
    }
  };

  useEffect(() => {
    verificarBackend();
  }, []);

  const fazerLogin = async () => {
    setMensagem("");
    setCarregando(true);

    try {
      const usuario = await loginUsuario({
        email,
        senha,
      });

      console.log("Usuario logado:", usuario.nome);
      navigation.replace("Treinar", { usuario });
    } catch (erro) {
      const textoErro =
        erro.response?.data?.message ||
        erro.message ||
        "Nao foi possivel fazer login.";

      setMensagem(textoErro);
      console.log("Erro login:", textoErro);
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

        <Text style={styles.titulo}>Entrar</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />

        {mensagem ? <Text style={styles.feedbackErro}>{mensagem}</Text> : null}

        <TouchableOpacity
          style={[styles.botao, carregando && styles.botaoDesativado]}
          onPress={fazerLogin}
          disabled={carregando}
        >
          <Text style={styles.botaoTexto}>
            {carregando ? "Entrando..." : "Entrar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
