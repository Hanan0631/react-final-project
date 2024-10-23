//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//providers
import TanstackQueryProvider from "providers/tanstackQueryProvider";

//router
import Router from "router/Router";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
      <ToastContainer />
      {/* <ReactQueryDevtools /> */}
    </TanstackQueryProvider>
  );
}

export default App;
