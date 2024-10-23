//react-router-dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//pages
import PageNotFound from "pages/404";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import ProductsPage from "pages/ProductsPage";

//utils
import { getCookie } from "utils/cookie";

function Router() {
  const token = getCookie("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <ProductsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
