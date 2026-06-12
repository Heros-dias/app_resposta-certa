import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./gruposStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { ScrollView } from "react-native-web";

export default function Grupos({ navigation }) {
    const groups = [
        {
            id: 1,
            name: "estudys",
            members: 3,
        },
        {
            id: 2,
            name: "amo estudar",
            members: 2,
        },
    ];

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

                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="add" size={28} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />

                {/* Groups */}
                {groups.map((group) => (
                    <TouchableOpacity key={group.id} style={styles.groupCard}>
                        <Text style={styles.groupName}>⭐ {group.name}</Text>

                        <View style={styles.membersContainer}>
                            <Ionicons name="people-outline" size={18} color="#555" />
                            <Text style={styles.membersText}>
                                {" "}
                                {group.members} membros
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Bottom Navigation */}


            </ScrollView>

            <Footer
                navigation={navigation}
                active="Treinar"
            />
        </View>
    );
}

