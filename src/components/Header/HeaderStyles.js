import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  header: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  headerInfo: {
    flexDirection: "row",
    gap: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default styles;