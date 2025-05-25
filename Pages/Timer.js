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

    
    return (
        <View style={styles.flex}>
          <View>
            <View>
              <Text style={styles.temp}>
                {moment.utc(totalSegundos * 1000).format('HH : mm : ss')}
              </Text>
            </View> 
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
                <Text>:</Text>
                <TextInput style={styles.input}
                    value = {minuto}
                    maxLength = {2}
                    keyboardType="numeric"
                    placeholder = '00'
                    onChangeText={(t) => {
                      setMinuto( Math.max(0, Math.min(59, parseInt(t) || 0)));
                    }}
                />
                <Text>:</Text>
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
            <View>
                <TouchableOpacity style={styles.button} onPress={iniciaTemp}>
                  <Text>Iniciar</Text>
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
    backgroundColor: "#C988D0",
    padding: 10,
    borderRadius: 10,
    width: 55,
    alignSelf: 'center',
  },
  input: {
    width: '30px',
    textAlign: 'center',
  },
  temp: {
    alignItems: 'center',
    fontSize: 50,
  },
  flexInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: "#C988D0",
    borderRadius: 10,
    width: 70,
  },
  flex: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    flexDirection: 'row'
  }
})