import {Text, StyleSheet, View} from 'react-native';
import Header from './Header';
import Timer from './Timer';
import Crono from './Crono';
import { useModo } from '../context/ModoContext.js'; 

//Novo arquivo Home.js
export default function Home(){
    const { opcaoButton } = useModo();

    const exibir = () => {
        if (opcaoButton){
          return(
            <View>
              <Text style={styles.title}>Crie um temporizador</Text>
              <View style={styles.flex}>
                <Text style={styles.Text}>Horas</Text>
                <Text style={styles.Text}>Minutos</Text>
                <Text style={styles.Text}>Segundos</Text>
              </View>
              <Timer />
            </View>
          );
        } else{
          return(
            <View>
              <Text style={styles.title}>Inicie o cronômetro</Text>
              <Crono />
            </View>
          );
        }
      }
    return(
        <>
        <Header title='CronoApp' />
        <View style={styles.container}>
          {exibir()};
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
    alignSelf: 'center',
    borderRadius: 20,
    minWidth: 300,
    maxWidth: 350,
    backgroundColor: '#7B4680',
    fontSize: 30,
    fontWeight: 'semibold',
    color: 'black',
    padding: 10,
    marginBottom: 25,
  },
  Text : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '27.5%',
  },
  flex: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    maxWidth: 400,
  }
})
