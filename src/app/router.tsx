import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { paths } from "@/config/paths";

const HomePage = lazy(() => import("./pages/home"));
const RegisterPage = lazy(() => import("./pages/register"));
const LoginPage = lazy(() => import("./pages/login"));

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
                    <Route path={paths.register.path} element={<RegisterPage />} />
                    <Route path={paths.login.path} element={<LoginPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
