import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./gruposStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { criarGrupo, listarGrupos } from "../../../services/api";

export default function Grupos({ navigation }) {
    const [groups, setGroups] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    async function carregarGrupos() {
        try {
            const data = await listarGrupos();
            setGroups(data);
            setErro("");
        } catch (error) {
            const textoErro = "Nao foi possivel carregar os grupos.";
            setErro(textoErro);
            console.log(textoErro, error.message);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarGrupos();
    }, []);

    const adicionarGrupo = async () => {
        try {
            const novoGrupo = await criarGrupo(`novo grupo ${groups.length + 1}`);
            setGroups((gruposAtuais) => [...gruposAtuais, novoGrupo]);
        } catch (error) {
            const textoErro = "Nao foi possivel criar o grupo.";
            setErro(textoErro);
            console.log(textoErro, error.message);
        }
    };

    return (
        <View style={styles.container}>
             <Header />
            <ScrollView style={styles.container_area}>
                
                {/* Title */}
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.title}>👨‍👩‍👧‍👦 Meus grupos</Text>
                        <Text style={styles.subtitle}>
                            Crie grupos com seus amigos e estabeleça metas de estudo em conjunto.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.addButton} onPress={adicionarGrupo}>
                        <Ionicons name="add" size={28} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />

                {carregando ? (
                    <Text style={styles.statusText}>Carregando grupos...</Text>
                ) : null}

                {erro ? <Text style={styles.statusText}>{erro}</Text> : null}

                {/* Groups */}
                {groups.map((group) => (
                    <TouchableOpacity key={group.id} style={styles.groupCard}>
                        <Text style={styles.groupName}>⭐ {group.nome}</Text>

                        <View style={styles.membersContainer}>
                            <Ionicons name="people-outline" size={18} color="#555" />
                            <Text style={styles.membersText}>
                                {" "}
                                {group.membros} membros
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Bottom Navigation */}


            </ScrollView>

            <Footer
                navigation={navigation}
                active="Grupos"
            />
        </View>
    );
}
