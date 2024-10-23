import useHome from "./hooks/useHome";

const Home = () => {
  const { products } = useHome();

  console.log(products);
  return <></>;
};

export default Home;
