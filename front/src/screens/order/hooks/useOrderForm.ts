import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import useCreateOrder, { Order } from "../../../services/hooks/useCreateOrder";
import useCart from "../../cart/hooks/useCart";
import { useNavigate } from "react-router-dom";

const useOrderForm = () => {
  const navigate = useNavigate();
  const { createOrder, loading } = useCreateOrder();
  const { cartItems } = useCart();
  const [formValues, setFormValues] = useState({
    cnpj: "",
    shippingAddress: "",
    shippingCity: "",
    shippingRegion: "",
    shippingPostalCode: "",
    shippingCountry: "",
    paymentTerm: "",
  });

  const saveShippingInfoToLocalStorage = () => {
    const { cnpj, ...shippingInfo } = formValues;

    if (cnpj) {
      localStorage.setItem(
        `shippingInfo_${cnpj}`,
        JSON.stringify(shippingInfo)
      );
    }
  };

  const loadShippingInfoFromLocalStorage = (cnpj: string) => {
    const savedShippingInfo = localStorage.getItem(`shippingInfo_${cnpj}`);

    if (savedShippingInfo) {
      setFormValues((prevValues) => ({
        ...prevValues,
        ...JSON.parse(savedShippingInfo),
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "cnpj" && value) {
      loadShippingInfoFromLocalStorage(value);
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;

    if (name) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value as string,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
      cnpj,
      shippingAddress,
      shippingCity,
      shippingRegion,
      shippingPostalCode,
      shippingCountry,
      paymentTerm,
    } = formValues;

    if (
      cnpj &&
      shippingAddress &&
      shippingCity &&
      shippingRegion &&
      shippingPostalCode &&
      shippingCountry &&
      paymentTerm
    ) {
      saveShippingInfoToLocalStorage();

      const subtotalAmountCents = cartItems.reduce(
        (acc, item) => acc + item.unitPriceCents * item.quantity,
        0
      );
      const response = await createOrder({
        buyerTaxId: cnpj,
        shippingLocation: {
          address1: shippingAddress,
          city: shippingCity,
          region: shippingRegion,
          postalCode: shippingPostalCode,
          country: shippingCountry,
        },
        subtotalAmountCents,
        items: cartItems,
        installments: [
          {
            maturityDate: new Date(
              new Date().setDate(new Date().getDate() + Number(paymentTerm))
            ).toISOString(),
            faceValueCents:
              subtotalAmountCents +
              Number(import.meta.env.VITE_TAX_AMOUNT_CENTS) +
              Number(import.meta.env.VITE_SHIPPING_COSTS_CENTS),
          },
        ],
      } as Order);
      navigate("/status", { state: { error: response.statusCode ? response : null} });
    } else {
      alert("Please fill in all fields!");
    }
  };

  const resetForm = () => {
    setFormValues({
      cnpj: "",
      shippingAddress: "",
      shippingCity: "",
      shippingRegion: "",
      shippingPostalCode: "",
      shippingCountry: "",
      paymentTerm: "",
    });
  };

  return {
    formValues,
    loading,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    resetForm,
  };
};

export default useOrderForm;
