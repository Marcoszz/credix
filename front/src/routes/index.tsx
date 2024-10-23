import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
