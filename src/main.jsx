import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GlobalStyles } from "./styles/globalStyles";
import { Reset } from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
