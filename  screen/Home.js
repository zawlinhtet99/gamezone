import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/Global";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import ReviewDetails from "./ReviewDetails";
import ReviewForm from './ReviewForm';
import Cards from "../share/Cards";

export default function Home({ navigation }){
    
  const [modalOpen,setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {
          title: "Zelda, Breath of Fresh Air",
          rating: 5,
          body: "lorem ispum",
          key: "1",
        },
        {
          title: "Gotta Catch Them All (again)",
          rating: 4,
          body: "lorem ispum",
          key: "2",
        },
        {
          title: "Not So 'Final' Fantasy",
          rating: 3,
          body: "lorem ispum",
          key: "3",
        },
      ]);
  
  const removeItem =(key)=>{
        setReviews((prevReviews)=>{
          return prevReviews.filter( ite=>ite.key != key );
        })
    }

  const addReview = (review)=>{
    review.key = Math.random().toString();
    setReviews((currentReview)=>{
      return [review, ...reviews];
    })
    setModalOpen(false);
  }

    return (
        <View style={globalStyles.container}>
          <Modal visible={modalOpen} animationType="slide" >
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
              <SafeAreaView style={styles.modalContent}>
                <MaterialIcons 
                  style={[styles.modalClose,styles.modalToggle]} 
                  name="close" size={24} 
                  onPress={()=>setModalOpen(false)} />
                <ReviewForm addReview={addReview} />
              </SafeAreaView>
            </TouchableWithoutFeedback>
          </Modal>

          <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={()=>setModalOpen(true)} />
            <FlatList data={reviews} keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails", item ) }>
                        <Cards>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                        <AntDesign name="delete" size={23} onPress={()=>removeItem(item.key)} />
                        </Cards>  
                    </TouchableOpacity> )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },

  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },

  modalContent: {
    flex: 1,
  },
});
