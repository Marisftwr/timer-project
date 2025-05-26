import {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import moment from 'moment';

export default function Timer(){
    const [hora, setHora] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [segundo, setSegundo] = useState(0);
    const [totalSegundos, setTotalSegundos] = useState(0);

    // aceita true ou false - determina se o temporizador esta iniciado ou nao
    const [tempIniciado, setTempIniciado] = useState(false);

   
    //inicia o temporizador
    const iniciaTemp = () => {
      // transforma a contagem regressiva em segundos
      const total = hora*3600 + minuto*60 + segundo;

      if((!tempIniciado) && (total>0)) {
        // temporizador iniciado com algum valor válido
        setTempIniciado(true);
        setTotalSegundos(total);
      } else if((tempIniciado) && (total==0))
      // quando termina a contagem regressiva
      // * adicionar som
      console.log("acabou");
    }

    useEffect (() => {
      if(tempIniciado==false)
        return;
      const interval = setInterval(() => {
        setTotalSegundos((segundosRestantes) => {
            if (segundosRestantes <= 1){
                clearInterval(interval);
                setTempIniciado(false);
                return 0;
              } 
              return segundosRestantes-1;
        });
      }, 1000);

    return () => clearInterval(interval);
    }, [tempIniciado]);

    const exibir = () => {
      if (tempIniciado){
        return(
          <View style={styles.flexInput}>
            <Text style={styles.temp}>
              {moment.utc(totalSegundos * 1000).format('HH : mm : ss')}
              </Text>
          </View>
        );
      } else{
        return(
          <View style={styles.flexInput}>
            <TextInput style={styles.input}
              value = {hora}
              maxLength = {2}
              keyboardType="numeric"
              placeholder = '00'
              onChangeText={(t) => {
              setHora( Math.max(0, Math.min(23, parseInt(t) || 0)));
              }}
            />
            <Text style={styles.text}>:</Text>
            <TextInput style={styles.input}
              value = {minuto}
              maxLength = {2}
              keyboardType="numeric"
              placeholder = '00'
              onChangeText={(t) => {
                setMinuto( Math.max(0, Math.min(59, parseInt(t) || 0)));
              }}
            />
            <Text style={styles.text}>:</Text>
            <TextInput style={styles.input}
              value = {segundo}
              maxLength = {2}
              keyboardType="numeric"
              placeholder = '00'
              onChangeText={(t) => {
                setSegundo( Math.max(0, Math.min(59, parseInt(t) || 0)));
              }}
            />
          </View>
        );
      }
    }
    return (
        <View style={styles.flex}>
          <View>
            {exibir()}
            <View>
                <TouchableOpacity style={styles.button} onPress={iniciaTemp} disabled={tempIniciado}>
                  <Text> Iniciar </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
       
    )
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#9D86A3",
    padding: 10,
    borderWidth: '1px',
    borderColor: '#754E71',
    borderStyle: 'solid',
    borderRadius: 10,
    width: 75,
    alignSelf: 'center',
  },
  input: {
    width: '25%',
    height: '85%',
    textAlign: 'center',
    textAlignVertical: 'center', 
    justifyContent: 'center',
    paddingVertical: '2.5%',  
    backgroundColor: '#9D86A3',
    heigth: '100%',
    fontSize: 50,
    color: '#754E71',
    margin: '2.5%',
    borderRadius: 5,
  },
  temp: {
    textAlign: 'center',
    width: '100%',
    lineHeight: 75,
    alignItems: 'center',
    color: '#754E71',
    fontSize: 75,
    letterSpacing: 5,
  },
  text: {
    alignItems: 'center',
    fontSize: 75,
    color: '#754E71',
    height: '100%',
  },
  flexInput: {
    height: '33%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: "#BB9FC2",
    borderRadius: 5,
    width: '90%',
    maxWidth: 400,
    fontSize: 50,
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  flex: {
    maxWidth: 500,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  }
})