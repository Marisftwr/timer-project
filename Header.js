import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
 
export default function Header(props) {
  return (
      <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.headerText}>{props.title}</Text>
                <Image style={styles.logo} source={require('../assets/clock_icon.png')} />
            </View>
            <View style={styles.flex}>
                <TouchableOpacity style={styles.button}><Text>Cronômetro</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text>Temporizador</Text></TouchableOpacity>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: 1000,
      paddingTop: 30,
      paddingBottom: 20,
      backgroundColor: '#4A2040',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    flex: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    flexDirection: 'row'
  },
  logo: {
    paddingLeft: 10,
    height: 30,
    width: 30

  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#C988D0",
    padding: 10,
    borderRadius: 10,
    marginLeft: 15
  }
  });

 