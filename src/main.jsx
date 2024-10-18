//react
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

//styles
import "styles/index.css";
import "styles/fonts.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
);
