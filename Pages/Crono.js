import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
export default function Crono(){
    return (
        <>
        <View style={styles.flex}>
                <TouchableOpacity style={styles.button}><Text>Iniciar</Text></TouchableOpacity> 
                <TouchableOpacity style={styles.button}><Text>Pausar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text>Zerar</Text></TouchableOpacity> 
        </View>
    
        </>
     
    )
    
}
const styles = StyleSheet.create({
     button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#C988D0",
    padding: 10,
    borderRadius: 10,
    marginLeft: 15
  },
  flex: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    flexDirection: 'row'
  }
})
