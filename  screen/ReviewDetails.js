import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Cards from "../share/Cards";
import { globalStyles, images } from "../styles/Global";

export default function ReviewDetails({ navigation, route }){
   
    const rating = route.params.rating;

    return (
        <View style={globalStyles.container}>
                <Cards>    
                    <Text>{route.params.title}</Text>
                    <Text>{route.params.body}</Text>
                    <View style={styles.rating} >
                        <Text>Game Rating</Text>
                        <Image source={images.ratings[rating]} />
                    </View>
                </Cards>
           
        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
      flexDirection: "row",
      justifyContent: "center",
      borderTopWidth: 1,
      borderTopColor: "#eee",
  
      paddingTop: 16,
      marginTop: 16,
    },
  });