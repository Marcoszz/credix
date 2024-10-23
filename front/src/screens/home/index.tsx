import Header from "../../components/Header";
import useHome from "./hooks/useHome";

const Home = () => {
  const { products } = useHome();

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Header />
        <h1>iu</h1>
      </div>
    </>
  );
};

export default Home;
