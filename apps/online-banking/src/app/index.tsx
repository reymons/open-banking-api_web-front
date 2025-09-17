import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles/reset.scss";

const rootEl = document.getElementById("app");
const root = createRoot(rootEl!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
