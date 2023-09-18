import { Formik } from "formik";
import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/Global";
import * as yup from 'yup';
import FlatButton from "../share/Button";

export default function ReviewForm({ addReview }){

    const reviewScahema = yup.object({
        title:yup.string().required().min(4),
        body:yup.string().required().min(8),
        rating:yup.string().required().test('num is 1-5',"Rating must be a number 1-5",(val)=>{
            return parseInt(val) >0 && parseInt(val) <6 ;
        })
    })
    
    return (
        <View style={globalStyles.container}>

        <Formik initialValues={{ title:"", body:"", rating:"" }}
            validationSchema={reviewScahema}
            onSubmit={(values, action)=>{
                action.resetForm();
                addReview(values);
            }}>
            {(props)=>(
                <View>
                    <TextInput
                        value={props.values.title}
                        onChangeText={props.handleChange("title")}
                        style={globalStyles.input}
                        placeholder="Review Title"
                        onBlur={props.handleBlur("title")}
                    />
                    <Text style={globalStyles.errorText}>
                        { props.touched.title && props.errors.title }
                    </Text>
                    <TextInput 
                        value={props.values.body}
                        onChangeText={props.handleChange("body")}
                        style={globalStyles.input}
                        placeholder="Review Body"
                        onBlur={props.handleBlur("body")}
                    />
                    <Text style={globalStyles.errorText}>
                        { props.touched.body && props.errors.body }
                    </Text>
                    <TextInput
                        value={props.values.rating} 
                        onChangeText={props.handleChange("rating")}
                        keyboardType="numeric"
                        style={globalStyles.input}
                        placeholder="Rating"
                        onBlur={props.handleBlur("rating")}
                    />
                    <Text style={globalStyles.errorText}>
                        { props.touched.rating && props.errors.rating }
                    </Text>
                    <FlatButton title="Submit" onPress={props.handleSubmit} />
                </View>
            )}
        </Formik>
        </View>
        
    )
}

