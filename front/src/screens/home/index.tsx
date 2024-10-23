import { Pagination, Paper } from "@mui/material";
import Header from "../../components/Header";
import useHome from "./hooks/useHome";
import ProductsList from "./components/productsList";

const Home = () => {
  const {
    products,
    currentPage,
    error,
    handleChangePage,
    loading,
    totalPages,
  } = useHome();

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
        >
          <ProductsList productsList={products} />
        </Paper>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => handleChangePage(page)}
        />
      </div>
    </>
  );
};

export default Home;
