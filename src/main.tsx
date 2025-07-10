import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import Effect from "./Effect.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Effect />
  </StrictMode>
);
