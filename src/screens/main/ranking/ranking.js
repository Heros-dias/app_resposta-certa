import React, { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./rankingStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { listarRanking } from "../../../services/api";

export default function Ranking({ navigation }) {
  const [ranking, setRanking] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarRanking() {
      try {
        const data = await listarRanking();
        setRanking(data);
      } catch (error) {
        const textoErro = "Nao foi possivel carregar o ranking.";
        setErro(textoErro);
        console.log(textoErro, error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarRanking();
  }, []);

  const usuarioAtual = useMemo(
    () => ranking.find((usuario) => usuario.atual) || ranking[0],
    [ranking]
  );

  const posicaoAtual = usuarioAtual
    ? ranking.findIndex((usuario) => usuario.id === usuarioAtual.id) + 1
    : 0;

  const medalha = (posicao) => {
    if (posicao === 1) return "🥇";
    if (posicao === 2) return "🥈";
    if (posicao === 3) return "🥉";
    return `${posicao}º`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>🏆 Ranking</Text>

        <Text style={styles.subtitle}>
          Veja seu desempenho e compare com outros estudantes.
        </Text>

        {/* Sua posição */}
        <View style={styles.positionCard}>
          <Text style={styles.positionNumber}>#{posicaoAtual || "-"}</Text>
          <Text style={styles.positionText}>
            Sua posição geral
          </Text>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{usuarioAtual?.pontos || 0}</Text>
            <Text style={styles.statLabel}>Pontos</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{usuarioAtual?.acertos || 0}%</Text>
            <Text style={styles.statLabel}>Acertos</Text>
          </View>
        </View>

        {/* Ranking */}
        <Text style={styles.sectionTitle}>
          Top Estudantes
        </Text>

        {carregando ? (
          <Text style={styles.statusText}>Carregando ranking...</Text>
        ) : null}

        {erro ? <Text style={styles.statusText}>{erro}</Text> : null}

        {ranking.map((usuario, index) => (
          <View key={usuario.id} style={styles.userCard}>
            <Text style={styles.userPosition}>{medalha(index + 1)}</Text>
            <Text style={styles.userName}>{usuario.nome}</Text>
            <Text style={styles.userScore}>{usuario.pontos} pts</Text>
          </View>
        ))}
      </ScrollView>

      {/* Menu Inferior */}
     <Footer
             navigation={navigation}
             active="Ranking"
           />
    </View>
  );
}
