
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./aprenderStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { buscarPlanoHoje } from "../../../services/api";

export default function Aprender({ navigation }) {
    const [plano, setPlano] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function carregarPlano() {
            try {
                const data = await buscarPlanoHoje();
                setPlano(data);
            } catch (error) {
                const textoErro = "Nao foi possivel carregar o plano.";
                setErro(textoErro);
                console.log(textoErro, error.message);
            } finally {
                setCarregando(false);
            }
        }

        carregarPlano();
    }, []);

    const dias = plano?.dias || [];
    const licoes = plano?.licoes || [];

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.container_scroll}>
                {/* Dias */}

                <View style={styles.daysContainer}>
                    {dias.map((dia) => (
                        <View
                            key={dia.id}
                            style={dia.hoje ? styles.todayCard : styles.dayCard}
                        >
                            <Text style={dia.hoje ? styles.todayText : styles.dayText}>
                                {dia.nome}
                            </Text>
                            <Text style={dia.hoje ? styles.todayNumber : styles.dayNumber}>
                                {dia.numero}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* Plano de Hoje */}

                <View style={styles.planCard}>
                    <Text style={styles.planTitle}>Plano de hoje</Text>

                    <Text style={styles.planDate}>
                        {plano ? `${plano.dia} • ${plano.data}` : "Carregando..."}
                    </Text>

                    <Text style={styles.progressLabel}>
                        Lições concluídas
                    </Text>

                    <View style={styles.progressBar}>
                        <Text style={styles.progressText}>
                            {plano ? `${plano.concluidas}/${plano.total}` : "0/0"}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Explorar conteúdo →
                        </Text>
                    </TouchableOpacity>
                </View>

                {carregando ? (
                    <Text style={styles.statusText}>Carregando plano...</Text>
                ) : null}

                {erro ? <Text style={styles.statusText}>{erro}</Text> : null}

                {/* Timeline */}

                {licoes.map((licao) => (
                    <View key={licao.id} style={styles.timelineItem}>
                        <View style={styles.circle} />

                        <View style={styles.lessonCard}>
                            <View style={styles.subjectHeader}>
                                <Text style={styles.subjectText}>
                                    {licao.materia}
                                </Text>
                            </View>

                            <View style={styles.lessonContent}>
                                <Text style={styles.lessonTitle}>
                                    {licao.titulo}
                                </Text>

                                <Text style={styles.lessonDescription}>
                                    {licao.descricao}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}

                <View style={{ height: 100 }} />

            </ScrollView>

            <Footer
                navigation={navigation}
                active="Aprender"
            />
        </View>
    );
}
