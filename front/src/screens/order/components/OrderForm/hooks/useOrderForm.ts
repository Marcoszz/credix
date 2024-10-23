import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

const useOrderForm = () => {
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
      localStorage.setItem(`shippingInfo_${cnpj}`, JSON.stringify(shippingInfo));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o recarregamento da página
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
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    resetForm,
  };
};

export default useOrderForm;
