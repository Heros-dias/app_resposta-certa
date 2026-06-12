
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  section: {
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#555",
    lineHeight: 28,
  },

  line: {
    height: 2,
    backgroundColor: "#444",
    marginTop: 25,
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },

  activeTab: {
    backgroundColor: "#2DA8FF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },

  activeTabText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  tab: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },

  tabText: {
    fontSize: 18,
    fontWeight: "600",
  },

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
  },

  cardTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 18,
    width: 230,
    lineHeight: 30,
    color: "#444",
  },

  icon: {
    fontSize: 45,
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
    paddingHorizontal: 35,
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

  statusText: {
    color: "#555",
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  bottomBar: {
    height: 80,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#DDD",
  },

  activeBottom: {
    color: "#2DA8FF",
    fontWeight: "bold",
  },
});
export default styles;
