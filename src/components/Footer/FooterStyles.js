import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomBar: {
    height: 80,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#DDD",
  },

  active: {
    color: "#2DA8FF",
    fontWeight: "bold",
    textAlign: "center",
  },

  text: {
    textAlign: "center",
  },
});

export default styles;