// InicioScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Noticias Importantes</Text>
      <Text style={styles.news}>
        1. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.news}>
        2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.news}>
        3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.news}>
        4. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.news}>
        5. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {/* Agrega más noticias según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  logo: {
    maxWidth: 200, // Ajusta el tamaño del logo según tus necesidades
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  news: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default InicioScreen;
