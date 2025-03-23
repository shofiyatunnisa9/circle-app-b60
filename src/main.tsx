import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as ChackraProvider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ChackraProvider> */}
    <App />
    {/* </ChackraProvider> */}
  </StrictMode>
);
