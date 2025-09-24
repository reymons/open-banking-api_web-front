import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { paths } from "@/config/paths";

const HomePage = lazy(() => import("./pages/home"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <div style={{ height: "100svh", backgroundColor: "var(--color-secondary)" }} />
                }
            >
                <Routes>
                    <Route index path={paths.home.path} element={<HomePage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
