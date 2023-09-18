import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

export default function Header({ navigation, title }){
    const openMenu =()=>{
        navigation.openDrawer();
    }
    return(
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <MaterialIcons name="menu" size={30} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle} >
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText} >{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
      width: "100%",
      minWidth: "100%",
      height: "100%",
      minHeight: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  
    headerTitle: {
      flexDirection: "row",
    },
  
    headerText: {
      fontFamily: "nunito-bold",
      fontSize: 20,
      color: "#333",
      letterSpacing: 1,
    },
  
    headerImage: {
      width: 26,
      height: 26,
      marginHorizontal: 10,
    },
  
    icon: {
      position: "absolute",
      left: 0,
    },
  });