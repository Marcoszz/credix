import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import useOrderForm from "./hooks/useOrderForm";

const OrderForm = () => {
  const { formValues, handleInputChange, handleSelectChange, handleSubmit } =
    useOrderForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col justify-between gap-4 p-4 overflow-auto">
        <h2 className="text-lg font-bold mb-4">
          Fill order and shipping info:
        </h2>

        <div className="flex flex-col gap-4 px-8 h-[450px] overflow-auto">
          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">CNPJ:</h2>
            <Input
              name="cnpj"
              value={formValues.cnpj}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">Shipping Address:</h2>
            <Input
              name="shippingAddress"
              value={formValues.shippingAddress}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">Shipping City:</h2>
            <Input
              name="shippingCity"
              value={formValues.shippingCity}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">Shipping Region:</h2>
            <Input
              name="shippingRegion"
              value={formValues.shippingRegion}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">Shipping Postal Code:</h2>
            <Input
              name="shippingPostalCode"
              value={formValues.shippingPostalCode}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">Shipping Country:</h2>
            <Input
              name="shippingCountry"
              value={formValues.shippingCountry}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <h2 className="text-sm font-bold mb-2">Payment Term:</h2>
            <Select
              name="paymentTerm"
              value={formValues.paymentTerm}
              onChange={handleSelectChange}
              required
            >
              <MenuItem value={7}>7 Days</MenuItem>
              <MenuItem value={14}>14 Days</MenuItem>
              <MenuItem value={30}>30 Days</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className="h-full flex justify-center items-end mt-auto"
          style={{ paddingBottom: "16px" }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={
              !formValues.cnpj ||
              !formValues.shippingAddress ||
              !formValues.shippingCity ||
              !formValues.shippingRegion ||
              !formValues.shippingPostalCode ||
              !formValues.shippingCountry ||
              !formValues.paymentTerm
            }
            type="submit"
          >
            Submit Order
          </Button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
