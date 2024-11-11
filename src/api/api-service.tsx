import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});


export const fetchProducts = async () => {
    try {
        // const randomId = (Math.floor(Math.random() * 1454) + 1).toString;
        const response = await api.get(`/products?limit=20`);
        return response.data;
    } catch(e) {
        console.error('Error get single user: ', e);
        throw e;
    }
}