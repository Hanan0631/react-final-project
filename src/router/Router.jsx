//react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

//pages
import AuthPage from "pages/AuthPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default Router;
