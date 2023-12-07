import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";

const AOLScreen = () => {
  const abrirPaginaAOL = () => {
    Linking.openURL("http://www.aol.faba.org.ar");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de AOL</Text>
      <TouchableOpacity onPress={abrirPaginaAOL} style={styles.button}>
        <Text style={styles.buttonText}>Ir a AOL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue", // Puedes personalizar el color del botón
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white", // Puedes personalizar el color del texto del botón
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AOLScreen;
