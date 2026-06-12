import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./CardMateriaStyles";

export default function CardMateria({ materia, onPress }) {
  return (
    <View style={[styles.card, { backgroundColor: materia.cor }]}>
      <View style={styles.cardTop}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{materia.titulo}</Text>

          <Text style={styles.cardDescription}>{materia.descricao}</Text>
        </View>

        <Text style={styles.icon}>{materia.icone}</Text>
      </View>

      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.score}>{materia.nota}</Text>
          <Text style={styles.small}>Sua nota</Text>
        </View>

        <TouchableOpacity style={styles.trainButton} onPress={onPress}>
          <Text style={styles.trainButtonText}>Treinar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
