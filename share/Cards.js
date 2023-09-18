import React from "react";
import { View, StyleSheet } from "react-native";

export default function Cards(props){
    return(
        <View style={styles.card}>
            <View>{props.children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "#fff",
      justifyContent: "center",
  
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 2,
  
      padding: 12,
      marginHorizontal: 1,
      marginVertical: 6,
    },
  });