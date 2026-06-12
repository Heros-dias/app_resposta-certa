import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#444",
    overflow: "hidden",
  },

  cardTop: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 18,
    lineHeight: 30,
    color: "#444",
  },

  icon: {
    fontSize: 42,
  },

  cardFooter: {
    backgroundColor: "#FFF",
    borderTopWidth: 2,
    borderColor: "#444",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  score: {
    fontSize: 40,
    fontWeight: "bold",
  },

  small: {
    fontSize: 18,
    color: "#666",
  },

  trainButton: {
    backgroundColor: "#2DA8FF",
    paddingHorizontal: 28,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#444",
  },

  trainButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
