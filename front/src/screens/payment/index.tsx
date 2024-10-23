import { Paper } from "@mui/material";
import Header from "../../components/Header";

const Payment = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-[100vh] flex flex-col items-center gap-4 px-4 py-24">
        <Paper
          sx={{
            width: "100%",
            maxWidth: "1000px",
            minHeight: "740px",
            padding: "16px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
          elevation={3}
        ></Paper>
      </div>
    </>
  );
};

export default Payment;
