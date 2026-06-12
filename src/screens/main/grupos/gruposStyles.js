import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
   
  },

  container_area: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },

 
  stats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  stat: {
    fontSize: 22,
    fontWeight: "bold",
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
    maxWidth: 280,
  },

  addButton: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  divider: {
    height: 2,
    backgroundColor: "#000",
    marginVertical: 25,
  },

  groupCard: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
  },

  groupName: {
    fontSize: 28,
    fontWeight: "bold",
  },

  membersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  membersText: {
    fontSize: 18,
    color: "#555",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

});
export default styles;