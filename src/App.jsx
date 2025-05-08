import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
// import ProductsList from "./pages/ProductsList";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import LanguageContext from "./context/Language";
import Loading from "./components/Loading";

const ProductsList = lazy(() => import("./pages/ProductsList"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [language, setLanguage] = useState(false);
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
