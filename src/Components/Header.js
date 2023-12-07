import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import InicioScreen from "../Screens/InicioScreen"; // Importa tus componentes de pantalla
import InstitucionalScreen from "../Screens/InstitucionalScreen";
import AOLScreen from "../Screens/AOLScreen";
import NovedadesScreen from "../Screens/NovedadesScreen";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openMenu = (menu) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "InicioScreen":
        return <InicioScreen />;
      case "Institucional":
        return <InstitucionalScreen />;
      case "AOL":
        return <AOLScreen />;
      case "Novedades":
        return <NovedadesScreen />;
      default:
        return <InicioScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderContent()}</View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => openMenu("Inicio")}>
          <Image
            source={require("../../assets/icons/inicio.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openMenu("Institucional")}>
          <Image
            source={require("../../assets/icons/institucional.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openMenu("AOL")}>
          <Image
            source={require("../../assets/icons/aol.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openMenu("Novedades")}>
          <Image
            source={require("../../assets/icons/novedades.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: 10,
    height: 100,
    backgroundColor: "#0073A2",
  },
  icon: {
    maxWidth: 45, // Ajusta el ancho máximo según tus necesidades
    maxHeight: 45, // Ajusta el alto máximo según tus necesidades
  },
});

export default Header;
