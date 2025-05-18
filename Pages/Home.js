import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './Header';
import Timer from './Timer';
import Crono from './Crono'
//Novo arquivo Home.js
export default function Home(){
    return(
        <>
        <Header title='CronoApp' />
            <View style={styles.container}>
                <Text style={styles.title}>Crie uma contagem regressiva!</Text>
                <View style={styles.flex}>
                    <Text style={styles.Text}>Horas</Text>
                    <Text style={styles.Text}>Minutos</Text>
                    <Text style={styles.Text}>Segundos</Text>
                </View>
            <Timer />
            <Text style={styles.title}>Inicie o cronômetro</Text>
            <Crono />
        </View>
        </>
        
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A37BA7',
    alignItems: 'center',
    paddingTop: 30
  },
  title: {
    textAlign: 'center',
    borderRadius: 20,
    width: 300,
    backgroundColor: '#7B4680',
    fontSize: 30,
    fontWeight: 'semibold',
    color: 'black',
    padding: 10
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10

  },
  Text : {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15
  },
  flex: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    flexDirection: 'row'
  }
})
