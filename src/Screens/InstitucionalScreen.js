import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InstitucionalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Federación Bioquímica de la Provincia de Buenos Aires
      </Text>
      <Text style={styles.description}>
        La Federación Bioquímica de la provincia de Buenos Aires es una Entidad
        Civil sin fines de lucro y tiene como objeto lograr el constante
        progreso de la profesión bioquímica en sus aspectos éticos, científicos,
        técnicos y económicos, para servir de la mejor forma posible a los
        individuos y a la sociedad.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "justify",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default InstitucionalScreen;
