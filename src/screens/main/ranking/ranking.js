import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, } from "react-native";

import styles from "./rankingStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Ranking({ navigation }) {
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
          <Text style={styles.positionNumber}>#12</Text>
          <Text style={styles.positionText}>
            Sua posição geral
          </Text>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>174</Text>
            <Text style={styles.statLabel}>Pontos</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>82%</Text>
            <Text style={styles.statLabel}>Acertos</Text>
          </View>
        </View>

        {/* Ranking */}
        <Text style={styles.sectionTitle}>
          Top Estudantes
        </Text>

        <View style={styles.userCard}>
          <Text style={styles.userPosition}>🥇</Text>
          <Text style={styles.userName}>Ana Silva</Text>
          <Text style={styles.userScore}>326 pts</Text>
        </View>

        <View style={styles.userCard}>
          <Text style={styles.userPosition}>🥈</Text>
          <Text style={styles.userName}>Carlos Souza</Text>
          <Text style={styles.userScore}>298 pts</Text>
        </View>

        <View style={styles.userCard}>
          <Text style={styles.userPosition}>🥉</Text>
          <Text style={styles.userName}>Maria Costa</Text>
          <Text style={styles.userScore}>275 pts</Text>
        </View>

        <View style={styles.userCard}>
          <Text style={styles.userPosition}>4º</Text>
          <Text style={styles.userName}>João Lima</Text>
          <Text style={styles.userScore}>251 pts</Text>
        </View>

        <View style={styles.userCard}>
          <Text style={styles.userPosition}>12º</Text>
          <Text style={styles.userName}>Você</Text>
          <Text style={styles.userScore}>174 pts</Text>
        </View>
      </ScrollView>

      {/* Menu Inferior */}
     <Footer
             navigation={navigation}
             active="Treinar"
           />
    </View>
  );
}