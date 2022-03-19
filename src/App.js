import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Signup/Signup";
import HomePage from "./Pages/HomePage/HomePage";
import LogIn from "./Pages/LogIn/LogIn";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import ProductPage from "./Pages/ProfductPage/ProductPage";
import BusketPage from "./Pages/BusketPage/BusketPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import ErrorNF from "./Pages/ErrorNF/ErrorNF";
// import { useSelector } from "react-redux";

function App() {
  // const isAuth = useSelector((state) =>state.auth.isAuth)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/busket" element={<BusketPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product?id=" element={<ProductPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ErrorNF />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
