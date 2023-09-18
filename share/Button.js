
import  React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FlatButton ({ title, onPress }) {
    return(
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}> 
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: "#F01D71",
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
    },
  });