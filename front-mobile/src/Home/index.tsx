import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';


 function Home() {
     const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Orders');
    }
  return (
    <>
        <Header />
        <View style={style.container}>
        <Image source={require('../assets/deliveryman.png')} />
        <Text style={style.title}>Acompanhe os pedidos{'\n'} e entregue no prazo!</Text>
        <Text style={style.subTitle}>Receba todos os pedidos do seu{'\n'} restaurante na palma da sua mão</Text>
    </View>
    <View style={style.footer}>
        <RectButton style={style.button} onPress={handleOnPress}>
            <Text style={style.buttonText}>VER PEDIDOS</Text>
        </RectButton>
    </View>

    </>
  );
  }

const style = StyleSheet.create({
    container: {
      marginTop: '5%',
      alignItems: 'center'
    },
    title: {
      color: '#263238',
      fontSize: 26,
      lineHeight: 35,
      fontWeight: 'bold',
      marginTop: 31,
      textAlign: 'center'
    },
    subTitle: {
      color: '#9E9E9E',
      fontSize: 16,
      marginTop: 15,
      lineHeight: 22,
      textAlign: 'center'
    },
    footer: {
      marginTop: '5%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24
    }
  })

export default Home;
