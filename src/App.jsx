import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import LanguageContext from "./context/Language";

function App() {
  const [language, setLanguage] = useState(false);
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
