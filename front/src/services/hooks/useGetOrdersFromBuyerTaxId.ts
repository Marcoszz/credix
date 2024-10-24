import { useState } from "react";
import api from "../api";

export interface ShippingLocation {
  address1: string;
  address2?: string | null;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface Installment {
  maturityDate: string;
  faceValueCents: number;
}

export interface Order {
  id: string;
  externalId: string;
  subtotalAmountCents: number;
  taxAmountCents: number;
  shippingCostCents: number;
  totalAmountCents: number;
  shippingLocation: ShippingLocation;
  status: string;
  createdAt: string;
  installments: Installment[];
  buyerTaxId?: string;
  sellerTaxId?: string;
}

const useGetOrdersFromBuyerTaxId = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async (buyerTaxId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(
        `${import.meta.env.VITE_API_URL}/orders?buyerTaxId=${buyerTaxId}`
      );
      setOrders(response.data);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  return { orders, loading, error, fetchOrders };
};

export default useGetOrdersFromBuyerTaxId;
