
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, } from "react-native";

import styles from "./aprenderStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Aprender({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.container_scroll}>
                {/* Dias */}

                <View style={styles.daysContainer}>
                    <View style={styles.dayCard}>
                        <Text style={styles.dayText}>Seg</Text>
                        <Text style={styles.dayNumber}>8</Text>
                    </View>

                    <View style={styles.todayCard}>
                        <Text style={styles.todayText}>Hoje</Text>
                        <Text style={styles.todayNumber}>9</Text>
                    </View>

                    <View style={styles.dayCard}>
                        <Text style={styles.dayText}>Qua</Text>
                        <Text style={styles.dayNumber}>10</Text>
                    </View>

                    <View style={styles.dayCard}>
                        <Text style={styles.dayText}>Qui</Text>
                        <Text style={styles.dayNumber}>11</Text>
                    </View>

                    <View style={styles.dayCard}>
                        <Text style={styles.dayText}>Sex</Text>
                        <Text style={styles.dayNumber}>12</Text>
                    </View>
                </View>

                {/* Plano de Hoje */}

                <View style={styles.planCard}>
                    <Text style={styles.planTitle}>Plano de hoje</Text>

                    <Text style={styles.planDate}>
                        Terça • 9 junho
                    </Text>

                    <Text style={styles.progressLabel}>
                        Lições concluídas
                    </Text>

                    <View style={styles.progressBar}>
                        <Text style={styles.progressText}>0/6</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Explorar conteúdo →
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Timeline */}

                <View style={styles.timelineItem}>
                    <View style={styles.circle} />

                    <View style={styles.lessonCard}>
                        <View style={styles.subjectHeader}>
                            <Text style={styles.subjectText}>
                                Matemática
                            </Text>
                        </View>

                        <View style={styles.lessonContent}>
                            <Text style={styles.lessonTitle}>
                                O que é uma Fração
                            </Text>

                            <Text style={styles.lessonDescription}>
                                Numerador, denominador e a ideia
                                de fração como parte de um todo...
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 100 }} />

            </ScrollView>

            <Footer
                navigation={navigation}
                active="Treinar"
            />
        </View>
    );
}