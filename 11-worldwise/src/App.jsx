import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useState } from "react";
import { useEffect } from "react";
// import PageNav from "./components/PageNav";
const BASE_URL = `http://localhost:8000/cities`;
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function fetchCities() {
        try {
          const res = await fetch(BASE_URL);
          const data = await res.json();
          setCities(data);
        } catch {
          alert("There was an error loading data...");
        } finally {
          setIsLoading(true);
        }
      }
      fetchCities();
    },
    []
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities" element={<p>List of cities</p>} />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
