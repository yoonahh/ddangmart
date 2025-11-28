import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ddangmart.shinhan.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (category?: string) => {
  try {
    const response = await apiClient.get('/products', {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductDetail = async (id: string) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const createOrder = async (items: any[]) => {
  try {
    const response = await apiClient.post('/orders', { items });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
