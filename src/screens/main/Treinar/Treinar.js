import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";


import styles from "./TreinarStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CardMateria from "../../../components/CardMateria/CardMateria";
import { listarAreas } from "../../../services/api";

export default function Treinar({ navigation }) {
  const [areas, setAreas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarAreas() {
      try {
        const data = await listarAreas();
        setAreas(data);
      } catch (error) {
        const textoErro = "Nao foi possivel carregar as areas.";
        setErro(textoErro);
        console.log(textoErro, error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarAreas();
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TÍTULO */}
        <View style={styles.section}>
          <Text style={styles.title}>🖍️ Treinar</Text>

          <Text style={styles.subtitle}>
            Treine com questões ajustadas ao seu nível e descubra sua nota com o
            TRI.
          </Text>

          <View style={styles.line} />
        </View>

        {/* ABAS */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>📚 Áreas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>🎯 Competências</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>🛠️ Habilidades</Text>
          </TouchableOpacity>
        </View>

        {carregando ? (
          <Text style={styles.statusText}>Carregando areas...</Text>
        ) : null}

        {erro ? <Text style={styles.statusText}>{erro}</Text> : null}

        {areas.map((area) => (
          <CardMateria key={area.id} materia={area} />
        ))}
      </ScrollView>

      {/* MENU INFERIOR */}
      <Footer
        navigation={navigation}
        active="Treinar"
      />
    </View>
  );
}
