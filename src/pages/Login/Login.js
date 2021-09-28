import React,{useState} from "react";
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import styles from "./Login.style";

import { Formik } from 'formik';


export default function Login() {

    function handleLogin(values){
        console.log(values)
    }
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Text style={styles.logo_text}>Store</Text>
      </View>
    <Formik
     initialValues={{ email: '',password:'' }}
     onSubmit={handleLogin}
     >
    {({ handleChange, handleSubmit, values }) => (
      <View style={styles.body_container}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#003f5c"
            style={styles.input}
            onChangeText={handleChange('email')}
            value={values.email}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#003f5c"
            style={styles.input}
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={true} 
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

     )}
    </Formik>
    </SafeAreaView>
  );
}
