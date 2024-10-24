import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Alert, Button, Paper } from "@mui/material";
import Header from "../../components/Header";
import useStatus from "./hooks/useStatus";

interface StatusProps {
  error: string | null;
}

const renderContent = (error: any | null) => {
  if (error) {
    return (
      <>
        <Alert severity="error">
          {`An error occurred while creating order: ${error.data.message}`}
        </Alert>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 240 }} />
      </>
    );
  }

  return (
    <>
      <Alert severity="success">Order created successfully!</Alert>
      <SentimentVerySatisfiedIcon sx={{ fontSize: 240 }} />
    </>
  );
};

const Status = ({ error }: StatusProps) => {
  const { handlePressHome } = useStatus();
  return (
    <>
      <Header />
      <div className="w-full min-h-[100vh] flex items-center gap-4 px-4 py-24">
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: "1000px",
            minHeight: "740px",
            padding: "16px",
            margin: "0 auto",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          elevation={3}
        >
          {renderContent(error)}
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePressHome}
            >
              Go to Home
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Status;
