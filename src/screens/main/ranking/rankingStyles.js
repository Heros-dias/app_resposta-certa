import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },


  icon: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    margin: 20,
  },

  subtitle: {
    marginHorizontal: 20,
    marginBottom: 20,
    color: "#555",
    fontSize: 16,
  },

  positionCard: {
    backgroundColor: "#FFE58F",
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#444",
    alignItems: "center",
  },

  positionNumber: {
    fontSize: 42,
    fontWeight: "bold",
  },

  positionText: {
    marginTop: 5,
    fontSize: 16,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#666",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 15,
  },

  userCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  userPosition: {
    fontWeight: "bold",
    width: 40,
  },

  userName: {
    flex: 1,
    marginLeft: 10,
  },

  userScore: {
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

  activeTab: {
    color: "#2DA8FF",
    fontWeight: "bold",
  },
});
export default styles;
