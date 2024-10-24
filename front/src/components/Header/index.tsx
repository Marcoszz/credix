import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[75px] flex justify-start items-center text-center border-b border-b-gray-300 fixed top-0 bg-white z-10 px-4 shadow-md">
      <h1 onClick={() => navigate("/")}>REF-IMAGINARY-SELLER x CrediPay</h1>
    </header>
  );
};

export default Header;
