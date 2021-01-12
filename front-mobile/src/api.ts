import axios from "axios";

const API_URL = 'https://dsdeliver-yrllanio.herokuapp.com'

export function fatchOrders(){
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}