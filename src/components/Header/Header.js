import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { buscarEstatisticas } from "../../services/api";
import styles from "./HeaderStyles";

export default function Header() {
    const [estatisticas, setEstatisticas] = useState({
        streak: 0,
        pontos: 0,
    });

    useEffect(() => {
        async function carregarEstatisticas() {
            try {
                const data = await buscarEstatisticas();
                setEstatisticas(data);
            } catch (erro) {
                console.log("Erro estatisticas:", erro.message);
            }
        }

        carregarEstatisticas();
    }, []);

    return (

        <View style={styles.header}>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
            />

            <View style={styles.headerInfo}>
                <Text style={styles.headerText}>🔥 {estatisticas.streak}</Text>
                <Text style={styles.headerText}>⭐ {estatisticas.pontos}</Text>
                <Text style={styles.headerText}>👤</Text>
            </View>
        </View>

    );
}
