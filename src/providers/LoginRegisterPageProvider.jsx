//react-router-dom
import { Navigate } from "react-router-dom";

//utils
import { getCookie } from "utils/cookie";

function LoginRegisterPageProvider({ children }) {
  const token = getCookie("token");
  if (token) return <Navigate to="/admin" />;

  return children;
}

export default LoginRegisterPageProvider;
