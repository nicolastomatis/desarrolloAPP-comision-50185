import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import productsData from "../Data/products.json";

const NovedadesScreen = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const novedadesData = productsData;

  const renderNovedad = ({ item }) => (
    <View style={styles.novedadContainer}>
      <Text style={styles.categoria}>{item.categoria}</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.contenido}>{item.contenido}</Text>
    </View>
  );

  const obtenerColorPorCategoria = (categoria) => {
    switch (categoria) {
      case "Novedades":
        return "#A27BF9";
      case "Comunicaciones":
        return "#fb9e70";
      case "Comunicaciones Generales":
        return "#6998FA";
      case "Gacetillas":
        return "#62BFB6";
      default:
        return "#CCCCCC";
    }
  };

  const filtrarPorCategoria = (categoria) => {
    setCategoriaSeleccionada(
      categoria === categoriaSeleccionada ? null : categoria
    );
  };

  const categoriasDisponibles = [
    ...new Set(novedadesData.map((item) => item.categoria)),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.botonesContainer}>
        {categoriasDisponibles.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.botonCategoria,
              {
                backgroundColor: obtenerColorPorCategoria(categoria),
              },
              categoria === categoriaSeleccionada && styles.botonSeleccionado,
            ]}
            onPress={() => filtrarPorCategoria(categoria)}
          >
            <Text style={{ color: "white" }}>{categoria}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={
          categoriaSeleccionada
            ? novedadesData.filter(
                (item) => item.categoria === categoriaSeleccionada
              )
            : novedadesData
        }
        keyExtractor={(item) => item.id}
        renderItem={renderNovedad}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },
  botonesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  botonCategoria: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  botonSeleccionado: {
    // Estilo cuando el botón está seleccionado
  },
  contentContainer: {
    width: "100%",
  },
  novedadContainer: {
    justifyContent: "center",
    marginBottom: 20,
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

export default NovedadesScreen;
