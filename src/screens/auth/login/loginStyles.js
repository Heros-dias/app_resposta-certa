import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    padding: 25,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    padding: 25,
    borderWidth: 2,
    borderColor: "#444",
  },

  logo: {
    alignItems: "center",
    justifyContent:"center",
    width:50,
    height: 50,
    textAlign: "center",
    marginBottom: 15,
     resizeMode: "contain",
     marginLeft:118,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginVertical: 15,
    fontSize: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: "#DDD",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#2DA8FF",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  botaoDesativado: {
    opacity: 0.7,
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  feedbackErro: {
    color: "#B00020",
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "600",
  },

  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#2DA8FF",
    fontWeight: "600",
  },
});

export default styles;
