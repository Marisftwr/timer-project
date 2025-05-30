import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import moment from 'moment';

export default function Crono(){
    //contagem do tempo 
    const [tempoDecorrido, setTempoDecorrido] = useState(0);

    //aceita true ou falso - determina se o cronômetro ta iniciado ou não
    const [iniciado, setIniciado] = useState(false);

    //executado ao alterar o 'iniciado'
    let interval;
    useEffect(() => {
      //atualização do tempoDecorrido quando o cronômetro está iniciado
      if (iniciado) {
        interval = setInterval(() => {
          setTempoDecorrido(prevTempo => prevTempo+0.1);
        }, 10);
      } 
      
      //cancela a variável interval caso o cronômetro esteja pausado
      else {
        clearInterval(interval);
      }

      //garante que interval seja cancelada quando o componente for desmontado
      return () => clearInterval(interval);
    }, [iniciado]);

    //inicia o cronômetro 
    const iniciaCrono = () => {
      if(!iniciado) {
        setIniciado(true);
      }
    };
    
    //pausa o cronômetro
    const pausaCrono = () => {
      if(iniciado) {
        setIniciado(false);
      }
    }

    //zera o cronômetro
    const zeraCrono = () => {
      clearInterval(interval);
      setTempoDecorrido(0);
      setIniciado(false);
    }

    return (
        <>
        <View style={styles.flex}>
          <View style={styles.crono}>
            <Text style={styles.textCrono}>
              {moment.utc(tempoDecorrido * 100).format('mm : ss . SS')}
            </Text>
          </View>
          <View style={styles.flexButtons}>
            <TouchableOpacity style={styles.button} onPress={iniciaCrono}><Text>Iniciar</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={pausaCrono}><Text>Pausar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={zeraCrono}><Text>Zerar</Text></TouchableOpacity>
          </View>            
                 
        </View>
    
        </>
     
    )
    
}
const styles = StyleSheet.create({
  textCrono: {
    backgroundColor: '#BB9FC2',
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    color: '#754E71',
    fontSize: 65,
    paddingHorizontal: 5,
    letterSpacing: 4,
  },
  flexButtons: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: '#99629A',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#7B4680',
    borderStyle: 'solid',
  },
  flex: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    flexDirection: 'column'
  },

  crono: {
    paddingTop: 10,
    fontSize: '25px'
  },
})
