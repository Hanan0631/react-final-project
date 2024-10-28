//react-router-dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//pages
import PageNotFound from "pages/404";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import AdminPage from "pages/AdminPage";

//utils
import { getCookie } from "utils/cookie";
import Store from "src/pages/Store";
import { useState } from "react";

function Router() {
  const [page, setPage] = useState(1);
  const token = getCookie("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Store page={page} setPage={setPage} />} />
        <Route
          path="/admin"
          element={
            token ? (
              <AdminPage page={page} setPage={setPage} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/admin" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/admin" /> : <RegisterPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
