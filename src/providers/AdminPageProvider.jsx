//react-router-dom
import { Navigate } from "react-router-dom";

//utils
import { getCookie } from "utils/cookie";

function AdminPageProvider({ children }) {
  const token = getCookie("token");
  if (!token) return <Navigate to="/login" />;

  return children;
}

export default AdminPageProvider;
