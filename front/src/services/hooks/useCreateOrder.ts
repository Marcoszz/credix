import { useState } from 'react';
import api from '../api';
import { Item } from '../../contexts/CartContext/types';

export interface Order {
  subtotalAmountCents: number;
  shippingLocation: {
    address1: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  installments: {
    maturityDate: string;
    faceValueCents: number;
  }[];
  buyerTaxId: string;
  items: Item[];
}

const useCreateOrder = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const createOrder = async (order: Order) => {
    setLoading(true);

    try {
      const response = await api.post(`${import.meta.env.VITE_API_URL}/orders`, order);
      return response.data;
    } catch (err: any) {
      if (err.response) {
        const { error } = err.response.data;
        return error

      } else {
        return { error: 'Error', statusCode: 500 };
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, createOrder };
};

export default useCreateOrder;
