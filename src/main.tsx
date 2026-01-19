import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./assets/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Olá mundo</h1>
    <App />
  </StrictMode>,
);
