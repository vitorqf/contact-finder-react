import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalProvider } from "./hooks/useModal.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
