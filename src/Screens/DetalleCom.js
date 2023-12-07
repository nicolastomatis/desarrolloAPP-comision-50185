import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetalleScreen = ({ route }) => {
  const { novedad } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>{novedad.categoria}</Text>
      <Text style={styles.titulo}>{novedad.titulo}</Text>
      <Text style={styles.contenido}>{novedad.contenido}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoria: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contenido: {
    fontSize: 14,
  },
});

export default DetalleScreen;
