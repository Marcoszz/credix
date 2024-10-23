import { useState } from 'react';
import api from '../api';

export interface Product {
  id: string;
  productName: string;
  unitPriceCents: number;
  stockQuantity: number;
  description: string;
}

const useGetProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`${import.meta.env.VITE_API_URL}/products`);
            setProducts(response.data);
        } catch (err) {
            setError(String(err));
        } finally {
            setLoading(false);
        }
    };

    return { products, loading, error, fetchProducts };
};

export default useGetProducts;
