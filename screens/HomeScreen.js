import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const Home =() =>{
    return (
      <view style={styles.container}>
        <Text style={styles.color}> BIENVENIDO </Text>
       
      </view>
      
    );
};

export default Home;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFA500'
 }, 
 color:{
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "20%",
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '37%',
    padding: "3%",
    fontSize:  30,
    marginTop: '40%'
    
 },
  body: {
    flex: 1,
    backgroundColor: '#009387'
  }
})
 