import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, button} from 'react-native';


const Loggin = () => {
  return (
    <ScrollView>
      
      <View style={styles.container}>
      
      <Text style={styles.color}> Registrate</Text>
        <Text></Text>
        <Image
        source={{
         uri: 'https://th.bing.com/th/id/OIP.KBmi5JXCOfDx-KjBKXm5mQHaHa?pid=ImgDet&w=600&h=600&rs=1',  
        }}
        style={{width: 200, height: 200, borderRadius: 20}}
        />
       
      <TextInput
        style={{
          height: 40,
          borderColor: 'purple',
          borderWidth: 3,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop:10,
          with:"auto",
          backgroundColor: '#FF8C00',
        }}
        placeholder="usuario"
      
      />
      
       <TextInput
        style={{
          height: 40,
          borderColor: 'purple',
          borderWidth: 3,
          textAlign: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop:10,
          with:"auto",
          backgroundColor: '#FF8C00',
        }}
        placeholder="contraseña"
      />
        
        </View> 
        <button style={styles.button}>
        <Text> Entrar</Text>
       </button>
    </ScrollView>
   
  );
};
 const styles= StyleSheet.create({
  container: {
   marginTop: 5,
   alignItems: "center",
   height: 'auto',
   backgroundColor: '#00CED1',
  }, 
  color:{
    color:'black',
    fontWeight: 'bold',
    fontSize:45,
    
  },
  button: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:10,
    width: 100,
    backgroundColor: '#FF8C00',
    fontSize:23,
  }
});

export default Loggin;
