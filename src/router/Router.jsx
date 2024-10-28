//react
import { useState } from "react";

//react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import PageNotFound from "pages/404";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import AdminPage from "pages/AdminPage";
import Store from "pages/Store";

//providers
import AdminPageProvider from "providers/AdminPageProvider";
import LoginRegisterPageProvider from "providers/LoginRegisterPageProvider";

function Router() {
  const [page, setPage] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Store page={page} setPage={setPage} />} />
        <Route
          path="/admin"
          element={
            <AdminPageProvider>
              <AdminPage page={page} setPage={setPage} />
            </AdminPageProvider>
          }
        />
        <Route
          path="/login"
          element={
            <LoginRegisterPageProvider>
              <LoginPage />
            </LoginRegisterPageProvider>
          }
        />
        <Route
          path="/register"
          element={
            <LoginRegisterPageProvider>
              <RegisterPage />
            </LoginRegisterPageProvider>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
