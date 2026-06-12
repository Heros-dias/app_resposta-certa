import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./FooterStyles";

export default function Footer({ navigation, active }) {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => navigation.navigate("Treinar")}>
        <Text style={active === "Treinar" ? styles.active : styles.text}>
          🖍️{"\n"}Treinar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Aprender")}>
        <Text style={active === "Aprender" ? styles.active : styles.text}>
          📖{"\n"}Aprender
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Ranking")}>
        <Text style={active === "Ranking" ? styles.active : styles.text}>
          🏆{"\n"}Ranking
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Grupos")}>
        <Text style={active === "Grupos" ? styles.active : styles.text}>
          👨‍👩‍👧{"\n"}Grupos
        </Text>
      </TouchableOpacity>
    </View>
  );
}