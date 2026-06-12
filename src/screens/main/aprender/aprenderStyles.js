
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    container_scroll: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },

    daysContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        paddingHorizontal: 10,
    },

    dayCard: {
        width: 65,
        height: 90,
        backgroundColor: "#fff",
        borderRadius: 18,
        borderWidth: 2,
        borderColor: "#E2E2E2",
        justifyContent: "center",
        alignItems: "center",
    },

    todayCard: {
        width: 70,
        height: 95,
        backgroundColor: "#2DA7FF",
        borderRadius: 18,
        borderWidth: 2,
        borderColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },

    dayText: {
        fontSize: 16,
        color: "#777",
    },

    dayNumber: {
        fontSize: 28,
        fontWeight: "700",
        color: "#000",
    },

    todayText: {
        fontSize: 16,
        color: "#fff",
    },

    todayNumber: {
        fontSize: 28,
        fontWeight: "700",
        color: "#fff",
    },

    planCard: {
        backgroundColor: "#fff",
        margin: 20,
        padding: 20,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: "#E6E6E6",
    },

    planTitle: {
        fontSize: 34,
        fontWeight: "700",
        color: "#111",
    },

    planDate: {
        fontSize: 18,
        color: "#B3B3B3",
        marginTop: 10,
    },

    progressLabel: {
        fontSize: 20,
        color: "#B3B3B3",
        marginTop: 20,
    },

    progressBar: {
        height: 40,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 10,
        marginTop: 15,
    },

    progressText: {
        fontSize: 18,
        fontWeight: "700",
    },

    button: {
        marginTop: 20,
        height: 65,
        borderWidth: 2,
        borderColor: "#E5E5E5",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "#2DA7FF",
        fontSize: 22,
        fontWeight: "500",
    },

    timelineItem: {
        flexDirection: "row",
        paddingHorizontal: 15,
    },

    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 4,
        borderColor: "#D8D8D8",
        marginTop: 25,
        marginRight: 15,
    },

    lessonCard: {
        flex: 1,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: "#6F6F6F",
        overflow: "hidden",
        backgroundColor: "#fff",
    },

    subjectHeader: {
        backgroundColor: "#FFF3D9",
        padding: 10,
    },

    subjectText: {
        color: "#D89A00",
        fontWeight: "600",
        fontSize: 16,
    },

    lessonContent: {
        padding: 15,
    },

    lessonTitle: {
        fontSize: 26,
        fontWeight: "700",
        color: "#111",
    },

    lessonDescription: {
        marginTop: 10,
        color: "#666",
        fontSize: 16,
        lineHeight: 24,
    },

    statusText: {
        color: "#555",
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 20,
        textAlign: "center",
    },
});

export default styles;
