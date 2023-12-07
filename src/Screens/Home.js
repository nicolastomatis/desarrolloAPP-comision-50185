import React from "react";
import { View, Text, Button } from "react-native";
import Header from "../Components/Header";

const Home = ({ navigation }) => {
  const handleNavigateBack = () => {
    // Lógica de navegación de vuelta a la pantalla principal
    // Puedes utilizar la función de navegación proporcionada por React Navigation
    navigation.navigate("Home");
  };

  return (
    <View>
      <Header onBack={handleNavigateBack} />
      <Text>Contenido de la pantalla principal</Text>
    </View>
  );
};

export default Home;
