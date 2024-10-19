//react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

//pages
import AuthPage from "pages/AuthPage";
import ProductsPage from "pages/ProductsPage";
import PageNotFound from "pages/404";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
