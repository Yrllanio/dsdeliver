import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fatchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

 function Orders() {
   
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoadin, setIsLoadin] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused(); 

    const fetchData = () => {
    setIsLoadin(true);
    fatchOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
    .finally(() => setIsLoadin(false));
  }

  useEffect(() => {
    if (isFocused){
      fetchData();
    }    

  }, [isFocused]);

  

  const handleOnPress = (order: Order) => {
      navigation.navigate('OrderDetails',{
        order
      });
  }

  return (
    <>
    <Header />
      <ScrollView style={styles.container}>
       {isLoadin ? (
         <Text>Buscando pedidos...</Text>
       ) : (
            orders.map(order => (
              <TouchableWithoutFeedback
              key ={order.id}
              onPress={() =>handleOnPress(order)}
            >
              <OrderCard order={order}/>
            </TouchableWithoutFeedback>
         ))
       )}
      </ScrollView>
    </>
  );
  }

const styles = StyleSheet.create({
  container:{
    paddingRight: '5%',
    paddingLeft: '5%'
}
});
   

export default Orders;
