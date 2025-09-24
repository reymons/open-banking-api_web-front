import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./provider";
import { AppRouter } from "./router";
import "./styles/global.scss";

const rootEl = document.getElementById("app");
const root = createRoot(rootEl!);

root.render(
    <StrictMode>
        <AppProvider>
            <AppRouter />
        </AppProvider>
    </StrictMode>
);
